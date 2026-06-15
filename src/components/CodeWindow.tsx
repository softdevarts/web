/*
  Decorative faux code window for the hero. Black panel on the white
  page, strong contrast. aria-hidden so screen readers skip it.
*/
export default function CodeWindow() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-2xl border-2 border-fg bg-fg"
    >
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-white/12 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-accent" />
        <span className="h-3 w-3 rounded-full bg-white/35" />
        <span className="ml-3 font-mono text-xs tracking-tight text-white/50">
          softdevarts.ts
        </span>
      </div>
      {/* code body */}
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-white">
        <code>
          <span className="text-accent">const</span>{" "}
          <span className="text-white">product</span> ={" "}
          <span className="text-accent">await</span>{" "}
          <span className="text-white">softdevarts</span>.
          <span className="text-accent">build</span>({"{"}
          {"\n"}
          {"  "}
          <span className="text-white/70">idea</span>:{" "}
          <span className="text-[#9be38b]">&quot;your vision&quot;</span>,
          {"\n"}
          {"  "}
          <span className="text-white/70">craft</span>:{" "}
          <span className="text-[#9be38b]">&quot;artisanal&quot;</span>,
          {"\n"}
          {"  "}
          <span className="text-white/70">stack</span>:{" "}
          <span className="text-[#9be38b]">&quot;modern&quot;</span>,
          {"\n"}
          {"  "}
          <span className="text-white/70">delivery</span>:{" "}
          <span className="text-[#9be38b]">&quot;on time&quot;</span>,
          {"\n"}
          {"}"})
          {"\n\n"}
          <span className="text-white/40">
            {"// → scalable · maintainable · yours"}
          </span>
        </code>
      </pre>
    </div>
  );
}
