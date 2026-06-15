/*
  Icon set, consistent 24x24, 1.5 stroke, currentColor.
  Lucide-style line icons. No emojis anywhere in the UI.
*/
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconCompass = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5.5-5.5 2 2-5.5 5.5-2z" />
  </Base>
);

export const IconCode = (p: IconProps) => (
  <Base {...p}>
    <path d="m16 18 4-6-4-6" />
    <path d="m8 6-4 6 4 6" />
    <path d="m13.5 4-3 16" />
  </Base>
);

export const IconLayers = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3 3 8l9 5 9-5-9-5z" />
    <path d="m3 14 9 5 9-5" />
  </Base>
);

export const IconSpark = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="m6.3 6.3 2.4 2.4M15.3 15.3l2.4 2.4M17.7 6.3l-2.4 2.4M8.7 15.3l-2.4 2.4" />
  </Base>
);

export const IconHandshake = (p: IconProps) => (
  <Base {...p}>
    <path d="m11 17 2 2a1 1 0 0 0 1.5-.1l4.5-5.2" />
    <path d="m20 13-3.3-3.3a2 2 0 0 0-2.8 0L11 12.6a1.5 1.5 0 0 1-2.1 0 1.5 1.5 0 0 1 0-2.1l3.4-3.4a2 2 0 0 1 1.4-.6h2.3" />
    <path d="M4 13.5 8 18M4 5l4 .5L11 8" />
  </Base>
);

export const IconShield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3 5 6v5c0 4.4 3 7.8 7 9 4-1.2 7-4.6 7-9V6l-7-3z" />
    <path d="m9.5 12 1.8 1.8L15 10" />
  </Base>
);

export const IconNetwork = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <path d="M12 7v4M12 11 6.5 17M12 11l5.5 6" />
  </Base>
);

export const IconRocket = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 15c-1.5 1-2 4-2 4s3-.5 4-2a2 2 0 0 0-2-2z" />
    <path d="M9 13c4-7 8-9 12-9 0 4-2 8-9 12l-3-3z" />
    <circle cx="15" cy="9" r="1.4" />
  </Base>
);

export const IconCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 12 4.5 4.5L19 7" />
  </Base>
);

export const IconArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const IconArrowUpRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Base>
);

export const IconMail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </Base>
);

export const IconPin = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Base>
);

export const IconClock = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Base>
);

export const IconInstagram = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </Base>
);

export const IconLinkedin = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" />
  </Base>
);

export const IconMenu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const IconClose = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);

export const IconDesk = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 7h18M5 7v10M19 7v10M3 12h18M8 17v2M16 17v2" />
  </Base>
);

export const IconBuilding = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
    <path d="M15 9h3a1 1 0 0 1 1 1v11M3 21h18" />
    <path d="M8 7h2M8 11h2M8 15h2" />
  </Base>
);

export const IconUsers = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" />
    <path d="M16 5.5a3 3 0 0 1 0 5.5M21 20c0-2.3-1.4-4-3.5-4.7" />
  </Base>
);

export const IconWifi = (p: IconProps) => (
  <Base {...p}>
    <path d="M2 8.5a16 16 0 0 1 20 0" />
    <path d="M5 12a11 11 0 0 1 14 0" />
    <path d="M8.5 15.5a6 6 0 0 1 7 0" />
    <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
  </Base>
);

export const IconCoffee = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 8h13v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z" />
    <path d="M17 9h2a2 2 0 0 1 0 4h-2" />
    <path d="M8 3v2M12 3v2" />
  </Base>
);

export const IconCalendar = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </Base>
);

export const IconPrinter = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 9V4h12v5" />
    <rect x="3" y="9" width="18" height="7" rx="2" />
    <path d="M7 16h10v4H7z" />
  </Base>
);
