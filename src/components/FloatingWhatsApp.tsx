import { MessageCircle } from "lucide-react";
import { buildSimpleWhatsAppLink } from "../lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildSimpleWhatsAppLink("Hello COMPU CONNECT, I'd like a free quote.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-whatsapp)] text-black shadow-lg shadow-black/30 transition-transform hover:scale-110"
    >
      <MessageCircle size={26} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[color:var(--color-whatsapp)] opacity-40" />
    </a>
  );
}
