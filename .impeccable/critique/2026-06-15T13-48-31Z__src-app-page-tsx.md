---
target: the landing page (home)
total_score: 28
p0_count: 1
p1_count: 2
timestamp: 2026-06-15T13-48-31Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Nav active underline + hover nudges good; CTAs have no pending state, no scroll progress on a long page. |
| 2 | Match System / Real World | 2 | The hero code window speaks fake-developer (`craft: "artisanal"`); copy is abstract ("business excellence") not the plain language the audience trusts. |
| 3 | User Control and Freedom | 3 | Good skip link, reduced-motion respected, mobile menu closes; no "back to top" on a long page. |
| 4 | Consistency and Standards | 3 | Tokens disciplined, but TWO eyebrow markers (hairline dash in page.tsx vs skewed square in the Eyebrow component); logo gold `#EBA900` differs from accent yellow. |
| 5 | Error Prevention | 3 | Landing has no inputs; external links use `rel="noopener noreferrer"`. Low surface. |
| 6 | Recognition Rather Than Recall | 3 | Nav clear; AZA section names "AZA" before explaining it is their own product. |
| 7 | Flexibility and Efficiency | 3 | Sticky nav + persistent "Let's talk" CTA is efficient. |
| 8 | Aesthetic and Minimalist Design | 4 | The strongest dimension: generous air, committed white/yellow, real restraint. |
| 9 | Error Recovery | 2 | No error affordance demonstrated anywhere visible. |
| 10 | Help and Documentation | 2 | No "how we work", pricing hint, or FAQ; a skeptical buyer has no self-serve path before contacting. |
| **Total** | | **28/40** | **Good (upper-middle; real polish with clear trust gaps)** |

## Anti-Patterns Verdict

**Does this look AI-generated? Mostly NO — it reads as deliberately art-directed.** The committed white/yellow band system, the press/blueprint references (hard offset shadow, skewed accent block), the non-default font pairing (Bricolage + Hanken + JetBrains Mono, explicitly off the Space Grotesk/Inter reflex), and the alternating solid/outline marquee are all real points of view, not template defaults.

**LLM assessment — remaining tells:**
- The faux **CodeWindow** is the biggest one. `softdevarts.build({ idea: "your vision", craft: "artisanal", stack: "modern" })` is semantically-empty marketing cosplaying as TypeScript. To the literal target (CTOs/senior devs who read code) it undercuts the "show the craft" thesis.
- Two different **eyebrow markers** on the home (dash vs skewed square) is brand-grammar drift; eyebrows sit at the upper count limit (~3 sections).
- **Generic hero copy** ("partners in software and business excellence") claims competence rather than demonstrating it.

**Deterministic scan:** `detect.mjs` run twice (`src/app/page.tsx src/components` and `src/app`): **0 findings, exit 0 both times.** Engine verified functional via a negative control (synthetic bad TSX correctly fired `ai-color-palette` + `layout-transition`, exit 2). So the clean result is a true pass, not a silent skip. Note: the detector's regex rules do **not** see the semantic issues above (fake code content, copy tone, logo-color drift) — those are judgment calls the human review caught. No false positives.

**Visual overlays:** unavailable. No browser automation in this session, so no in-page overlay was injected; findings are from source review + detector only.

## Overall Impression

This is a genuinely good white/yellow brand site with taste and restraint, sitting in the upper-middle of real-world quality. What works is the *surface*: color discipline, motion hygiene, typographic confidence. What's missing is *proof and reassurance*: the page makes claims (excellence, artisans, a fake code object) but shows little evidence (no case study, no outcome, no human faces, no risk-reduction at the contact moment). The single biggest opportunity: replace claim-with-proof at the two trust-critical moments (the hero centerpiece and the final CTA), because the whole conversion goal is "earn a skeptical buyer's trust before they reach out."

## What's Working

1. **Committed color, done correctly.** Full yellow and black bands carrying ink (trust bar, marquee, final CTA) deliver "yellow as structural material." The `on-accent` ink token passes AA on yellow, and yellow is never text-on-white. Rare correctness.
2. **Press/maker personality.** The hard-offset yellow shadow and the skewed accent block are workshop references an AI default would never reach for. Distinctive without shouting.
3. **Responsible motion.** Every animation is gated behind `prefers-reduced-motion`, and reveals enhance already-visible content rather than gating it. Accessibility most "premium" sites get wrong.

## Priority Issues

**[P0] The hero code window is a hollow fake-screenshot.**
- Why it matters: the target reads code; empty strings dressed as TypeScript is the clearest "AI/fake" tell, in the hero, contradicting the "show the craft / honest" thesis.
- Fix: replace with real, plausible code (a typed interface, a small real function, actual stack names), or a real artifact from a shipped project, or remove it for a stronger non-fake visual. Note: you have said you like this element — it can stay as a deliberate decision, but it is the weakest point for this audience.
- Suggested command: `$impeccable clarify` (then `harden`).

**[P1] The contact / final-CTA moment has zero reassurance.**
- Why it matters: the goal is a qualified contact from a skeptical buyer; peak-end rule and buyer psychology demand risk-reduction exactly here. The bold yellow band ends visually strong but emotionally cold.
- Fix: add one sub-line ("A short call, no pitch. We reply within one business day."), and/or surface the two founders' faces or the Premia de Mar location near the CTA.
- Suggested command: `$impeccable onboard` (or `delight`).

**[P1] Eyebrow grammar is inconsistent and near its limit.**
- Why it matters: the home uses two different eyebrow markers (hairline dash vs skewed square), and eyebrows sit on ~3 sections. PRODUCT.md lists "tiny tracked uppercase eyebrow over every section" as an anti-reference; the implementation drifts toward it.
- Fix: standardize on one marker (the skewed square reads more "press"), drop the eyebrow on a section or two, let headlines lead.
- Suggested command: `$impeccable distill`.

**[P2] Hero copy claims rather than demonstrates.**
- Why it matters: brand voice = "shows competence rather than claiming it"; "business excellence / across the whole software cycle" is generic consultancy hype.
- Fix: make it specific and concrete; name what you do and one proof point. Drop "excellence".
- Suggested command: `$impeccable clarify`.

**[P2] Logo gold differs from the brand accent yellow.**
- Why it matters: the palette is locked, yet `Logo.tsx` hardcodes `fill="#EBA900"` (amber/gold) while the accent is `oklch(0.87 0.18 96)` (press yellow). Two yellows in the masthead reads as inattention for a brand whose argument is precision.
- Fix: drive the logo fill from the accent token, or consciously document the mark as a distinct brand-gold.
- Suggested command: `$impeccable colorize` (or `audit`).

## Persona Red Flags

**Jordan (first-timer):** AZA section names "AZA" before explaining it is SoftDevArts' own product. No "how we work" / pricing / FAQ to self-qualify before contacting.

**Riley (stress tester):** pokes the code window first, sees `craft: "artisanal"` is not meaningful TypeScript, concludes the craft claim is theater. Spots the two yellows (logo vs accent) instantly. External social links point at bare `instagram.com` / `linkedin.com` roots (site.ts placeholders), reads as broken.

**Casey (distracted mobile):** first paint fires 5 staggered rises + a floating block + a marquee; lots of motion competing on a small screen. The real credibility (trust-logo bar) sits below a tall fake code window, so the strongest reassurance can fall below the fold. Final CTA gives no reason-to-act-now.

## Minor Observations

- Footer year is hardcoded `{2026}`; will silently go stale. Use `new Date().getFullYear()`.
- Dim client names on the black trust bar use `text-base/45` (~45% off-white on near-black); verify large-text AA (borderline).
- Two elements use `animate-floaty` (hero block + AZA logo); two floating things edges toward gimmick.
- The hero `bg-grid` (alpha 0.04, masked top-right) is so faint it is effectively decorative-only; either commit to it or drop it.
- Social URLs in `site.ts` are placeholder roots; wire real profiles before launch.

## Questions to Consider

1. If the site IS the portfolio, why is the hero centerpiece a fake code object instead of a real artifact from a shipped project?
2. Where is the proof of craft? There are claims and logos but no case study, outcome, or judgement-on-display. Is the trust bar carrying all the credibility?
3. The eyebrow grammar drifted from your own DESIGN.md ("use sparingly"). If that slipped in unnoticed, what else drifted?
