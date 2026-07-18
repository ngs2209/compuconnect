import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { serviceNodes } from "../data/content";

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-signal)]">
          What we do
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
          Any System Services, @ Your Door Step
        </h2>
        <p className="mt-4 text-[color:var(--color-muted)]">
          Every line of business runs through the same technicians and the same support number —
          nothing gets handed off to a subcontractor.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {serviceNodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 transition-colors hover:border-[color:var(--color-primary)]/50"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[color:var(--color-primary)]/10 blur-2xl transition-opacity group-hover:opacity-100" />
            <span className="font-mono text-xs text-[color:var(--color-muted-2)]">0{i + 1}</span>
            <h3 className="font-display mt-3 text-lg font-semibold text-[color:var(--color-text)]">
              {node.label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">{node.short}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {node.bullets.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-[color:var(--color-line)] px-2.5 py-1 font-mono text-[10px] text-[color:var(--color-muted)]"
                >
                  {b}
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-primary-2)] opacity-0 transition-opacity group-hover:opacity-100"
            >
              Learn more <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
