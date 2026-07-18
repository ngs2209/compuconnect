import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { products } from "../data/content";
import { buildWhatsAppLink } from "../lib/whatsapp";

import type { Product } from "../data/content";

type Props = { limit?: number; items?: Product[] };

export default function ProductGrid({ limit, items }: Props) {
  const base = items ?? products;
  const list = limit ? base.slice(0, limit) : base;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((p, i) => (
        <motion.article
          key={p.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
          className="flex flex-col overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)]"
        >
          <div className="flex h-36 items-center justify-center border-b border-[color:var(--color-line)] bg-gradient-to-br from-[color:var(--color-surface-2)] to-[color:var(--color-surface)]">
            {p.image ? (
              <img src={p.image} alt={p.name} className="h-24 w-auto object-contain" />
            ) : (
              <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-muted-2)]">
                {p.category}
              </span>
            )}
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display text-base font-semibold text-[color:var(--color-text)]">{p.name}</h3>
            <ul className="mt-3 space-y-1">
              {p.specs.map((s) => (
                <li key={s} className="font-mono text-[11px] text-[color:var(--color-muted)]">
                  · {s}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-[color:var(--color-muted)]">
              <span className="text-[color:var(--color-muted-2)]">Used for:</span> {p.applications}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.brands.map((b) => (
                <span
                  key={b}
                  className="rounded-md bg-[color:var(--color-surface-2)] px-2 py-0.5 text-[10px] text-[color:var(--color-muted)]"
                >
                  {b}
                </span>
              ))}
            </div>
            <a
              href={buildWhatsAppLink({ service: p.name, message: `I'm interested in ${p.name}.` })}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-line)] py-2.5 text-xs font-semibold text-[color:var(--color-text)] transition-colors hover:border-[color:var(--color-whatsapp)] hover:text-[color:var(--color-whatsapp)]"
            >
              <MessageCircle size={14} /> Enquire on WhatsApp
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
