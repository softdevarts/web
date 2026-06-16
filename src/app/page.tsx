import Image from "next/image";
import { clients, servicePillars, aza, founders, foundersIntro } from "@/lib/site";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import HeroPanel from "@/components/HeroPanel";
import Icon from "@/components/Icon";
import { IconArrowUpRight, IconLinkedin } from "@/components/icons";

const process = [
  { title: "Understand", text: "We map the business need and the constraints before a line of code." },
  { title: "Architect", text: "A technical roadmap that scales and won’t box you in later." },
  { title: "Build", text: "Modern stack, tested, shipped in your team’s cadence." },
  { title: "Support", text: "We audit, harden and keep improving what’s live." },
] as const;

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="animate-floaty pointer-events-none absolute -left-16 top-40 hidden h-36 w-36 -skew-x-12 bg-accent/30 blur-[2px] lg:block [--rot:-12deg]"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 sm:py-28 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Eyebrow className="animate-rise">
              Software Development Artisans
            </Eyebrow>
            <h1
              className="animate-rise font-display mt-7 text-[2.75rem] leading-[0.98] tracking-[-0.03em] text-fg sm:text-6xl lg:text-[4.5rem]"
              data-delay="1"
            >
              Partners in <span className="highlight highlight-draw">software</span>{" "}
              and business excellence.
            </h1>
            <p
              className="animate-rise mt-7 max-w-md text-lg leading-relaxed text-dim"
              data-delay="2"
            >
              Senior analysts and developers, across the whole software cycle.
            </p>
            <div
              className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row"
              data-delay="3"
            >
              <ButtonLink href="/contacto" variant="accent" withArrow>
                Contact us
              </ButtonLink>
              <ButtonLink href="/servicios" variant="secondary">
                Our services
              </ButtonLink>
            </div>
          </div>

          <div className="animate-rise lg:col-span-6" data-delay="4">
            <div className="shadow-hard-accent rounded-2xl">
              <HeroPanel />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Trust bar (black band, static) ---------------- */}
      <section className="border-b border-fg bg-fg">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-base/55">
            Trusted by
          </p>
          <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-3 items-center gap-x-6 gap-y-8 lg:grid-cols-9">
            {clients.map((c) => (
              <li key={c.name} className="relative h-6">
                <Image
                  src={c.logo}
                  alt={c.name}
                  fill
                  sizes="(max-width: 1024px) 28vw, 110px"
                  className="object-contain opacity-70 invert transition-opacity duration-200 hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Services (asymmetric editorial) ---------------- */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                title="Software development consulting"
                intro="Insights, strategy and hands-on delivery, for startups and established teams alike."
              />
              <div className="mt-7">
                <ButtonLink href="/servicios" variant="ghost" withArrow>
                  All services
                </ButtonLink>
              </div>
            </div>
          </div>

          <ul className="border-t border-line lg:col-span-8">
            {servicePillars.map((s, i) => (
              <li
                key={s.title}
                className="reveal group flex items-start gap-6 border-b border-line py-8"
                data-delay={i}
              >
                <span className="mt-0.5 inline-grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-on-accent transition-transform duration-300 ease-[var(--ease-out)] group-hover:-rotate-3">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-fg sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-dim">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- How we work (process, black band) ---------------- */}
      <section className="border-y border-fg bg-fg">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold leading-tight text-base sm:text-4xl">
              How we work
            </h2>
            <p className="mt-4 text-base/70">
              From the first conversation to live, supported software.
            </p>
          </div>
          <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
              <li
                key={s.title}
                className="reveal relative border-t border-base/15 pt-5"
                data-delay={i}
              >
                <span
                  aria-hidden="true"
                  className="draw-rule absolute -top-px left-0 h-0.5 w-12 bg-accent"
                />
                <span className="font-display text-2xl font-bold tabular-nums text-accent">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-3 text-lg font-bold text-base">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-base/70">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Office teaser ---------------- */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal grid grid-cols-2 gap-4">
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/office/sala-reuniones.jpg"
                  alt="BlackBox Coworking meeting room with red chairs"
                  fill
                  sizes="(max-width: 1024px) 50vw, 300px"
                  className="object-cover grayscale transition-[transform,filter] duration-500 ease-[var(--ease-out)] group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
              <div className="group relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/office/cafe.jpg"
                  alt="Coworking coffee corner with a vintage shelf"
                  fill
                  sizes="(max-width: 1024px) 50vw, 300px"
                  className="object-cover grayscale transition-[transform,filter] duration-500 ease-[var(--ease-out)] group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
            </div>
            <div className="reveal" data-delay="1">
              <Eyebrow>BlackBox Coworking</Eyebrow>
              <h2 className="font-display mt-5 text-3xl font-bold leading-tight text-fg sm:text-4xl">
                A place to create
              </h2>
              <p className="mt-4 max-w-sm text-lg leading-relaxed text-dim">
                Our coworking space in Premià de Mar. Warm, calm, made to focus.
              </p>
              <div className="mt-8">
                <ButtonLink href="/office" variant="secondary" withArrow>
                  Discover the space
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Projects · AZA (warm light island) ---------------- */}
      <section className="border-t border-line px-4 py-24 sm:px-6 sm:py-28">
        <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#f6ece2] px-6 py-14 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#e8c9b0]/60 blur-2xl"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="eyebrow inline-flex items-center gap-2.5 text-[#b4623c]">
                <span className="h-px w-8 bg-[#e0a06f]" aria-hidden="true" />
                Projects · {aza.name}
              </span>
              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-[#3b2a22] sm:text-4xl">
                {aza.tagline}
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-[#6b5546]">
                A free, web-based method that helps families reconnect.
              </p>
              <div className="mt-7">
                <a
                  href={aza.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#3b2a22] px-6 py-3 text-sm font-semibold text-[#f6ece2] transition-[transform,background-color] duration-150 ease-[var(--ease-out)] hover:bg-[#2c1f19] active:scale-[0.97] motion-reduce:active:scale-100"
                >
                  About AZA
                  <IconArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-out)] motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <Image
                src={aza.logo}
                alt="AZA flower logo with five coloured petals"
                width={180}
                height={180}
                className="animate-floaty h-36 w-36 lg:h-44 lg:w-44"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- The team (real faces) ---------------- */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-bold leading-tight text-fg sm:text-4xl">
                Leadership with experience and vision
              </h2>
              <p className="mt-4 max-w-sm text-lg leading-relaxed text-dim">
                {foundersIntro}
              </p>
              <div className="mt-7">
                <ButtonLink href="/sobre-nosotros" variant="ghost" withArrow>
                  About us
                </ButtonLink>
              </div>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {founders.map((f, i) => (
                <li key={f.name} className="reveal" data-delay={i}>
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${f.name} on LinkedIn`}
                    className="group flex items-center gap-5 rounded-2xl border border-line p-5 transition-colors duration-300 hover:border-fg"
                  >
                    <Image
                      src={f.photo}
                      alt={f.name}
                      width={96}
                      height={96}
                      className="h-20 w-20 shrink-0 rounded-xl object-cover"
                    />
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-bold text-fg">
                        {f.name}
                      </h3>
                      <p className="mt-0.5 text-sm font-semibold text-dim">
                        {f.role}
                      </p>
                    </div>
                    <IconLinkedin
                      className="ml-auto h-5 w-5 shrink-0 text-dim transition-colors duration-200 group-hover:text-fg"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- Final CTA · yellow band ---------------- */}
      <section className="border-t border-fg bg-accent">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <div className="reveal">
            <h2 className="font-display mx-auto max-w-2xl text-[2.5rem] leading-[1.02] tracking-[-0.03em] text-on-accent sm:text-6xl">
              Let’s forge something great together
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-on-accent/80">
              A short call, no pitch. We reply within one business day.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contacto" variant="primary" withArrow>
                Contact us
              </ButtonLink>
              <ButtonLink
                href="/servicios"
                variant="secondary"
                className="border-on-accent/30 text-on-accent hover:border-on-accent hover:bg-transparent"
              >
                Explore services
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
