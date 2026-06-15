/*
  Giant scrolling statement band (Locomotive-style). Black background,
  oversized type alternating solid / outlined, yellow dot separators.
  Decorative, aria-hidden.
*/
const items = [
  "Custom development",
  "Consulting",
  "Digital product",
  "Cloud & DevOps",
  "Strategy",
];

export default function StatementMarquee() {
  return (
    <section
      aria-hidden="true"
      className="marquee-track overflow-hidden border-y border-fg bg-fg py-6 sm:py-9"
    >
      <ul className="animate-marquee-slow flex w-max items-center">
        {[...items, ...items].map((t, i) => (
          <li key={i} className="flex items-center">
            <span
              className={`font-display text-5xl font-bold uppercase tracking-tight sm:text-7xl ${
                i % 2 === 0 ? "text-base" : "text-outline-invert"
              }`}
            >
              {t}
            </span>
            <span className="mx-8 inline-block h-3 w-3 shrink-0 rounded-full bg-accent sm:mx-12" />
          </li>
        ))}
      </ul>
    </section>
  );
}
