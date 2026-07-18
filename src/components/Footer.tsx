import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { company, navItems, serviceNodes } from "../data/content";
import { buildTelLink } from "../lib/whatsapp";
import logo from "../assets/compuconnect_logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-line)] bg-[color:var(--color-surface)]/30">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            
            <img src={logo} alt="Compu Connect logo" className=" w-50 p-2" />
            <p className="mt-3 text-sm text-[color:var(--color-muted)]">{company.tagline}</p>
            <div className="mt-4 flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{company.addressLines.join(", ")}</span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-[color:var(--color-text)]">Navigate</h4>
            <ul className="mt-4 space-y-2">
              {navItems.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-text)]">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-[color:var(--color-text)]">Services</h4>
            <ul className="mt-4 space-y-2">
              {serviceNodes.map((s) => (
                <li key={s.id} className="text-sm text-[color:var(--color-muted)]">
                  {s.label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-[color:var(--color-text)]">Contact</h4>
            <ul className="mt-4 space-y-2">
              {company.phones.map((p) => (
                <li key={p}>
                  <a href={buildTelLink(p)} className="flex items-center gap-2 text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-text)]">
                    <Phone size={14} /> {p}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-text)]">
                  <Mail size={14} /> {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[color:var(--color-line)] pt-6 sm:flex-row">
          <p className="text-xs text-[color:var(--color-muted-2)]">
            © {new Date().getFullYear()} COMPU CONNECT. All rights reserved.
          </p>
          <p className="font-mono text-xs text-[color:var(--color-muted-2)]">Designed by Sankar Web Solutions</p>
        </div>
      </div>
    </footer>
  );
}
