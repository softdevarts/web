import Link from "next/link";
import { site, nav } from "@/lib/site";
import Logo from "./Logo";
import { IconMail, IconPin, IconInstagram, IconLinkedin } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-fg text-base">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-base/60">
            {site.longName}. Software consulting and custom development, from the
            idea to implementation.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SoftDevArts on Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-base/20 text-base/70 transition-colors hover:border-accent hover:text-accent"
            >
              <IconInstagram className="h-5 w-5" />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SoftDevArts on LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-base/20 text-base/70 transition-colors hover:border-accent hover:text-accent"
            >
              <IconLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="eyebrow text-accent">Navigation</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base/70 transition-colors hover:text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="eyebrow text-accent">Contact</h3>
          <ul className="mt-4 space-y-4 text-sm text-base/70">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 transition-colors hover:text-base"
              >
                <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}
                <br />
                {site.address.region}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-base/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-base/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {2026} SoftDevArts. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link href="/aviso-legal" className="hover:text-base">
                Legal notice
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="hover:text-base">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-base">
                Cookie policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
