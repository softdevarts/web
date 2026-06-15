/*
  Official SoftDevArts mark (the gold double-brace) + wordmark.
  Mark paths come from the brand SVG (logo_softdevarts.svg), cropped
  to the brackets. `tone` switches the wordmark colour for dark surfaces.
*/
export default function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  // tone "dark" = dark text (for light backgrounds); "light" = white text
  const text = tone === "light" ? "text-base" : "text-fg";
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="58 116 176 252"
        className="h-8 w-auto"
        fill="#EBA900"
        aria-hidden="true"
      >
        <path d="M98.9,235.5c14.9,0,30.4-7,30.4-26v-35.3c0-31.9,16.2-47.9,46.4-47.9h10.9v19.3h-10.9c-19.1,0-25.2,8.2-25.2,27v42.2c0,17.3-10.3,28.6-26.8,31.7c16.5,3.1,26.8,14.4,26.8,31.7v42c0,18.8,6.2,27.1,25.2,27.1h11.1v19.3h-11.1c-30.1,0-46.4-16-46.4-47.9v-35c0-19.1-15.4-26-30.4-26V235.5z" />
        <path d="M34,235.5c14.9,0,30.4-7,30.4-26v-35.3c0-31.9,16.2-47.9,46.4-47.9h10.4v19.3h-10.4c-19.1,0-25.2,8.2-25.2,27v42.2c0,17.3-10.3,28.6-26.8,31.7c16.5,3.1,26.8,14.4,26.8,31.7v42c0,18.8,6.2,27.1,25.2,27.1h10.4v19.3h-10.4c-30.1,0-46.4-16-46.4-47.9v-35c0-19.1-15.4-26-30.4-26V235.5z" />
      </svg>
      <span className={`font-display text-[1.35rem] font-bold leading-none ${text}`}>
        SoftDevArts
      </span>
    </span>
  );
}
