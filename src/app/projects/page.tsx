import type { Metadata } from "next";
import Image from "next/image";
import { aza } from "@/lib/site";
import { Eyebrow } from "@/components/ui";
import { IconArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AZA: a free, web-based method that helps families reconnect, designed and built by the SoftDevArts founders.",
};

const tags = ["Our own product", "Family wellbeing", "Free"] as const;

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="animate-floaty pointer-events-none absolute -right-16 top-24 hidden h-40 w-40 -skew-x-12 bg-accent/25 blur-[2px] lg:block [--rot:-12deg]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
          <Eyebrow>Projects</Eyebrow>
          <h1 className="font-display mt-6 max-w-3xl text-[2.5rem] leading-[0.98] tracking-[-0.03em] text-fg sm:text-6xl lg:text-7xl">
            Work we’re proud of
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-dim">
            What we design and build, including the products we create for
            ourselves.
          </p>
        </div>
      </section>

      {/* Featured project (single centred card) */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-xl px-4 py-20 sm:px-6 sm:py-24">
          <a
            href={aza.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${aza.name}: ${aza.tagline}. Opens aza.family in a new tab.`}
            className="reveal group block overflow-hidden rounded-2xl border border-line bg-base transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease-out)] hover:border-line-strong hover:shadow-soft motion-safe:hover:-translate-y-1"
          >
            {/* Preview: warm panel with the guide characters */}
            <div className="relative flex items-end overflow-hidden bg-[#f6ece2] px-6 pb-8 pt-10 sm:px-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#e8c9b0]/55 blur-2xl"
              />
              <ul className="relative flex w-full items-end justify-center gap-2 sm:gap-4">
                {aza.weeks.map((w, i) => (
                  <li
                    key={w.title}
                    className="ease-[var(--ease-out)] motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:-translate-y-2.5"
                    style={{ transitionDelay: `${i * 55}ms` }}
                  >
                    <Image
                      src={w.img}
                      alt=""
                      width={120}
                      height={120}
                      className="h-12 w-auto object-contain object-bottom drop-shadow-[0_8px_14px_rgba(59,42,34,0.13)] sm:h-20"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Content: short */}
            <div className="flex items-start justify-between gap-4 p-6 sm:p-8">
              <div>
                <h2 className="font-display text-2xl text-fg sm:text-3xl">
                  {aza.name}
                </h2>
                <p className="mt-1.5 text-dim">{aza.tagline}.</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line px-3 py-1 text-xs font-medium text-dim"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                aria-hidden="true"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-fg transition-[transform,background-color,border-color,color] duration-200 ease-[var(--ease-out)] group-hover:border-fg group-hover:bg-fg group-hover:text-base motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
              >
                <IconArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
