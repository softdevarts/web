import Link from "next/link";
import type { ReactNode } from "react";
import { IconArrowRight } from "./icons";

/* ---- Buttons ---- */

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "accent" | "secondary" | "ghost";
  withArrow?: boolean;
  className?: string;
};

const base =
  "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[transform,background-color,border-color,color] duration-150 ease-[var(--ease-out)] active:scale-[0.97] motion-reduce:active:scale-100";

const variants = {
  // Ink pill, the default action
  primary: "bg-fg text-base hover:bg-fg/90",
  // Signal CTA, press-yellow with dark ink (high contrast)
  accent: "bg-accent text-on-accent hover:bg-accent/90",
  // Hairline outline that brightens on hover
  secondary: "border border-line-strong text-fg hover:border-fg hover:bg-panel",
  ghost: "px-2 text-fg underline-offset-4 hover:underline",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
}: ButtonLinkProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const cls = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && (
        <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

/* ---- Section heading ---- */

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`eyebrow inline-flex items-center gap-2.5 text-fg ${className}`}
    >
      <span className="h-3 w-3 -skew-x-12 bg-accent" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <Eyebrow className={align === "center" ? "justify-center" : ""}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className="font-display mt-4 text-[2rem] font-bold leading-[1.03] tracking-[-0.025em] text-fg sm:text-[2.75rem] lg:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-dim">
          {intro}
        </p>
      )}
    </div>
  );
}
