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
  Projects page. A short explanation of AZA with aza.family's warm,
  pastel look & feel and its five-petal flower, a deliberate contrast
  to the main black/white/yellow brand.
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
            width={104}
            height={104}
            className="mx-auto h-24 w-24"
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
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#b4623c] px-7 py-3.5 text-sm font-semibold text-[#f6ece2] transition-all duration-200 hover:bg-[#a4562f] active:scale-[0.97] motion-reduce:active:scale-100"
            >
              Visit aza.family
              <IconArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* The five guides, one per petal */}
      <section className="mx-auto max-w-5xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-white/55 p-8 sm:p-12">
          <h2 className="font-display text-2xl font-bold text-[#3b2a22] sm:text-3xl">
            Five weeks, five guides
          </h2>
          <p className="mt-3 max-w-2xl text-[#6b5546]">{aza.how}</p>
          <ol className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {aza.weeks.map((w) => (
              <li key={w.title} className="reveal flex gap-4">
                <span
                  className="mt-1 h-4 w-4 shrink-0 rounded-full"
                  style={{ backgroundColor: w.color }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display font-bold text-[#3b2a22]">
                    <span className="text-[#a98a6f]">{w.n}</span> {w.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#6b5546]">
                    {w.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
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
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#f6ece2] px-7 py-3.5 text-sm font-semibold text-[#3b2a22] transition-all duration-200 hover:bg-white active:scale-[0.97] motion-reduce:active:scale-100"
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
