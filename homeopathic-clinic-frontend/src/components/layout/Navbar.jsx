import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Gift,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import Container from "../common/Container";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Top 5 Doctors", to: "/doctor" },
  { label: "Cities & Clinics", to: "/locations" },
  { label: "Treatments", to: "/treatments" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const whatsappUrl =
  "https://wa.me/918767907569?text=Hello%20HealingCare%2C%20I%20would%20like%20to%20claim%20my%20First%20Free%20Consultation%20with%20a%20Top%20Homeopath.";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transform-gpu will-change-transform transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled
          ? "border-b border-slate-900/10 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <Container>
        <div className="flex h-18 sm:h-20 items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            to="/"
            aria-label="HealingCare Homeopathy Home"
            className="flex items-center gap-3 group"
          >
            <img
              src="/HealingCareLogo.ico"
              alt="HealingCare Logo"
              width="44"
              height="44"
              className="size-11 rounded-2xl object-contain bg-white shadow-md shadow-emerald-950/10 border border-slate-200/80 p-1 transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-950">
                  HealingCare
                </span>
                <span className="rounded-md bg-amber-100 px-1.5 py-0.2 text-[10px] font-extrabold uppercase tracking-wider text-amber-900">
                  Top 5
                </span>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#145c43]">
                Homeopathy Platform · India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-1 rounded-full border border-slate-900/5 bg-[#f8faf8] p-1.5"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#145c43] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-950 hover:bg-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/doctor"
              className="group inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-50 px-4 py-2 text-xs font-bold text-amber-900 transition hover:bg-amber-100"
            >
              <Gift size={14} className="text-amber-600 animate-pulse" />
              <span>1st Chat Free</span>
            </Link>

            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 rounded-full bg-[#145c43] px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-emerald-900/15 transition hover:bg-[#0e4532] active:scale-95"
            >
              <span>Book Meeting</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-xs lg:hidden transition hover:bg-slate-50"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-18 sm:top-20 z-50 bg-[#f8faf8] border-b border-slate-200 shadow-2xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100 max-h-[85vh] overflow-y-auto"
            : "invisible -translate-y-4 opacity-0 pointer-events-none max-h-0"
        }`}
      >
        <Container className="py-6">
          {/* Mobile Astrotalk Offer Box */}
          <div className="mb-4 rounded-2xl border border-amber-300/40 bg-amber-50 p-3 text-xs font-medium text-amber-900 flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-bold">
              <Gift size={16} className="text-amber-600" />
              1st Consultation Free
            </span>
            <span className="rounded bg-amber-500 px-2 py-0.5 text-[11px] font-extrabold text-slate-950">
              ₹0 VOUCHER
            </span>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#145c43] text-white"
                      : "text-slate-700 hover:bg-white"
                  }`
                }
              >
                <span>{item.label}</span>
                <ArrowRight size={14} className="opacity-50" />
              </NavLink>
            ))}
          </nav>

          {/* Mobile Contact & CTAs */}
          <div className="mt-6 border-t border-slate-200 pt-5 space-y-2.5">
            <Link
              to="/appointment"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#145c43] px-4 text-sm font-semibold text-white shadow-sm"
            >
              <span>Book Free Meeting</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-[#25d366]/30 bg-[#25d366]/10 px-4 text-sm font-bold text-emerald-900"
            >
              <MessageCircle size={18} className="text-[#25d366]" />
              <span>WhatsApp: +91 8767907569</span>
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}