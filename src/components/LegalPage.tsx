import type { ReactNode } from "react";
import { Eyebrow } from "./ui";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
      <Eyebrow>Información legal</Eyebrow>
      <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-fg">
        {title}
      </h1>
      <div className="mt-8 space-y-4 text-base leading-relaxed text-dim [&_h2]:font-display [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-fg">
        {children}
      </div>
    </article>
  );
}
