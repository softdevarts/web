import type { Metadata } from "next";
import { servicePillars, reasons } from "@/lib/site";
import { ButtonLink, Eyebrow } from "@/components/ui";
import Icon from "@/components/Icon";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive consulting, flexible engagement and cutting-edge practices. We support the full software lifecycle, from analysis to implementation.",
};

export default function ServiciosPage() {
  return (
    <>
      {/* Hero : white, yellow only as accent */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <Eyebrow>Services</Eyebrow>
          <h1 className="font-display mt-6 max-w-4xl text-[2.75rem] leading-[0.96] tracking-[-0.03em] text-fg sm:text-6xl lg:text-7xl">
            Unlock <span className="highlight highlight-draw">success</span> with
            expert consulting
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-dim">
            We don’t just offer services. We deliver success across the whole
            software development cycle.
          </p>
          <div className="mt-9">
            <ButtonLink href="/contacto" variant="accent" withArrow>
              Talk to us
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Service pillars : oversized editorial rows */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="divide-y divide-line">
          {servicePillars.map((s) => (
            <article
              key={s.title}
              className="reveal group grid gap-8 py-14 sm:py-20 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-7">
                <h2 className="font-display text-[2rem] leading-[0.98] tracking-[-0.02em] text-fg sm:text-4xl lg:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-dim">
                  {s.text}
                </p>
              </div>
              <div className="lg:col-span-5 lg:pt-2">
                <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-accent text-on-accent transition-transform duration-300 ease-[var(--ease-out)] group-hover:-rotate-6">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 leading-relaxed text-fg/85"
                    >
                      <IconCheck className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why us : black band */}
      <section className="border-t border-fg bg-fg">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
          <h2 className="font-display max-w-2xl text-3xl leading-tight text-base sm:text-5xl">
            Why SoftDevArts?
          </h2>
          <p className="mt-5 max-w-md text-lg text-base/70">
            What deep experience, a strong network and a passion for the craft
            mean for your project.
          </p>
          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="reveal border-t border-base/15 pt-6"
                data-delay={i % 3}
              >
                <span className="inline-grid h-11 w-11 place-items-center rounded-lg bg-accent text-on-accent">
                  <Icon name={r.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-5 text-lg text-base">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-base/70">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA · yellow band */}
      <section className="border-t border-fg bg-accent px-4 py-24 text-center sm:px-6 sm:py-28">
        <div className="reveal mx-auto max-w-2xl">
          <h2 className="font-display mx-auto max-w-xl text-3xl leading-tight text-on-accent sm:text-4xl">
            Can’t find exactly what you need?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-on-accent/80">
            Tell us your case and we’ll design a tailored solution.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contacto" variant="primary" withArrow>
              Contact us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
