import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { Logo } from "./brand/Logo";
import { categories } from "@/data/categories";

export function Footer() {
  return (
    <footer className="mt-20 bg-navy text-white/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="rounded-2xl bg-white/95 p-3 inline-block">
            <Logo />
          </div>
          <p className="mt-4 text-sm text-white/70">
            India's first OTP-based on-demand workforce platform - verified workers, fair prices, dignified work.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-orange-light">About</Link></li>
            <li><Link to="/how-it-works" className="hover:text-orange-light">How It Works</Link></li>
            <li><Link to="/faq" className="hover:text-orange-light">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-orange-light">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link to="/services" className="hover:text-orange-light">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Get the App</h4>
          <div className="mt-4 flex flex-col gap-2">
            <button disabled className="cursor-not-allowed rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-left text-sm opacity-70">
              <div className="text-[10px] uppercase tracking-wider text-white/60">Coming Soon</div>
              <div className="font-semibold">Google Play</div>
            </button>
            <button disabled className="cursor-not-allowed rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-left text-sm opacity-70">
              <div className="text-[10px] uppercase tracking-wider text-white/60">Coming Soon</div>
              <div className="font-semibold">App Store</div>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 md:flex-row md:justify-between">
          <div className="text-xs text-white/60">
            © 2026 KaamDo. All rights reserved. · <a href="#" className="hover:text-white">Privacy</a> · <a href="#" className="hover:text-white">Terms</a>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <a href="#" aria-label="Instagram"><Instagram size={18} className="hover:text-orange-light" /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} className="hover:text-orange-light" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} className="hover:text-orange-light" /></a>
            <a href="#" aria-label="YouTube"><Youtube size={18} className="hover:text-orange-light" /></a>
          </div>
        </div>
        <div className="pb-6 text-center text-sm font-semibold text-orange-light">
          Respect Every Worker. Build a Better India.
        </div>
      </div>
    </footer>
  );
}
