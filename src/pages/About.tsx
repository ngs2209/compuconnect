import { motion } from "framer-motion";
import SEO from "../components/SEO";
import CTASection from "../components/CTASection";
import { stats } from "../data/content";

const timeline = [
  { year: "Founded", text: "COMPU CONNECT opens on Negamam Road, Kovilpalayam, selling and servicing desktop PCs." },
  { year: "Expansion", text: "Added laptop sales, printer service and an in-house repair bench for faster turnaround." },
  { year: "Security & Networking", text: "Introduced CCTV installation, structured cabling and enterprise networking for local businesses." },
  { year: "Today", text: "A full-service IT partner covering sales, service, security, networking and home automation across Pollachi." },
];

const values = [
  { title: "Straight answers", text: "We recommend what your budget and workload actually need — not the most expensive option on the shelf." },
  { title: "Local accountability", text: "You can walk into our shop. Every AMC and installation is backed by a technician you can call by name." },
  { title: "Fair pricing", text: "Transparent quotes before any work begins, with genuine parts and authorised warranties." },
];

export default function About() {
  return (
    <>
      <SEO
        title="About COMPU CONNECT | IT Solutions Company in Pollachi"
        description="Learn about COMPU CONNECT — Pollachi's computer sales, service and IT solutions company serving homes and businesses since our founding."
        path="/about"
      />
      <section className="bg-grid pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-signal)]">About us</span>
          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-5xl">
            IT support that stays close to home
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[color:var(--color-muted)]">
            COMPU CONNECT is a computer sales and service company based on Negamam Road, Kovilpalayam,
            Pollachi. We sell, install and maintain the hardware and systems that keep homes, shops
            and offices across the region running.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <dl className="grid grid-cols-2 gap-6 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dd className="font-display text-3xl font-bold text-[color:var(--color-text)]">
                {s.value}
                {s.suffix}
              </dd>
              <dt className="mt-1 text-xs text-[color:var(--color-muted)]">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-[color:var(--color-text)]">Our story</h2>
        <div className="mt-10 space-y-8 border-l border-[color:var(--color-line)] pl-8">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-[color:var(--color-signal)] bg-[color:var(--color-ink)]" />
              <div className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-signal)]">{t.year}</div>
              <p className="mt-1 text-[color:var(--color-muted)]">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-[color:var(--color-line)] bg-[color:var(--color-surface)]/40 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[color:var(--color-text)]">What we stand for</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-ink)] p-6">
                <h3 className="font-display text-lg font-semibold text-[color:var(--color-text)]">{v.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
