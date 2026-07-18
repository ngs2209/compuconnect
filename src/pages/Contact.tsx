import SEO from "../components/SEO";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact COMPU CONNECT | Pollachi, Tamil Nadu"
        description="Reach COMPU CONNECT on Negamam Road, Kovilpalayam, Pollachi. Call, WhatsApp, or send a quote request — we reply the same day."
        path="/contact"
      />
      <div className="pt-24">
        <ContactSection />
      </div>
    </>
  );
}
