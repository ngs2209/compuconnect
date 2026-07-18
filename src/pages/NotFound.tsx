import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found — COMPU CONNECT" description="The page you're looking for doesn't exist." path="/404" />
      <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
        <span className="font-display text-6xl font-bold text-[color:var(--color-text)]">404</span>
        <p className="mt-3 text-[color:var(--color-muted)]">This page has moved or doesn't exist.</p>
        <Link to="/" className="mt-6 rounded-full bg-[color:var(--color-primary)] px-6 py-3 text-sm font-semibold text-white">
          Back to home
        </Link>
      </div>
    </>
  );
}
