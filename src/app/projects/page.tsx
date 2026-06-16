import type { Metadata } from "next";
import Image from "next/image";
import { aza } from "@/lib/site";
import { IconArrowUpRight, IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AZA: a free, web-based method that helps families reconnect, designed and built by the SoftDevArts founders.",
};

/*
  Projects page. AZA in its own warm, pastel world with the five guide
  characters, a deliberate contrast to the main black/white/yellow brand.
*/
export default function ProjectsPage() {
  return (
    <div className="bg-[#f6ece2] text-[#3b2a22]">
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#e8c9b0]/50 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <Image
            src={aza.logo}
            alt="AZA flower logo with five coloured petals"
            width={160}
            height={160}
            className="mx-auto h-32 w-32"
            priority
          />
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#b4623c]">
            Our project · {aza.name}
          </p>
          <h1 className="font-display mt-3 text-5xl font-bold leading-[1.0] tracking-[-0.02em] text-[#3b2a22] sm:text-6xl">
            {aza.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#6b5546]">
            {aza.intro}
          </p>

          <ul className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-2.5">
            {aza.claims.map((c) => (
              <li
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-[#dcb38f] bg-white/50 px-4 py-2 text-sm font-medium text-[#6b5546]"
              >
                <IconCheck className="h-4 w-4 text-[#b4623c]" />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <a
              href={aza.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#b4623c] px-7 py-3.5 text-sm font-semibold text-[#f6ece2] transition-[transform,background-color] duration-150 ease-[var(--ease-out)] hover:bg-[#a4562f] active:scale-[0.97] motion-reduce:active:scale-100"
            >
              Visit aza.family
              <IconArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* How a week works: three real phases */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="font-display text-center text-2xl font-bold text-[#3b2a22] sm:text-3xl">
          How a week works
        </h2>
        <ol className="mx-auto mt-10 grid max-w-3xl gap-10 sm:grid-cols-3 sm:gap-8">
          {aza.phases.map((p, i) => (
            <li key={p.title} className="reveal text-center" data-delay={i}>
              <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-[#3b2a22] font-display text-sm font-bold text-[#f6ece2]">
                {i + 1}
              </span>
              <h3 className="font-display mt-4 text-lg font-bold text-[#3b2a22]">
                {p.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-[#6b5546]">
                {p.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* The five guides, one per petal, each with its character */}
      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-2xl bg-white/55 px-6 py-12 sm:px-10 sm:py-14">
          <h2 className="font-display text-center text-2xl font-bold text-[#3b2a22] sm:text-3xl">
            Five weeks, five guides
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center leading-relaxed text-[#6b5546]">
            {aza.how}
          </p>
          <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
            {aza.weeks.map((w, i) => (
              <li
                key={w.title}
                className="reveal group text-center"
                data-delay={i % 3}
              >
                <div
                  className="mx-auto grid h-32 w-32 place-items-center rounded-full"
                  style={{ backgroundColor: `${w.color}26` }}
                >
                  <Image
                    src={w.img}
                    alt={`${w.title}, an AZA guide character`}
                    width={128}
                    height={128}
                    className="h-24 w-auto object-contain transition-transform duration-500 ease-[var(--ease-out)] group-hover:-translate-y-2"
                  />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#a98a6f]">
                  Week {w.n}
                </p>
                <h3 className="font-display mt-1 text-lg font-bold text-[#3b2a22]">
                  {w.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-[#6b5546]">
                  {w.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Built by the founders + CTA */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="overflow-hidden rounded-2xl bg-[#3b2a22] px-6 py-14 text-center text-[#f6ece2] sm:px-12">
          <h2 className="font-display mx-auto max-w-xl text-2xl font-bold sm:text-3xl">
            Built by the people behind SoftDevArts
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[#e8d5c6]">
            {aza.name} is our own product, created by Azahara and Carlos,
            combining psychology with the same care we put into every build.
          </p>
          <div className="mt-8">
            <a
              href={aza.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#f6ece2] px-7 py-3.5 text-sm font-semibold text-[#3b2a22] transition-[transform,background-color] duration-150 ease-[var(--ease-out)] hover:bg-white active:scale-[0.97] motion-reduce:active:scale-100"
            >
              Explore {aza.name}
              <IconArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
