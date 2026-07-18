import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import ServicesSection from "../components/ServicesSection";
import ProductGrid from "../components/ProductGrid";
import Industries from "../components/Industries";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO
        title="COMPU CONNECT | Computer Sales, Service & IT Solutions in Pollachi"
        description="Pollachi's trusted IT partner for computer & laptop sales, repair, CCTV security, networking, servers and home automation."
        path="/"
      />
      <Hero />
      <Brands />
      <ServicesSection />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-signal)]">
              Featured products
            </span>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
              Product
            </h2>
          </div>
          <Link
            to="/products"
            className="flex items-center gap-1 text-sm font-medium text-[color:var(--color-primary-2)]"
          >
            View all products <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-10">
          <ProductGrid limit={6} />
        </div>
      </section>

      <Industries />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
