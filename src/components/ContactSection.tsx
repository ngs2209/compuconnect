import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { company } from "../data/content";
import { buildTelLink } from "../lib/whatsapp";
import WhatsAppForm from "./WhatsAppForm";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-signal)]">
          Get in touch
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
          Request a quotation
        </h2>
        <p className="mt-4 text-[color:var(--color-muted)]">
          Fill in a few details and we'll open WhatsApp with everything pre-filled — or call us directly.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 lg:col-span-3 sm:p-8">
          <WhatsAppForm />
        </div>

        <div className="space-y-5 lg:col-span-2">
          <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-[color:var(--color-signal)]" size={18} />
              <div>
                <div className="text-sm font-medium text-[color:var(--color-text)]">Visit us</div>
                {company.addressLines.map((l) => (
                  <div key={l} className="text-sm text-[color:var(--color-muted)]">
                    {l}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <Phone className="mt-0.5 shrink-0 text-[color:var(--color-signal)]" size={18} />
              <div>
                <div className="text-sm font-medium text-[color:var(--color-text)]">Call us</div>
                {company.phones.map((p) => (
                  <a key={p} href={buildTelLink(p)} className="block text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-text)]">
                    {p}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <Mail className="mt-0.5 shrink-0 text-[color:var(--color-signal)]" size={18} />
              <div>
                <div className="text-sm font-medium text-[color:var(--color-text)]">Email us</div>
                <a href={`mailto:${company.email}`} className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-text)]">
                  {company.email}
                </a>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <Clock className="mt-0.5 shrink-0 text-[color:var(--color-signal)]" size={18} />
              <div>
                <div className="text-sm font-medium text-[color:var(--color-text)]">Business hours</div>
                <div className="text-sm text-[color:var(--color-muted)]">{company.hours}</div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[color:var(--color-line)]">
            <iframe
              title="COMPU CONNECT location map"
              src={company.mapEmbed}
              width="100%"
              height="240"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[40%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
