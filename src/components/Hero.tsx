import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import NetworkDiagram from "./NetworkDiagram";
import { stats } from "../data/content";
import { buildSimpleWhatsAppLink } from "../lib/whatsapp";

const slides = [
  {
    eyebrow: "Enterprise IT Solutions",
    title: "Technology beyond your doorstep",
    body: "Sales, installation and support for the systems your business runs on — from a single laptop to a full server room.",
  },
  {
    eyebrow: "Computer & Laptop Sales",
    title: "Business PCs to gaming workstations",
    body: "Configured, tested and delivered — premium brands, priced fairly, backed by local support.",
  },
  {
    eyebrow: "CCTV & Security Solutions",
    title: "See your premises from anywhere",
    body: "AI surveillance, remote monitoring, professional installation and ongoing AMC coverage.",
  },
  {
    eyebrow: "Networking & Server Infrastructure",
    title: "A network that doesn't let you down",
    body: "Enterprise WiFi, firewalls, structured cabling and server setup engineered for uptime.",
  },
  {
    eyebrow: "Home Automation & Smart Office",
    title: "Smart, secure, connected spaces",
    body: "IoT, biometric access control and automation — wired in cleanly by our own technicians.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="bg-grid relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* aurora backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[color:var(--color-primary)]/25 blur-[120px]" />
        <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-[color:var(--color-signal)]/15 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--color-ink)] to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)]/60 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-[color:var(--color-signal)]">
                {slide.eyebrow}
              </span>
              <h1 className="font-display mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-[color:var(--color-text)] sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
                {slide.body}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buildSimpleWhatsAppLink("Hello COMPU CONNECT, I'd like a free quote.")}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full bg-[color:var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[color:var(--color-primary)]/25 transition-transform hover:scale-105"
            >
              <MessageCircle size={18} /> Get Free Quote
            </a>
            <Link
              to="/products"
              className="group flex items-center gap-2 rounded-full border border-[color:var(--color-line)] px-6 py-3.5 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:border-[color:var(--color-signal)]"
            >
              Explore Products
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* slide indicators */}
          <div className="mt-10 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-[color:var(--color-signal)]" : "w-3 bg-[color:var(--color-line)]"
                }`}
              />
            ))}
          </div>

          {/* animated stats */}
          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-[color:var(--color-text)] sm:text-3xl">
                  {s.value}
                  {s.suffix}
                </dd>
                <p className="mt-1 text-xs text-[color:var(--color-muted)]">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="hidden lg:block">
          <NetworkDiagram />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[color:var(--color-muted)] sm:flex">
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-8 w-5 rounded-full border border-[color:var(--color-line)] p-1"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-signal)]" />
        </motion.div>
      </div>
    </section>
  );
}
