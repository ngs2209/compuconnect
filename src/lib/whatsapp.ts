import { company } from "../data/content";

export type EnquiryDetails = {
  name: string;
  phone: string;
  email?: string;
  business?: string;
  service?: string;
  message?: string;
};

/** Builds a wa.me deep link pre-filled with the enquiry, no backend required. */
export function buildWhatsAppLink(details: Partial<EnquiryDetails>): string {
  const lines = [
    `Hello COMPU CONNECT, I'd like a quote.`,
    details.name ? `Name: ${details.name}` : null,
    details.phone ? `Phone: ${details.phone}` : null,
    details.email ? `Email: ${details.email}` : null,
    details.business ? `Business: ${details.business}` : null,
    details.service ? `Service needed: ${details.service}` : null,
    details.message ? `Message: ${details.message}` : null,
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${company.whatsapp}?text=${text}`;
}

export function buildSimpleWhatsAppLink(message: string): string {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function buildTelLink(phone: string): string {
  return `tel:${phone.replace(/\s+/g, "")}`;
}
