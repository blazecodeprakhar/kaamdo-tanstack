import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./brand/Logo";

const links = [
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/for-workers", label: "For Workers" },
  { to: "/about", label: "About" },
  { to: "/demo", label: "Live Demo" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="shrink-0 z-50" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-navy/80 transition-all duration-200 hover:bg-secondary hover:text-navy active:scale-95"
              activeProps={{ className: "text-orange bg-accent/60" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Call to Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/for-workers"
            className="rounded-full border-2 border-navy px-4.5 py-2 text-sm font-bold text-navy transition-all duration-200 hover:bg-navy hover:text-white active:scale-95"
          >
            Join as Worker
          </Link>
          <Link
            to="/demo"
            className="rounded-full bg-brand-gradient px-5 py-2 text-sm font-bold text-white shadow-glow transition-all duration-200 hover:brightness-105 active:scale-95"
          >
            Book a Worker
          </Link>
        </div>

        {/* Hamburger Toggle Button */}
        <button
          className="rounded-full p-2 text-navy lg:hidden z-50 hover:bg-secondary transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} className="stroke-[2.5]" /> : <Menu size={20} className="stroke-[2.5]" />}
        </button>
      </div>

      {/* Premium Full-Screen Mobile Drawer */}
      <div
        className={`fixed inset-0 top-0 left-0 z-40 w-screen h-screen bg-background transition-all duration-500 ease-in-out lg:hidden flex flex-col justify-between px-6 pt-24 pb-8 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3 mt-4">
          <p className="text-[10px] font-extrabold uppercase tracking-wider text-orange/90 px-3 select-none">Navigation</p>
          <nav className="flex flex-col gap-1">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                style={{ 
                  transitionDelay: open ? `${i * 60}ms` : "0ms",
                  transform: open ? "translateX(0)" : "translateX(-16px)",
                  opacity: open ? 1 : 0
                }}
                className="rounded-2xl px-4 py-3 text-base font-bold text-navy transition-all duration-300 hover:bg-secondary active:scale-[0.98] flex items-center justify-between group"
              >
                <span>{l.label}</span>
                <ArrowRight size={16} className="text-orange opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            ))}
          </nav>
        </div>

        <div 
          style={{ 
            transitionDelay: open ? `${links.length * 60}ms` : "0ms",
            transform: open ? "translateY(0)" : "translateY(16px)",
            opacity: open ? 1 : 0
          }}
          className="flex flex-col gap-2.5 transition-all duration-300"
        >
          <div className="h-px bg-border/60 my-2" />
          <Link
            to="/for-workers"
            onClick={() => setOpen(false)}
            className="w-full rounded-2xl border-2 border-navy py-3 text-center text-sm font-bold text-navy hover:bg-navy hover:text-white transition-all duration-200 active:scale-[0.98]"
          >
            Join as Worker
          </Link>
          <Link
            to="/demo"
            onClick={() => setOpen(false)}
            className="w-full rounded-2xl bg-brand-gradient py-3.5 text-center text-sm font-bold text-white shadow-glow transition-all duration-200 active:scale-[0.98]"
          >
            Book a Worker
          </Link>
        </div>
      </div>
    </header>
  );
}

