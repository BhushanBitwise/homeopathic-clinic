import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import { InstagramIcon, YoutubeIcon } from "../common/SocialIcons";

const officialEmail = "healingcare.business@gmail.com";
const officialPhone = "+91 8767907569";
const youtubeUrl = "https://www.youtube.com/@HealingCareHomeopathy";
const instagramUrl = "https://www.instagram.com/healingcare_homeopathy/";
const whatsappUrl =
  "https://wa.me/918767907569?text=Hello%20HealingCare%2C%20I%20would%20like%20to%20know%20more%20about%20booking%20a%20consultation.";

const topCities = [
  { name: "Pune (HQ · Dr. Pranita)", path: "/locations/maharashtra/pune" },
  { name: "Mumbai Top 5", path: "/locations/maharashtra/mumbai" },
  { name: "Delhi NCR Top 5", path: "/locations/delhi/delhi" },
  { name: "Bengaluru Top 5", path: "/locations/karnataka/bengaluru" },
  { name: "Hyderabad Top 5", path: "/locations/telangana/hyderabad" },
  { name: "Kolkata Top 5", path: "/locations/west-bengal/kolkata" },
  { name: "Chennai Top 5", path: "/locations/tamil-nadu/chennai" },
];

const navigation = [
  ["Home", "/"],
  ["Top 5 Doctors by City", "/doctor"],
  ["All Indian Cities", "/locations"],
  ["Treatments & Conditions", "/treatments"],
  ["About HealingCare", "/about"],
  ["Book Free Consultation", "/appointment"],
  ["Contact Support", "/contact"],
];

export default function Footer() {
  return (
    <>
      <footer className="relative overflow-hidden bg-[#0a261d] text-white">
        {/* Ambient background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 size-[420px] rounded-full bg-emerald-400/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 size-[360px] rounded-full bg-amber-400/5 blur-3xl"
        />

        <Container className="relative">
          {/* Top Astrotalk-style CTA banner */}
          <section className="border-b border-white/10 py-14 sm:py-18">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="inline-block rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
                  First Consultation Free
                </span>
                <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                  Ready to consult India&apos;s top 5 rated homeopaths?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-emerald-100/70 sm:text-base">
                  Connect via instant chat, book a video consultation, or visit clinic partners. No upfront fees for your first 5-minute session.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  to="/doctor"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-[#0a261d] shadow-lg transition hover:bg-emerald-100"
                >
                  <CalendarDays size={18} />
                  <span>Choose Your City Doctor</span>
                  <ArrowUpRight size={17} />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-6 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/25"
                >
                  <MessageCircle size={18} className="text-[#25d366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </section>

          {/* Main Footer Links */}
          <section className="grid gap-10 py-14 sm:py-16 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand & Socials */}
            <div className="space-y-4">
              <Link to="/" className="inline-flex items-center gap-3">
                <img
                  src="/HealingCareLogo.ico"
                  alt="HealingCare Logo"
                  width="44"
                  height="44"
                  className="size-11 rounded-2xl object-contain bg-white shadow-md p-1 border border-white/20"
                />
                <div>
                  <span className="block text-lg font-bold">HealingCare</span>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-emerald-300/60">
                    Homeopathy Platform · India
                  </span>
                </div>
              </Link>

              <p className="text-xs leading-relaxed text-emerald-100/60">
                India&apos;s dedicated healthcare network connecting patients with the top 5 verified homeopathic doctors in every city. Safe, constitutional, patient-first care.
              </p>

              {/* Verified Social Media Links */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300/80 mb-2">
                  Follow Us Online
                </p>
                <div className="flex items-center gap-2.5">
                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="HealingCare YouTube Channel"
                    className="grid size-9 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-red-600 hover:text-white"
                  >
                    <YoutubeIcon className="size-4.5" />
                  </a>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="HealingCare Instagram"
                    className="grid size-9 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 hover:text-white"
                  >
                    <InstagramIcon className="size-4.5" />
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="HealingCare WhatsApp"
                    className="grid size-9 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-[#25d366] hover:text-white"
                  >
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Explore Platform
              </p>
              <ul className="mt-4 space-y-2.5 text-xs text-emerald-100/70">
                {navigation.map(([label, path]) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="transition hover:text-white flex items-center gap-1 group"
                    >
                      <span>{label}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* City-Wise Top 5 Directory Links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                City Top 5 Doctors
              </p>
              <ul className="mt-4 space-y-2.5 text-xs text-emerald-100/70">
                {topCities.map((city) => (
                  <li key={city.name}>
                    <Link
                      to={city.path}
                      className="transition hover:text-white flex items-center gap-1 group"
                    >
                      <span>{city.name}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Contact Details */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Contact & Support
              </p>
              <div className="mt-4 space-y-3.5 text-xs text-emerald-100/80">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="shrink-0 text-emerald-300 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Headquarters</strong>
                    <span>Shivaji Nagar / Kothrud, Pune, Maharashtra 411005</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone size={16} className="shrink-0 text-emerald-300" />
                  <a href={`tel:${officialPhone}`} className="hover:text-white transition">
                    {officialPhone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail size={16} className="shrink-0 text-emerald-300" />
                  <a href={`mailto:${officialEmail}`} className="hover:text-white transition">
                    {officialEmail}
                  </a>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock3 size={16} className="shrink-0 text-emerald-300 mt-0.5" />
                  <div>
                    <span className="text-white block font-medium">Online Hours: 24/7 Support</span>
                    <span className="text-[11px] text-emerald-200/60">Clinic Hours: Mon – Sat · 9 AM – 8 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Copyright & Guarantee */}
          <section className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-emerald-100/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} HealingCare Homeopathy Platform. All rights reserved.</p>
            <div className="flex items-center gap-4 text-[11px]">
              <span>100% Certified MD & BHMS Doctors</span>
              <span>·</span>
              <span>Made with care for India</span>
            </div>
          </section>
        </Container>
      </footer>

      {/* Mobile Sticky Consultation Action Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-900/10 bg-white/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2">
          <Link
            to="/doctor"
            className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#145c43] px-4 text-xs font-bold text-white shadow-sm"
          >
            <CalendarDays size={16} />
            <span>Consult Top 5 Doctor (Free)</span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="grid size-12 place-items-center rounded-2xl bg-[#25d366] text-white shadow-sm"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </>
  );
}