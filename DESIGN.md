# Design

## Theme

"Yellow Press" — an architectural, craft-engineering brand. Off-white canvas,
near-black ink, and a committed press-yellow used as full surfaces (whole bands
and blocks carrying black type), not as a thin accent. Schematic hairlines and a
sparse blueprint grid reference the engineering register. Two sub-brand worlds
keep their own skin: AZA (warm, soft pastels) and BlackBox Coworking (calm dark
monochrome).

Color strategy: **Committed.** The yellow carries identity across heroes, CTAs
and signal blocks; the rest is disciplined neutral.

## Color

OKLCH, light scheme. Token names are stable (Tailwind `@theme`); a restyle
changes values, not names, so every page inherits it.

| Token | Value | Role |
|---|---|---|
| `--color-base` | `oklch(0.985 0.002 95)` | off-white page canvas (no pure #fff) |
| `--color-panel` | `oklch(0.965 0.004 95)` | light section surface |
| `--color-panel-2` | `oklch(0.94 0.006 95)` | hover / nested surface |
| `--color-fg` | `oklch(0.18 0.004 90)` | near-black ink (no pure #000) |
| `--color-dim` | `oklch(0.44 0.006 90)` | muted text, ≥4.5:1 on base |
| `--color-line` | `oklch(0.9 0.006 95)` | hairline border |
| `--color-accent` | `oklch(0.87 0.18 96)` | press yellow — fills/blocks/signal |
| `--color-accent-ink` | `oklch(0.32 0.09 80)` | dark-yellow text on yellow/white |

Contrast: black ink on yellow and black ink on white both clear AA. Yellow is
**never** used as text on white. On yellow surfaces, body text is `fg`.

Sub-brands: BlackBox `--color-bb-*` (off-black monochrome). AZA warm pastels are
section-local (terracotta/ochre on `#f6ece2`).

## Typography

Pairing on a contrast axis: an idiosyncratic display grotesque against a neutral
text grotesque. Replaces the prior Space Grotesk / Inter (training-data
defaults).

- **Display — Bricolage Grotesque** (`--font-display`): headlines, hero, section
  titles. Weights 600–800. Letter-spacing -0.02em (never below -0.04em).
- **Body — Hanken Grotesk** (`--font-sans`): all body, UI, nav, labels.
  Weights 400/500/600.
- **Mono — JetBrains Mono** (`--font-mono`): code window and small technical
  labels only — honest (they ship code), never decorative costume.

Display ceiling: `clamp()` max ~5rem on hero. Body line length capped 65–75ch.
`text-wrap: balance` on h1–h3, `text-wrap: pretty` on prose.

## Components

- **Buttons** (`ButtonLink`): pill. `primary` = black fill / off-white ink;
  `accent` = yellow fill / black ink (signal CTA); `secondary` = hairline,
  ink, border darkens on hover; `ghost` = underline. Arrow nudges on hover.
- **SectionHeading**: headline-led. The eyebrow is optional and used sparingly
  (deliberate label, not section grammar on every block).
- **Tag/Label**: small yellow-underline or yellow-block marker, used once per
  section at most.
- **CodeWindow**: black panel, mono, yellow keyword highlights — the hero's
  proof-of-craft object.
- **Cards**: radius 12–16px max. Full hairline borders OR one defined shadow,
  never both. No nested cards. Services use an asymmetric bento, not a uniform
  3-up.

## Layout

`max-w-6xl` content column, fluid `clamp()` spacing for vertical rhythm
(generous between movements, tight within groups). Asymmetric hero (copy + code
window). Full-bleed yellow and black bands break the column for emphasis.
Responsive grids `repeat(auto-fit, minmax(280px, 1fr))` where uniform.

## Motion

CSS only (no motion lib). `--ease-out-expo` for entrances; reveal-on-scroll
enhances already-visible content (never gates visibility). Hover micro-nudges on
links/buttons. Client-logo marquee. Every animation has a
`prefers-reduced-motion: reduce` fallback (crossfade/instant).

## Z-index scale

`--z-dropdown: 10; --z-sticky: 20; --z-backdrop: 30; --z-modal: 40; --z-toast: 50; --z-skip: 100`.
