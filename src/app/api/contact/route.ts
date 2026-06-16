import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

// Where the messages land and who they appear to come from.
// CONTACT_FROM must be an address on a domain verified in Resend.
// Until the domain is verified, Resend's shared sender works for testing
// (it can only deliver to the account owner's email).
const TO = process.env.CONTACT_TO || site.email;
const FROM = process.env.CONTACT_FROM || "SoftDevArts <onboarding@resend.dev>";

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

  const {
    nombre = "",
    email = "",
    asunto = "",
    mensaje = "",
    website = "",
  } = (body ?? {}) as Record<string, string>;

  // Honeypot: bots fill this hidden field. Pretend success, send nothing.
  if (website) {
    return NextResponse.json({ ok: true });
  }

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
