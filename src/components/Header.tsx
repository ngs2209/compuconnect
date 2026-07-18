import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import logo from "../assets/compuconnect_logo.png";
import { company, navItems } from "../data/content";
import { buildSimpleWhatsAppLink, buildTelLink } from "../lib/whatsapp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Compu Connect logo" className=" w-50 p-2" />
          {/* <span className="font-display text-lg font-bold tracking-tight text-[color:var(--color-text)]">
            COMPU<span className="text-gradient">CONNECT</span>
          </span> */}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-[color:var(--color-signal)] after:transition-all after:duration-300 hover:after:w-full ${
                  isActive ? "text-[color:var(--color-text)] after:w-full" : "text-[color:var(--color-muted)]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={buildTelLink(company.phones[0])}
            className="flex items-center gap-2 text-sm font-medium text-[color:var(--color-muted)] hover:text-[color:var(--color-text)]"
          >
            <Phone size={16} /> {company.phones[0]}
          </a>
          <a
            href={buildSimpleWhatsAppLink("Hello COMPU CONNECT, I'd like a free quote.")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-[color:var(--color-whatsapp)] px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            <MessageCircle size={16} /> Get Free Quote
          </a>
        </div>

        <button
          className="text-[color:var(--color-text)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-[color:var(--color-line)] px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? "bg-[color:var(--color-surface-2)] text-[color:var(--color-text)]"
                      : "text-[color:var(--color-muted)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a href={buildTelLink(company.phones[0])} className="flex items-center gap-2 text-sm text-[color:var(--color-muted)]">
              <Phone size={16} /> {company.phones[0]}
            </a>
            <a
              href={buildSimpleWhatsAppLink("Hello COMPU CONNECT, I'd like a free quote.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-whatsapp)] px-4 py-2.5 text-sm font-semibold text-black"
            >
              <MessageCircle size={16} /> Get Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
