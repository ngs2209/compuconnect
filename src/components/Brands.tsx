import { brands } from "../data/content";

export default function Brands() {
  const doubled = [...brands, ...brands];
  return (
    <section className="border-y border-[color:var(--color-line)] py-10">
      <p className="text-center font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted-2)]">
        Brands we sell &amp; support
      </p>
      <div className="relative mt-6 overflow-hidden">
        <div className="flex w-max animate-[scroll_28s_linear_infinite] gap-10">
          {doubled.map((b, i) => (
            <span key={`${b}-${i}`} className="font-display whitespace-nowrap text-lg font-semibold text-[color:var(--color-muted)]">
              {b}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[color:var(--color-ink)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[color:var(--color-ink)] to-transparent" />
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
