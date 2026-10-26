import {
  Award,
  CheckCircle2,
  Gift,
  HeartHandshake,
  Leaf,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import WhatsAppButton from "../components/common/WhatsAppButton";

import clinicImage from "../assets/images/clinic.webp";
import drPranitaImg from "../assets/images/Dr-Pranita.webp";

const values = [
  {
    icon: Award,
    title: "City-Wise Top 5 Curation",
    text: "We don't overwhelm patients with thousands of listings. In each city across India, we handpick only the 5 highest-rated MD and senior BHMS doctors based on verified patient outcomes.",
  },
  {
    icon: Gift,
    title: "First Consultation 100% Free",
    text: "Like Astrotalk for modern medicine: every new patient gets their first 5-minute chat or video consultation completely free (₹0) to evaluate treatment fit with zero risk.",
  },
  {
    icon: ShieldCheck,
    title: "Root-Cause Homeopathy",
    text: "Pure constitutional prescribing targeting chronic triggers—not just suppressing symptoms with steroids or habit-forming chemicals.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#f8faf8]">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="bg-white py-16 sm:py-24 border-b border-slate-200/80">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/10 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#145c43]">
                  <Sparkles size={13} className="text-amber-500" />
                  <span>The HealingCare Story</span>
                </div>

                <h1 className="mt-5 max-w-3xl font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950">
                  Reinventing how India discovers and consults{" "}
                  <em className="italic font-bold text-[#145c43]">Top Homeopaths</em>.
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  HealingCare was born out of a simple observation: finding an authentic, highly skilled homeopathic doctor in India was full of guesswork and fake reviews. We set out to build a trusted national network curating the top 5 rated homeopaths in every city.
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  Headquartered in Pune with clinical leadership from <strong className="font-semibold text-slate-900">Dr. Pranita Kanade (M.D. Hom, Nutritionist)</strong>, HealingCare enables instant chat, video appointments, and certified doorstep medicine delivery to over 30+ Indian cities.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button to="/doctor">
                    Consult Top 5 Doctors
                  </Button>
                  <Button to="/appointment" variant="secondary">
                    Claim Free Meeting
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-emerald-50 shadow-lg">
                <img
                  src={clinicImage}
                  alt="HealingCare Headquarters"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-slate-950/80 backdrop-blur-md p-4 text-white text-xs">
                  <div className="flex items-center gap-2 font-bold text-emerald-300">
                    <MapPin size={14} />
                    <span>Pune Headquarters</span>
                  </div>
                  <p className="mt-1 text-slate-200 text-[11px]">
                    Shivaji Nagar / Kothrud, Pune · Serving patients across Maharashtra & All India.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Core Values */}
        <section className="py-16 sm:py-24">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#145c43]">
                Our Principles
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                What sets HealingCare apart
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs hover:shadow-md transition"
                  >
                    <div className="grid size-12 place-items-center rounded-2xl bg-emerald-50 text-[#145c43]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-900">
                      {value.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {value.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Featured Pune Specialist Highlight */}
        <section className="bg-white py-16 sm:py-24 border-t border-slate-200/80">
          <Container>
            <div className="rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-[#0c2f24] to-[#145c43] p-8 sm:p-12 text-white shadow-xl">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div className="relative mx-auto size-48 sm:size-64 overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl">
                  <img
                    src={drPranitaImg}
                    alt="Dr. Pranita Kanade"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 right-2 rounded-lg bg-slate-950/80 px-2 py-1 text-center text-[10px] font-bold text-amber-300">
                    #1 Ranked in Pune
                  </span>
                </div>

                <div>
                  <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
                    Clinical Director & Star Specialist
                  </span>

                  <h3 className="mt-4 text-2xl sm:text-4xl font-bold text-white">
                    Dr. Pranita Kanade
                  </h3>
                  <p className="text-emerald-200 text-sm font-semibold mt-1">
                    M.D. (Hom), Clinical Nutritionist · 9+ Years Clinical Practice
                  </p>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-emerald-100/80">
                    Dr. Pranita leads our clinical protocols and represents Pune as its #1 rated classical homeopath. She has successfully treated thousands of chronic cases spanning stubborn PCOD, severe allergies, gastrointestinal syndromes, and autoimmune conditions using individualized constitutional healing.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      to="/appointment"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-xs sm:text-sm font-bold text-[#0c2f24] hover:bg-emerald-100 transition"
                    >
                      <span>Book Free Consultation</span>
                      <span>→</span>
                    </Link>

                    <a
                      href="https://wa.me/918767907569"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-xs sm:text-sm font-semibold text-white hover:bg-white/20 transition"
                    >
                      <MessageCircle size={16} />
                      <span>WhatsApp Dr. Pranita</span>
                    </a>
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