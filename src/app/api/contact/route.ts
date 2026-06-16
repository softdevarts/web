import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

// The Resend SDK needs the Node.js runtime (not Edge), and this route reads
// the incoming request, so it must never be statically prerendered.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Where the messages land and who they appear to come from.
// CONTACT_FROM must be an address on a domain verified in Resend.
// Until the domain is verified, Resend's shared sender works for testing
// (it can only deliver to the account owner's email).
const TO = process.env.CONTACT_TO || site.email;
const FROM = process.env.CONTACT_FROM || "SoftDevArts <onboarding@resend.dev>";

// Anti-spam tuning.
const MIN_ELAPSED_MS = 3000; // reject submissions faster than a human can fill
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5; // accepted submissions per IP per window

// Best-effort in-memory rate limiter. State lives in the warm Lambda instance,
// so it blunts bursts from a single IP but is NOT a hard, cross-instance
// guarantee. For that you'd need a shared store (DynamoDB/Redis) or an AWS WAF
// rate rule in front of Amplify — overkill for a low-traffic contact form.
const recentHits = new Map<string, number[]>();

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (recentHits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  hits.push(now);
  recentHits.set(ip, hits);

  // Bound memory: drop entries whose hits have all aged out.
  if (recentHits.size > 5000) {
    for (const [key, times] of recentHits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        recentHits.delete(key);
      }
    }
  }

  return hits.length > RATE_LIMIT_MAX;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const fields = (body ?? {}) as Record<string, unknown>;
  const str = (value: unknown) => (typeof value === "string" ? value : "");

  // Anti-spam 1 — honeypot: bots fill this hidden field. Pretend success and
  // send nothing, so they don't learn they were caught.
  if (str(fields.website)) {
    return NextResponse.json({ ok: true });
  }

  // Anti-spam 2 — timing trap: humans take a few seconds to fill the form. The
  // client reports how long that took; anything submitting instantly (or
  // POSTing this API directly without the field) is treated as a bot.
  const elapsedMs =
    typeof fields.elapsedMs === "number" ? fields.elapsedMs : 0;
  if (elapsedMs < MIN_ELAPSED_MS) {
    return NextResponse.json({ ok: true });
  }

  // Anti-spam 3 — best-effort per-IP rate limit to protect the Resend quota.
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { error: "Too many messages from your network. Please try again later." },
      { status: 429 },
    );
  }

  const nombre = str(fields.nombre);
  const email = str(fields.email);
  const asunto = str(fields.asunto);
  const mensaje = str(fields.mensaje);

  const name = nombre.trim();
  const from = email.trim();
  const subject = asunto.trim();
  const message = mensaje.trim();

  if (!name || !from || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: from,
    subject: subject
      ? `Contact form: ${subject}`
      : `New contact message from ${name}`,
    text: `Name: ${name}\nEmail: ${from}\nSubject: ${subject || "(none)"}\n\n${message}`,
    html: `
      <h2>New contact message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(from)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject) || "(none)"}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Could not send the message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
