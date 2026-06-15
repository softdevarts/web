import type { Metadata } from "next";
import { servicePillars, reasons } from "@/lib/site";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
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
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <Eyebrow>Services</Eyebrow>
          <h1 className="font-display mt-5 max-w-4xl text-[2.5rem] font-bold leading-[0.98] tracking-[-0.03em] text-fg sm:text-6xl lg:text-7xl">
            Unlock <span className="highlight">success</span> with expert
            software development consulting
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-dim">
            At <span className="font-semibold text-fg">SoftDevArts</span>, we
            don’t just offer services – we deliver success. With years of
            industry experience, a vast network of experts, and a passion for
            excellence, we are your trusted partner in navigating the
            complexities of software development. Whether you’re a startup or an
            established company, we provide the insights, strategies, and support
            you need to turn your vision into reality.
          </p>
        </div>
      </section>

      {/* Service pillars */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {servicePillars.map((s, i) => (
            <article
              key={s.title}
              className="reveal flex flex-col rounded-2xl border border-line bg-base p-8 transition-all duration-200 hover:shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-fg text-accent">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <span className="font-display text-4xl font-bold text-line">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="font-display mt-6 text-2xl font-bold text-fg">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dim">{s.text}</p>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
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

      {/* Why us */}
      <section className="border-t border-line mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading title="Why SoftDevArts?" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="reveal flex gap-5 rounded-2xl border border-line bg-base p-6"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-fg text-accent">
                <Icon name={r.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-fg">
                  {r.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-dim">
                  {r.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-2xl border border-line bg-panel px-6 py-14 text-center sm:px-12">
          <span className="mx-auto mb-5 block h-1.5 w-12 rounded-full bg-accent" />
          <h2 className="font-display mx-auto max-w-xl text-2xl font-bold text-fg sm:text-3xl">
            Can’t find exactly what you need?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-dim">
            Every company is unique. Tell us your case and we’ll design a
            tailored solution.
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
