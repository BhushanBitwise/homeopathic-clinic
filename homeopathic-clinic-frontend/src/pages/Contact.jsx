import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import WhatsAppButton from "../components/common/WhatsAppButton";
import { InstagramIcon, YoutubeIcon } from "../components/common/SocialIcons";

import clinicInteriorImage from "../assets/images/clinic-interior.webp";

const officialEmail = "healingcare.business@gmail.com";
const officialPhone = "+91 8767907569";
const youtubeUrl = "https://www.youtube.com/@HealingCareHomeopathy";
const instagramUrl = "https://www.instagram.com/healingcare_homeopathy/";
const whatsappUrl =
  "https://wa.me/918767907569?text=Hello%20HealingCare%2C%20I%20have%20an%20enquiry%20regarding%20homeopathy%20consultations.";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f8faf8]">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        <section className="bg-white py-16 sm:py-24 border-b border-slate-200/80">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/10 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#145c43]">
                  <Sparkles size={13} className="text-amber-500" />
                  <span>HealingCare Support</span>
                </div>

                <h1 className="mt-5 font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950">
                  We&apos;re here to guide your{" "}
                  <em className="italic font-bold text-[#145c43]">healing journey</em>.
                </h1>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Reach out to the HealingCare clinical team for doctor recommendations, appointment queries, or medicine delivery tracking.
                </p>

                {/* Contact Cards Grid */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200/80 bg-[#f8faf8] p-5">
                    <MapPin size={20} className="text-[#145c43]" />
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Clinic Headquarters
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-900">
                      Shivaji Nagar / Kothrud, Pune, Maharashtra
                    </p>
                    <span className="text-[11px] text-emerald-800 font-semibold block mt-1">
                      Dr. Pranita Kanade Leading Pune Care
                    </span>
                  </div>

                  <div className="rounded-3xl border border-slate-200/80 bg-[#f8faf8] p-5">
                    <Phone size={20} className="text-[#145c43]" />
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Phone & WhatsApp
                    </p>
                    <a
                      href={`tel:${officialPhone}`}
                      className="mt-1 text-sm font-bold text-slate-900 hover:text-[#145c43] block"
                    >
                      {officialPhone}
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      Direct WhatsApp support
                    </span>
                  </div>

                  <div className="rounded-3xl border border-slate-200/80 bg-[#f8faf8] p-5">
                    <Mail size={20} className="text-[#145c43]" />
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Official Email
                    </p>
                    <a
                      href={`mailto:${officialEmail}`}
                      className="mt-1 text-sm font-bold text-slate-900 hover:text-[#145c43] block truncate"
                    >
                      {officialEmail}
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      Business & consultations
                    </span>
                  </div>

                  <div className="rounded-3xl border border-slate-200/80 bg-[#f8faf8] p-5">
                    <Clock3 size={20} className="text-[#145c43]" />
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Consultation Hours
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-900">
                      Mon – Sat · 9 AM – 8 PM
                    </p>
                    <span className="text-[11px] text-emerald-800 font-semibold block mt-1">
                      Online chat available 24/7
                    </span>
                  </div>
                </div>

                {/* Social Channels Callout */}
                <div className="mt-8 rounded-3xl border border-slate-200 bg-[#f8faf8] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Connect on Social Media
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-2 text-xs font-bold text-red-700 hover:bg-red-100 transition"
                    >
                      <YoutubeIcon className="size-4" />
                      <span>YouTube Channel</span>
                    </a>

                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-bold text-pink-700 hover:bg-pink-100 transition"
                    >
                      <InstagramIcon className="size-4" />
                      <span>Instagram (@healingcare_homeopathy)</span>
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button to="/appointment">
                    Book Free Consultation
                  </Button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-[#25d366]/10 px-6 text-sm font-bold text-[#145c43] hover:bg-[#25d366]/20 transition"
                  >
                    <MessageCircle size={17} className="text-[#25d366]" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Clinic Photo & Assurance */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-emerald-50 shadow-md">
                  <img
                    src={clinicInteriorImage}
                    alt="HealingCare Clinic Interior"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-5 flex items-center gap-4 shadow-xs">
                  <span className="grid size-12 place-items-center rounded-2xl bg-emerald-50 text-[#145c43] shrink-0">
                    <ShieldCheck size={24} />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      100% Confidential Healthcare
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Your consultation notes, case history and prescriptions are strictly private and protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}