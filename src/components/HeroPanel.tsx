import { IconCheck } from "./icons";

/*
  Hero side panel. A real, honest "how we engage" card (not a faux code
  window): the dark crafted object the brand likes, carrying true content
  instead of decorative fake code. Dark surface on the light page, yellow
  accents, JetBrains Mono label.
*/
const modes = [
  { title: "Tailored teams", text: "Sized to the work, on demand." },
  { title: "Project or sprint", text: "Fixed scope, or your own cadence." },
  { title: "Team reinforcement", text: "Senior hands and mentoring." },
] as const;

export default function HeroPanel() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-[oklch(0.16_0.006_90)]">
      <div className="flex items-center gap-2.5 border-b border-white/10 px-5 py-4">
        <span className="h-2.5 w-2.5 -skew-x-12 bg-accent" aria-hidden="true" />
        <span className="font-mono text-xs tracking-tight text-white/55">
          how we plug in
        </span>
      </div>
      <ul className="divide-y divide-white/8 px-5">
        {modes.map((m) => (
          <li key={m.title} className="flex items-start gap-3.5 py-4">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-accent text-on-accent">
              <IconCheck className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="font-display text-base font-bold leading-snug text-white">
                {m.title}
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-white/55">
                {m.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
