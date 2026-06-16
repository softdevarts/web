"use client";

import { useState } from "react";
import { IconCheck, IconArrowRight } from "./icons";

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-line bg-base px-4 py-3 text-fg outline-none transition-colors placeholder:text-dim/50 focus:border-accent";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    // Honeypot: if filled, it’s a bot, silently ignore.
    const trap = (form.elements.namedItem("website") as HTMLInputElement)?.value;
    if (trap) return;
    // Demo: aquí conectarías con tu backend, email o API.
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-line bg-panel p-10 text-center shadow-soft"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-on-accent">
          <IconCheck className="h-7 w-7" />
        </span>
        <h3 className="font-display mt-5 text-xl font-bold text-fg">
          Message sent!
        </h3>
        <p className="mt-2 text-sm text-dim">
          Thanks for reaching out. We will get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 cursor-pointer rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold text-fg transition-[transform,background-color,border-color] duration-150 ease-[var(--ease-out)] hover:border-fg hover:bg-panel-2 active:scale-[0.98] motion-reduce:active:scale-100"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-panel p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="block text-sm font-semibold text-fg">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-fg">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="asunto" className="block text-sm font-semibold text-fg">
          Subject
        </label>
        <input id="asunto" name="asunto" type="text" className={fieldClass} />
      </div>

      <div className="mt-5">
        <label htmlFor="mensaje" className="block text-sm font-semibold text-fg">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          className={`${fieldClass} resize-y`}
        />
      </div>

      {/* Honeypot, hidden from humans (matches the original site) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">
          If you are human, leave this field blank
        </label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-fg px-6 py-3.5 text-sm font-semibold text-base transition-[transform,opacity] duration-150 ease-[var(--ease-out)] hover:opacity-90 active:scale-[0.99] motion-reduce:active:scale-100"
      >
        Send message
        <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
      <p className="mt-4 text-center text-xs text-dim">
        By submitting you accept our privacy policy.
      </p>
    </form>
  );
}
