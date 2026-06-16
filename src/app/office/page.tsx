import type { Metadata } from "next";
import Image from "next/image";
import { site, officeSpaces, officeAmenities, officeGallery } from "@/lib/site";
import Icon from "@/components/Icon";
import { IconArrowRight, IconPin, IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Office · BlackBox Coworking",
  description:
    "BlackBox Coworking in Premià de Mar: a warm, carefully designed place to work. Hot desks, private offices and meeting rooms.",
};

export default function OfficePage() {
  return (
    <div className="bg-bb-bg text-bb-text">
      {/* ---------------- Hero ---------------- */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/office/sala-reuniones.jpg"
            alt="BlackBox Coworking meeting room with red chairs and the logo on screen"
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bb-bg via-bb-bg/80 to-bb-bg/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-bb-bg/90 to-transparent" />
        </div>
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20">
          <span className="eyebrow inline-flex items-center gap-2 text-bb-accent">
            <span className="h-px w-6 bg-bb-accent" aria-hidden="true" />
            BlackBox Coworking
          </span>
          <h1 className="font-display mt-5 max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.02em] sm:text-7xl">
            A space with character to work better
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bb-muted">
            SoftDevArts’ coworking space in Premià de Mar. Warm, carefully
            designed and built to help you focus, create and connect with other
            professionals.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${site.email}?subject=I'd like to visit BlackBox Coworking`}
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-bb-accent px-6 py-3 text-sm font-semibold text-bb-bg transition-colors hover:bg-bb-accent/90"
            >
              Book a visit
              <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#spaces"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              See spaces
            </a>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-sm text-bb-muted">
            <IconPin className="h-4 w-4 text-bb-accent" />
            {site.address.street}, {site.address.city}
          </p>
        </div>
      </section>

      {/* ---------------- Intro ---------------- */}
      <section className="border-t border-bb-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Not just an office. A place you’ll want to be part of.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-bb-muted">
              Every corner is designed with care: furniture with personality,
              warm light, plants and the details that make the difference. You
              bring the ideas; we take care of the coffee, the fibre and the
              atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Spaces ---------------- */}
      <section id="spaces" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
          <span className="eyebrow text-bb-accent">Spaces</span>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
            Choose how you want to work
          </h2>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6">
          {officeSpaces.map((s) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-bb-line"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover grayscale transition-[transform,filter] duration-500 ease-[var(--ease-out)] group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bb-bg via-bb-bg/30 to-transparent" />
                <span className="absolute left-5 top-5 grid h-15 w-11 place-items-center rounded-xl bg-bb-bg/70 text-bb-accent backdrop-blur">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bb-muted">
                  {s.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Amenities ---------------- */}
      <section className="mt-12 border-y border-bb-line bg-bb-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Everything included, so you only think about work
          </h2>
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3">
            {officeAmenities.map((a) => (
              <li key={a.label} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-bb-bg text-bb-accent">
                  <Icon name={a.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-bb-text">
                  {a.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Gallery ---------------- */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <span className="eyebrow text-bb-accent">The space</span>
        <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
          A look inside BlackBox
        </h2>
        <div className="mt-10 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
          {officeGallery.map((img) => (
            <div
              key={img.src}
              className="reveal relative overflow-hidden rounded-2xl border border-bb-line break-inside-avoid"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover grayscale transition-[transform,filter] duration-500 ease-[var(--ease-out)] hover:scale-105 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Location + CTA ---------------- */}
      <section className="border-t border-bb-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-bb-accent">Where we are</span>
            <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
              In the heart of Premià de Mar
            </h2>
            <p className="mt-4 text-base leading-relaxed text-bb-muted">
             Welcome to Software Development Artisans, where we specialize in crafting high-quality software solutions. Our team of skilled developers and designers work collaboratively to bring your ideas to life, ensuring that every project is tailored to meet your unique needs. Whether you're looking for web development, mobile applications, or custom software solutions, we are committed to delivering excellence and innovation in every line of code.
             As a small yet dynamic team, we provide personalized attention and agile development processes, allowing us to adapt quickly to changing requirements and deliver results efficiently. Our passion for technology and dedication to our clients drive us to create software that not only meets but exceeds expectations. Join us on a journey of digital transformation and let us help you achieve your business goals through innovative software solutions. 


            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Flexible access tailored to you",
                "A community of professionals and companies",
                "Bookable rooms for your meetings",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-bb-text">
                  <IconCheck className="h-4 w-4 shrink-0 text-bb-accent" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${site.email}?subject=I'd like to visit BlackBox Coworking`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-bb-bg transition-colors hover:bg-white/90"
              >
                Book a visit
                <IconArrowRight className="h-4 w-4" />
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="reveal relative aspect-[4/3] overflow-hidden rounded-3xl border border-bb-line">
            <Image
              src="/office/lounge.jpg"
              alt="BlackBox Coworking lounge with an armchair and ochre curtain"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
