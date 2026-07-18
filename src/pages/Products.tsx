import { useMemo, useState } from "react";
import SEO from "../components/SEO";
import ProductGrid from "../components/ProductGrid";
import CTASection from "../components/CTASection";
import { products } from "../data/content";

export default function Products() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map((p) => p.category)))], []);
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <SEO
        title="Products | Desktops, Laptops, CCTV, Networking & More — COMPU CONNECT"
        description="Browse desktops, laptops, printers, CCTV cameras, UPS, networking gear, servers and components available at COMPU CONNECT, Pollachi."
        path="/products"
      />
      <section className="bg-grid pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-signal)]">Products</span>
          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-5xl">
            Hardware for every counter, desk and server room
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[color:var(--color-muted)]">
            Every product below is available for quotation with your exact configuration and budget.
            Prices vary by specification — message us for current pricing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === c
                  ? "border-[color:var(--color-primary)] bg-[color:var(--color-primary)]/15 text-[color:var(--color-text)]"
                  : "border-[color:var(--color-line)] text-[color:var(--color-muted)] hover:border-[color:var(--color-signal)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-10">
          <ProductGrid items={filtered} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
