"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import Logo from "./Logo";
import { IconMenu, IconClose, IconArrowRight, IconArrowUpRight } from "./icons";

type NavItem = { href: string; label: string; external?: boolean };

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (item: NavItem) =>
    !item.external &&
    (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" aria-label="SoftDevArts, home" className="rounded-md">
          <Logo size="h-15" />
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {(nav as readonly NavItem[]).map((link) => {
            const active = isActive(link);
            const cls = `relative cursor-pointer rounded-md px-4 py-2.5 text-[1.05rem] font-medium transition-colors hover:text-fg ${
              active ? "text-fg" : "text-dim"
            }`;
            return (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cls} inline-flex items-center gap-1`}
                  >
                    {link.label}
                    <IconArrowUpRight className="h-3.5 w-3.5 text-dim" />
                  </a>
                ) : (
                  <Link href={link.href} aria-current={active ? "page" : undefined} className={cls}>
                    {link.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300 ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                )}
              </li>
            );
          })}
          <li>
            <Link
              href="/contacto"
              className="group ml-2 inline-flex items-center gap-1.5 rounded-full bg-fg px-5 py-2.5 text-[1.05rem] font-semibold text-base transition-[transform,opacity] duration-150 ease-[var(--ease-out)] hover:opacity-90 active:scale-[0.97] motion-reduce:active:scale-100"
            >
              Let’s talk
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-md text-fg transition-colors hover:bg-panel lg:hidden"
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-base lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4 sm:px-6">
            {(nav as readonly NavItem[]).map((link) => {
              const active = isActive(link);
              const cls = `block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                active ? "bg-panel text-fg" : "text-dim hover:bg-panel hover:text-fg"
              }`;
              return (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className={`${cls} flex items-center gap-1.5`}
                    >
                      {link.label}
                      <IconArrowUpRight className="h-4 w-4 text-dim" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cls}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-fg px-5 py-3 text-base font-semibold text-base transition-transform duration-150 ease-[var(--ease-out)] active:scale-[0.98] motion-reduce:active:scale-100"
              >
                Let’s talk
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
