import { motion } from "framer-motion";
import { industries } from "../data/content";

export default function Industries() {
  return (
    <section className="border-y border-[color:var(--color-line)] bg-[color:var(--color-surface)]/40 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-signal)]">
            Who we serve
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
            Built around Tamil Nadu's businesses
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-[color:var(--color-ink)] p-6"
            >
              <h3 className="font-display text-base font-semibold text-[color:var(--color-text)]">{ind.name}</h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]">{ind.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
