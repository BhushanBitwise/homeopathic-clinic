import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";

const whatsappUrl =
  "https://wa.me/918767907569?text=Hello%20HealingCare%2C%20I%20would%20like%20to%20book%20a%20consultation.";

const navigation = [
  ["Home", "/"],
  ["About the clinic", "/about"],
  ["Treatments", "/treatments"],
  ["Meet the doctor", "/doctor"],
  ["Contact", "/contact"],
];

function Footer() {
  return (
    <>
      <footer className="relative overflow-hidden bg-[#0c2f24] text-white">
        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 size-[420px] rounded-full bg-emerald-300/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 size-[360px] rounded-full bg-amber-200/5 blur-3xl"
        />

        <Container className="relative">
          {/* CTA */}
          <section className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
              <div className="max-w-3xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200/70">
                  Patient-first care
                </p>

                <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                  Take the first step
                  <span className="block text-emerald-200">
                    toward better wellbeing.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-emerald-50/65 sm:text-base">
                  Have a health concern or simply want to understand your
                  options? Start with a conversation built around you.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  to="/appointment"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#0c2f24] shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-50"
                >
                  <CalendarDays size={17} />

                  Book an Appointment

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </section>

          {/* Main footer */}
          <section className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-20">
            {/* Brand */}
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-3"
              >
                <span className="grid size-11 place-items-center rounded-2xl border border-emerald-200/10 bg-emerald-100/10 text-emerald-200">
                  <ShieldCheck size={21} strokeWidth={1.8} />
                </span>

                <span>
                  <span className="block text-lg font-semibold">
                    HealingCare
                  </span>

                  <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-200/50">
                    Homeopathic Clinic
                  </span>
                </span>
              </Link>

              <p className="mt-6 max-w-md text-sm leading-7 text-emerald-50/55">
                Thoughtful homeopathic care with a calm, personal and
                patient-first consultation experience.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200/45">
                Explore
              </p>

              <nav className="mt-5 flex flex-col gap-3.5">
                {navigation.map(([label, path]) => (
                  <Link
                    key={path}
                    to={path}
                    className="group flex w-fit items-center gap-1.5 text-sm text-emerald-50/65 transition hover:text-white"
                  >
                    {label}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Clinic */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200/45">
                Clinic
              </p>

              <div className="mt-5 space-y-5">
                <div className="flex gap-3">
                  <MapPin
                    size={17}
                    className="mt-0.5 shrink-0 text-emerald-200/70"
                  />

                  <div>
                    <p className="text-sm font-medium text-white">
                      Pune, Maharashtra
                    </p>

                    <p className="mt-1 text-xs leading-5 text-emerald-50/45">
                      Clinic address will be updated here
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock3
                    size={17}
                    className="mt-0.5 shrink-0 text-emerald-200/70"
                  />

                  <div>
                    <p className="text-sm font-medium text-white">
                      Consultation Hours
                    </p>

                    <p className="mt-1 text-xs text-emerald-50/45">
                      Mon – Sat · 9:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-200 transition hover:text-white"
                >
                  <MessageCircle size={16} />

                  +91 87679 07569

                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </section>

          {/* Bottom */}
          <section className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-emerald-50/35 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 HealingCare. All rights reserved.</p>

            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="transition hover:text-white/70"
              >
                Contact
              </Link>

              <span className="size-1 rounded-full bg-white/15" />

              <span>Designed around your care.</span>
            </div>
          </section>
        </Container>
      </footer>

      {/* Mobile appointment bar */}
      <div
        className="
          fixed
          inset-x-0
          bottom-0
          z-40
          border-t
          border-slate-900/10
          bg-white/95
          px-4
          pb-[calc(0.75rem+env(safe-area-inset-bottom))]
          pt-3
          shadow-[0_-14px_40px_rgba(15,23,42,0.10)]
          backdrop-blur-xl
          lg:hidden
        "
      >
        <div className="mx-auto flex max-w-md gap-2.5">
          <Link
            to="/appointment"
            className="group flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#145c43] px-4 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(20,92,67,0.20)] transition active:scale-[0.98]"
          >
            <CalendarDays size={17} />

            <span>Book Appointment</span>

            <ArrowUpRight size={16} />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with the clinic on WhatsApp"
            className="grid min-h-12 min-w-12 place-items-center rounded-full border border-[#145c43]/15 bg-emerald-50 text-[#145c43] transition active:scale-[0.96]"
          >
            <MessageCircle size={19} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;