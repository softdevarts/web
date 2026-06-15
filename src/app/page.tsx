import Image from "next/image";
import Link from "next/link";
import { clients, servicePillars, aza } from "@/lib/site";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import CodeWindow from "@/components/CodeWindow";
import Icon from "@/components/Icon";
import { IconArrowRight, IconArrowUpRight, IconCheck } from "@/components/icons";

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_72%)]"
        />
        {/* architectural yellow corner block */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 hidden h-72 w-72 -skew-x-12 bg-accent/70 lg:block"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-base px-4 py-1.5 text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-accent ring-2 ring-fg" />
              Software Development Artisans
            </span>
            <h1 className="font-display mt-6 text-[2.75rem] font-extrabold leading-[0.96] tracking-[-0.03em] text-fg sm:text-6xl lg:text-[4.75rem]">
              Your partners in <span className="highlight">software</span> and
              business excellence.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-dim">
              As seasoned analysts and developers, we offer expert consulting
              across the entire software development cycle, from business needs
              analysis to implementation.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contacto" variant="accent" withArrow>
                Contact us
              </ButtonLink>
              <ButtonLink href="/servicios" variant="secondary">
                Our services
              </ButtonLink>
            </div>
          </div>

          <div className="reveal lg:col-span-6">
            <div className="shadow-hard-accent rounded-2xl">
              <CodeWindow />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Trust bar (ink band) ---------------- */}
      <section className="on-dark border-b border-fg bg-fg text-base">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-9 sm:px-6 lg:flex-row lg:items-center lg:gap-12">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-base/55">
            Trusted by teams at
          </p>
          <div className="marquee-track min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <ul className="animate-marquee flex w-max items-center gap-12">
              {[...clients, ...clients].map((c, i) => (
                <li
                  key={`${c}-${i}`}
                  className="font-display whitespace-nowrap text-xl font-semibold text-base/45"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Expert software development consulting"
            intro="We deliver insights, strategies and support to help turn your vision into reality, for startups and established companies alike."
          />
          <ButtonLink href="/servicios" variant="ghost" withArrow>
            More services
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:[grid-auto-rows:1fr]">
          {servicePillars.map((s, i) => (
            <article
              key={s.title}
              className={`reveal group relative flex flex-col rounded-2xl border border-line bg-base p-8 transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease-out)] hover:-translate-y-1 hover:border-fg hover:shadow-soft ${
                i === 0 ? "md:col-span-2" : ""
              }`}
              data-delay={i}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-fg text-accent transition-transform duration-300 ease-[var(--ease-out)] group-hover:-skew-x-6">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-6 text-xl font-bold text-fg">
                {s.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-dim">
                {s.text}
              </p>
              <ul
                className={`mt-6 gap-x-8 gap-y-2.5 border-t border-line pt-6 ${
                  i === 0 ? "grid sm:grid-cols-2" : "space-y-2.5"
                }`}
              >
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-fg/85"
                  >
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent">
                      <IconCheck className="h-3 w-3 text-fg" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Office teaser ---------------- */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="reveal grid grid-cols-2 gap-4">
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/office/sala-reuniones.jpg"
                  alt="BlackBox Coworking meeting room with red chairs"
                  fill
                  sizes="(max-width: 1024px) 50vw, 300px"
                  className="object-cover grayscale transition-all duration-700 ease-[var(--ease-out)] group-hover:grayscale-0"
                />
              </div>
              <div className="group relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/office/cafe.jpg"
                  alt="Coworking coffee corner with a vintage shelf"
                  fill
                  sizes="(max-width: 1024px) 50vw, 300px"
                  className="object-cover grayscale transition-all duration-700 ease-[var(--ease-out)] group-hover:grayscale-0"
                />
              </div>
            </div>
            <div>
              <Eyebrow>Office · BlackBox Coworking</Eyebrow>
              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-fg sm:text-4xl">
                We also have a place to create
              </h2>
              <p className="mt-4 max-w-[55ch] text-lg leading-relaxed text-dim">
                Our coworking space in Premià de Mar: a warm, carefully designed
                place to work, focus and connect with other professionals.
              </p>
              <div className="mt-8">
                <ButtonLink href="/office" variant="primary" withArrow>
                  Discover the space
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Projects · AZA teaser (warm/pastel world) ---------------- */}
      <section className="border-t border-line px-4 py-20 sm:px-6 sm:py-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#f6ece2] px-6 py-14 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#e8c9b0]/60 blur-2xl"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="eyebrow inline-flex items-center gap-2.5 text-[#b4623c]">
                <span className="h-3 w-3 -skew-x-12 bg-[#e0a06f]" aria-hidden="true" />
                Projects · {aza.name}
              </span>
              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-[#3b2a22] sm:text-4xl">
                {aza.tagline}
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#6b5546]">
                {aza.intro}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/projects"
                  className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#3b2a22] px-6 py-3 text-sm font-semibold text-[#f6ece2] transition-all duration-200 hover:bg-[#2c1f19] active:scale-[0.97] motion-reduce:active:scale-100"
                >
                  About {aza.name}
                  <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={aza.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b4623c] underline-offset-4 hover:underline"
                >
                  aza.family
                  <IconArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <Image
                src={aza.logo}
                alt="AZA flower logo with five coloured petals"
                width={180}
                height={180}
                className="h-36 w-36 lg:h-44 lg:w-44"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Final CTA · committed yellow drench ---------------- */}
      <section className="border-t border-fg bg-accent">
        <div className="relative mx-auto max-w-6xl overflow-hidden px-4 py-20 text-center sm:px-6 sm:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />
          <div className="reveal relative mx-auto max-w-3xl">
            <h2 className="font-display mx-auto max-w-2xl text-[2.5rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-fg sm:text-6xl">
              Let’s forge something great together
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-fg/75">
              Tell us where you’re headed. We’ll tell you the shortest honest
              path to get there.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contacto" variant="primary" withArrow>
                Contact us
              </ButtonLink>
              <ButtonLink
                href="/servicios"
                variant="secondary"
                className="border-fg/30 bg-transparent hover:border-fg"
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
