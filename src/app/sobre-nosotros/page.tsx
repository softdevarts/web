import type { Metadata } from "next";
import Image from "next/image";
import { founders, clients, aboutStory, foundersIntro } from "@/lib/site";
import { ButtonLink, Eyebrow } from "@/components/ui";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software Development Artisans: digital artisans blending time-honoured craft with modern innovation. Meet Azahara and Carlos.",
};

const values = [
  { icon: "spark", title: "Craft & precision" },
  { icon: "shield", title: "Excellence" },
  { icon: "handshake", title: "Lasting relationships" },
  { icon: "rocket", title: "Innovation with purpose" },
] as const;

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Hero : white, animated */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="animate-floaty pointer-events-none absolute -right-12 top-24 hidden h-44 w-44 -skew-x-12 bg-accent/25 blur-[2px] lg:block [--rot:-12deg]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <Eyebrow className="animate-rise">About us</Eyebrow>
          <h1
            className="animate-rise font-display mt-6 max-w-4xl text-[2.75rem] leading-[0.96] tracking-[-0.03em] text-fg sm:text-6xl lg:text-7xl"
            data-delay="1"
          >
            Crafting digital solutions with{" "}
            <span className="highlight highlight-draw">care and precision</span>
          </h1>
        </div>
      </section>

      {/* Story : editorial */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="font-display text-3xl leading-[1.05] tracking-[-0.02em] text-fg sm:text-4xl lg:col-span-5">
            Ancient artistry, modern innovation
          </h2>
          <div className="space-y-6 text-xl leading-relaxed text-dim lg:col-span-7">
            {aboutStory.map((para) => (
              <p key={para.slice(0, 24)} className="reveal">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Values : subtle panel, drawn rules */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <h2 className="font-display text-2xl leading-tight text-fg sm:text-3xl">
            What we stand for
          </h2>
          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li
                key={v.title}
                className="reveal relative border-t border-line pt-6"
                data-delay={i}
              >
                <span
                  aria-hidden="true"
                  className="draw-rule absolute -top-px left-0 h-0.5 w-12 bg-accent"
                />
                <span className="inline-grid h-11 w-11 place-items-center rounded-lg bg-accent text-on-accent">
                  <Icon name={v.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-5 text-lg text-fg">{v.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Founders : real faces, hover */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <Eyebrow>The team</Eyebrow>
          <h2 className="font-display mt-4 text-3xl leading-tight text-fg sm:text-4xl">
            Meet the co-founders
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-dim">
            {foundersIntro}
          </p>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {founders.map((f, i) => (
            <article key={f.name} className="reveal group" data-delay={i}>
              <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-line bg-panel">
                <Image
                  src={f.photo}
                  alt={f.name}
                  fill
                  sizes="160px"
                  className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="font-display mt-6 text-2xl text-fg">{f.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.1em] text-on-accent">
                {f.role}
              </p>
              <p className="mt-3 max-w-md leading-relaxed text-dim">{f.bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <h2 className="font-display text-center text-2xl leading-tight text-fg sm:text-3xl">
            Experience with leading brands
          </h2>
          <ul className="reveal mx-auto mt-12 grid max-w-4xl grid-cols-3 items-center gap-x-8 gap-y-10 lg:grid-cols-9">
            {clients.map((c) => (
              <li key={c.name} className="relative h-6">
                <Image
                  src={c.logo}
                  alt={c.name}
                  fill
                  sizes="(max-width: 1024px) 28vw, 96px"
                  className="object-contain opacity-55 transition-opacity duration-200 hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA : yellow band */}
      <section className="border-t border-fg bg-accent px-4 py-24 text-center sm:px-6 sm:py-28">
        <div className="reveal mx-auto max-w-2xl">
          <h2 className="font-display mx-auto max-w-xl text-3xl leading-tight text-on-accent sm:text-4xl">
            Want to work with us?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-on-accent/80">
            We’d love to hear your idea.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contacto" variant="primary" withArrow>
              Get in touch
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
