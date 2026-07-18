import { MessageCircle, Phone } from "lucide-react";
import { company } from "../data/content";
import { buildSimpleWhatsAppLink, buildTelLink } from "../lib/whatsapp";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="bg-grid relative overflow-hidden rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-8 py-16 text-center sm:px-16">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[color:var(--color-primary)]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[color:var(--color-signal)]/15 blur-[100px]" />
        <div className="relative">
          <h2 className="font-display mx-auto max-w-xl text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
            Tell us what you need — we'll quote it the same day
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[color:var(--color-muted)]">
            No forms, no waiting rooms. Message us directly on WhatsApp or call the shop.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={buildSimpleWhatsAppLink("Hello COMPU CONNECT, I'd like a free quote.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-[color:var(--color-whatsapp)] px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a
              href={buildTelLink(company.phones[0])}
              className="flex items-center gap-2 rounded-full border border-[color:var(--color-line)] px-6 py-3.5 text-sm font-semibold text-[color:var(--color-text)] hover:border-[color:var(--color-signal)]"
            >
              <Phone size={18} /> {company.phones[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
