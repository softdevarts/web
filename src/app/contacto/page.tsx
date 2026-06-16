import type { Metadata } from "next";
import { site } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import { Eyebrow } from "@/components/ui";
import { IconMail, IconPin, IconInstagram, IconLinkedin } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let’s talk about your project. Email info@softdevarts.com or visit us in Premià de Mar, Barcelona.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display mt-6 max-w-4xl text-[2.5rem] leading-[0.98] tracking-[-0.03em] text-fg sm:text-6xl lg:text-7xl">
            Let’s forge something{" "}
            <span className="highlight">great together</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-dim">
            Tell us what you need. We’ll reply with a tailored proposal.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Info */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-bold text-fg">Let’s talk</h2>
            <p className="mt-3 text-dim">
              We’re based in Premià de Mar, but we work with clients wherever
              they are. Pick whichever channel you prefer.
            </p>

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-on-accent">
                  <IconMail className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-fg">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-dim underline-offset-4 transition-colors hover:text-fg hover:underline"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-on-accent">
                  <IconPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-fg">Office</p>
                  <p className="text-dim">
                    {site.address.street}
                    <br />
                    {site.address.city}
                    <br />
                    {site.address.region}
                  </p>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-semibold text-fg underline underline-offset-4 decoration-accent decoration-2"
                  >
                    View on the map
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SoftDevArts on Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-dim transition-colors hover:border-accent hover:text-accent"
              >
                <IconInstagram className="h-5 w-5" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SoftDevArts on LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-dim transition-colors hover:border-accent hover:text-accent"
              >
                <IconLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
