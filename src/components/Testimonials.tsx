import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-signal)]">
          Trusted locally
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
          What clients say
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="flex flex-col rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
          >
            <Quote className="text-[color:var(--color-primary-2)]" size={22} />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[color:var(--color-muted)]">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 border-t border-[color:var(--color-line)] pt-4">
              <div className="font-display text-sm font-semibold text-[color:var(--color-text)]">{t.name}</div>
              <div className="text-xs text-[color:var(--color-muted-2)]">{t.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
