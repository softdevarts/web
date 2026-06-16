"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
  Adds `.is-visible` to any `.reveal` element as it scrolls into view.
  Re-runs on every client-side navigation (App Router keeps the layout
  mounted, so a one-shot effect would leave new pages' reveal elements
  hidden at opacity:0). Honors prefers-reduced-motion: everything is
  revealed immediately when the user prefers less motion.
*/
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"),
    );
    if (els.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
