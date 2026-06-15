import type { Metadata } from "next";
import Image from "next/image";
import { founders, clients, aboutStory, foundersIntro } from "@/lib/site";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software Development Artisans: digital artisans blending time-honoured craft with modern innovation. Meet Azahara and Carlos.",
};

const values = [
  {
    icon: "spark",
    title: "Craft & precision",
    text: "We treat code as a craft: with care, judgement and attention to detail.",
  },
  {
    icon: "shield",
    title: "Excellence",
    text: "We polish every delivery so it’s high-quality, efficient and built to last.",
  },
  {
    icon: "handshake",
    title: "Lasting relationships",
    text: "We build bonds of trust, not throwaway projects.",
  },
  {
    icon: "rocket",
    title: "Innovation with purpose",
    text: "We apply the latest when it adds real value, never for the sake of it.",
  },
] as const;

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <Eyebrow>About us</Eyebrow>
          <h1 className="font-display mt-5 max-w-4xl text-[2.5rem] font-bold leading-[0.98] tracking-[-0.03em] text-fg sm:text-6xl lg:text-7xl">
            Crafting digital solutions with{" "}
            <span className="highlight">care and precision</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-dim">
            Software Development Artisans — a small yet dynamic team blending
            decades of multinational experience with the eye of a craftsman.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading title="Ancient artistry, modern innovation" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-dim">
              {aboutStory.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="reveal rounded-2xl border border-line bg-base p-6"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-fg text-accent">
                    <Icon name={v.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-4 text-base font-bold text-fg">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dim">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading title="Meet the co-founders" intro={foundersIntro} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {founders.map((f) => (
              <article
                key={f.name}
                className="reveal flex gap-6 rounded-2xl border border-line bg-base p-8"
              >
                <Image
                  src={f.photo}
                  alt={f.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 shrink-0 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="font-display text-xl font-bold text-fg">
                    {f.name}
                  </h3>
                  <p className="mt-1 inline-block bg-accent px-1.5 text-sm font-semibold text-fg">
                    {f.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-dim">
                    {f.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          align="center"
          title="Experience with leading brands"
          intro="Throughout our careers we’ve worked for benchmark companies across many sectors."
        />
        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-fg sm:grid-cols-4">
          {clients.map((c) => (
            <li
              key={c}
              className="font-display grid place-items-center bg-base px-4 py-8 text-lg font-semibold text-fg/50 transition-colors hover:bg-accent hover:text-fg"
            >
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-2xl border border-line bg-panel px-6 py-14 text-center sm:px-12">
          <span className="mx-auto mb-5 block h-1.5 w-12 rounded-full bg-accent" />
          <h2 className="font-display mx-auto max-w-xl text-2xl font-bold text-fg sm:text-3xl">
            Want to work with us?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-dim">
            Let’s forge something great together. We’d love to hear your idea.
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
