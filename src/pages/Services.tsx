import { motion } from "framer-motion";
import { MessageCircle, Check } from "lucide-react";
import SEO from "../components/SEO";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import { serviceNodes } from "../data/content";
import { buildWhatsAppLink } from "../lib/whatsapp";

export default function Services() {
  return (
    <>
      <SEO
        title="Services | Repair, CCTV, Networking, AMC & Automation — COMPU CONNECT"
        description="COMPU CONNECT offers computer sales, repair & AMC, CCTV installation, networking & servers, and smart automation for homes and businesses in Pollachi."
        path="/services"
      />
      <section className="bg-grid pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-signal)]">Services</span>
          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-5xl">
            End-to-end IT support, handled locally
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[color:var(--color-muted)]">
            From a single machine to a full office fit-out — our own technicians install, configure
            and support everything we sell.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-5 pb-24 lg:px-8">
        {serviceNodes.map((node, i) => (
          <motion.div
            key={node.id}
            id={node.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="grid grid-cols-1 gap-6 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-8 lg:grid-cols-5"
          >
            <div className="lg:col-span-3">
              <span className="font-mono text-xs text-[color:var(--color-muted-2)]">0{i + 1}</span>
              <h2 className="font-display mt-2 text-2xl font-bold text-[color:var(--color-text)]">{node.label}</h2>
              <p className="mt-3 text-[color:var(--color-muted)]">{node.description}</p>
              <a
                href={buildWhatsAppLink({ service: node.label, message: `I'd like to know more about ${node.label}.` })}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-whatsapp)] px-5 py-2.5 text-sm font-semibold text-black"
              >
                <MessageCircle size={16} /> Ask about this service
              </a>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-2.5">
                {node.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-[color:var(--color-text)]">
                    <Check size={15} className="text-[color:var(--color-signal)]" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}
