import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Gift,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Video,
} from "lucide-react";

import Container from "../common/Container";
import ConsultationModal from "../common/ConsultationModal";
import { featuredCities, getDoctorById } from "../../data/doctors";

// 4 Star MD Doctors representing Top Cities across India for the Hero Astrotalk Card
const HERO_STAR_DOCTORS = [
  {
    doctorId: "pune-dr-pranita-kanade",
    citySlug: "pune",
    cityName: "Pune",
    badgeLabel: "Pune #1 Ranked",
    specialtySnippet: "Chronic Illness, PCOD & Gut Health",
    avatarThumb: "/images/doctors/dr-pranita.webp",
    experience: "12+ Yrs Exp",
    consults: "14,800+",
  },
  {
    doctorId: "mumbai-dr-sameer-shah",
    citySlug: "mumbai",
    cityName: "Mumbai",
    badgeLabel: "Mumbai #1 Ranked",
    specialtySnippet: "Cardio-Metabolic & Stress Fatigue",
    avatarThumb: "/images/doctors/doctor1.webp",
    experience: "14+ Yrs Exp",
    consults: "12,400+",
  },
  {
    doctorId: "delhi-dr-neha-joshi",
    citySlug: "delhi",
    cityName: "Delhi NCR",
    badgeLabel: "Delhi #1 Ranked",
    specialtySnippet: "Pollution Allergies, Asthma & Sinus",
    avatarThumb: "/images/doctors/doctor2.webp",
    experience: "10+ Yrs Exp",
    consults: "11,200+",
  },
  {
    doctorId: "bengaluru-dr-suresh-rao",
    citySlug: "bengaluru",
    cityName: "Bengaluru",
    badgeLabel: "Bengaluru #1 Ranked",
    specialtySnippet: "Water Allergy, Hair Fall & Eczema",
    avatarThumb: "/images/doctors/doctor4.webp",
    experience: "16+ Yrs Exp",
    consults: "15,600+",
  },
];

export default function Hero() {
  const [selectedCity, setSelectedCity] = useState("pune");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("chat");

  // Hero Doctor Swapper State
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-swap timer: gently changes doctor every 5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_STAR_DOCTORS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const currentStarConfig = HERO_STAR_DOCTORS[activeIndex];
  const activeDoctor =
    getDoctorById(currentStarConfig.doctorId) ||
    getDoctorById("pune-dr-pranita-kanade");

  const handleOpenConsultation = (mode = "chat", doc = activeDoctor) => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const handleNextDoctor = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_STAR_DOCTORS.length);
  };

  const handlePrevDoctor = () => {
    setActiveIndex((prev) =>
      prev === 0 ? HERO_STAR_DOCTORS.length - 1 : prev - 1
    );
  };

  const handleCityPillClick = (slug) => {
    setSelectedCity(slug);
    const matchedDoctorIdx = HERO_STAR_DOCTORS.findIndex(
      (item) => item.citySlug === slug
    );
    if (matchedDoctorIdx !== -1) {
      setActiveIndex(matchedDoctorIdx);
    }
  };

  const scrollToDoctors = () => {
    const el = document.getElementById("top-doctors");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#faf9f5] pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24">
      {/* Gentle ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 top-10 size-[32rem] rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute right-0 top-20 size-[36rem] rounded-full bg-amber-100/35 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#faf9f5] to-transparent" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Bold Editorial Typography with Italic Accent */}
          {/* ========================================================= */}
          <div className="max-w-2xl">
            {/* Eyebrow with bold accent line */}
            <div className="flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase font-bold text-[#145c43]">
              <span className="w-8 h-[2px] bg-[#145c43]" />
              <span>India&apos;s Curated Multi-City Homeopathy</span>
            </div>

            {/* Launch Offer Astrotalk Pill Badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-400 bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-950 shadow-xs">
              <span className="flex size-2 rounded-full bg-amber-500 animate-ping" />
              <Gift size={15} className="text-amber-700" />
              <span>
                First Consultation with India&apos;s Top 5 MDs is{" "}
                <strong className="font-extrabold text-[#145c43] underline underline-offset-2">
                  100% FREE (₹0)
                </strong>
              </span>
            </div>

            {/* Bold Award-Winning Editorial Headline (Playfair Display & Elsie) */}
            <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[4.25rem] font-bold leading-[1.12] tracking-[-0.03em] text-[#112117]">
              Consult India&apos;s{" "}
              <em className="italic font-bold text-[#145c43]">
                Top 5 Homeopaths
              </em>{" "}
              in Your City.
            </h1>

            {/* Subheading with strong legibility and contrast */}
            <p className="mt-5 text-base sm:text-lg leading-[1.8] text-[#2c3d33] font-normal max-w-xl">
              Thoughtful, root-cause healing designed around you that{" "}
              <em className="italic font-semibold text-[#145c43]">
                actually listens
              </em>
              . Verified MD homeopaths across Pune, Mumbai, Delhi & Bengaluru.
              Chat live or meet on video — your first consultation is completely on us.
            </p>

            {/* Clean City Filter Switcher Tabs */}
            <div className="mt-7">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#35483d] mb-2.5">
                Select Your City to Meet Ranked Doctors:
              </span>
              <div className="flex flex-wrap gap-2">
                {featuredCities.slice(0, 6).map((city) => {
                  const isCurrent =
                    selectedCity === city.slug ||
                    currentStarConfig.citySlug === city.slug;
                  return (
                    <button
                      key={city.slug}
                      type="button"
                      onClick={() => handleCityPillClick(city.slug)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                        isCurrent
                          ? "bg-[#145c43] text-white shadow-sm ring-2 ring-[#145c43]/20"
                          : "bg-white text-[#2a3c31] border border-[#cbd5c7] hover:bg-[#eef2ea]"
                      }`}
                    >
                      <MapPin size={13} className={isCurrent ? "text-amber-300" : "text-[#145c43]"} />
                      <span>{city.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Action CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => handleOpenConsultation("chat", activeDoctor)}
                className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-2xl bg-[#145c43] px-7 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 transition-all hover:bg-[#0e4532] hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle size={18} />
                <span>Start Free Consultation (₹0)</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={scrollToDoctors}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border-2 border-[#145c43]/20 bg-white/95 backdrop-blur-xs px-6 text-sm font-bold text-[#112117] transition hover:bg-[#f1f4ec] hover:border-[#145c43]"
              >
                <span>View Top 5 in {currentStarConfig.cityName}</span>
              </button>
            </div>

            {/* Awarded Style Minimal Trust Note */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#d8e0d3] pt-4 text-xs font-semibold text-[#35483d]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#145c43]" />
                <span>Top 5 MDs Only</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#145c43]" />
                <span>Zero Side Effects</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#145c43]" />
                <span>Doorstep German Remedies</span>
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Shining Astrotalk-Style Doctor Showcase     */}
          {/* ========================================================= */}
          <div
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Ambient Warm Golden-Emerald Aura */}
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-emerald-500/15 via-amber-400/20 to-teal-400/15 blur-2xl transition-all" />

            {/* Astrotalk Pristine Shining Card */}
            <div className="card-astrotalk-glow relative overflow-hidden rounded-[2.25rem] border border-[#dce3d6] bg-gradient-to-b from-[#ffffff] via-[#fcfbf8] to-[#f6f5ee] p-5 sm:p-6 shadow-2xl">
              {/* Subtle Gliding Diagonal Shine Sweep */}
              <div className="animate-card-shine pointer-events-none absolute -top-1/2 left-0 h-[200%] w-1/3 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent" />

              {/* Card Top Strip: Live Online Status & City Rank Badge */}
              <div className="relative z-10 flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 px-3 py-1 text-xs font-semibold text-[#173f32]">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
                  </span>
                  <span>Online Now · &lt; 2 min response</span>
                </div>

                <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-slate-950 shadow-xs">
                  <Award size={13} className="text-slate-950" />
                  <span>{currentStarConfig.badgeLabel}</span>
                </div>
              </div>

              {/* Centerpiece: Arched Doctor Portrait with Verified Ring */}
              <div className="relative mx-auto flex flex-col items-center text-center">
                <div className="relative my-2">
                  <div className="relative size-36 sm:size-40 overflow-hidden rounded-full ring-4 ring-emerald-900/10 shadow-lg bg-[#0e3327]">
                    <img
                      key={activeDoctor?.id}
                      src={activeDoctor?.image || currentStarConfig.avatarThumb}
                      alt={activeDoctor?.name || "MD Homeopath"}
                      className="h-full w-full object-cover object-top animate-fadeIn transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.target.src = "/images/doctors/doctor1.webp";
                      }}
                    />
                  </div>

                  {/* Verified Doctor Checkmark Badge */}
                  <div
                    title="Verified MD Homeopath"
                    className="absolute bottom-1 right-2 grid size-7 place-items-center rounded-full bg-[#173f32] text-white ring-2 ring-white shadow-md"
                  >
                    <CheckCircle2 size={16} className="text-emerald-300" />
                  </div>
                </div>

                {/* Doctor Identity */}
                <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#112117]">
                  {activeDoctor?.name}
                </h3>
                <p className="text-xs font-bold text-[#145c43] mt-0.5">
                  {activeDoctor?.qualification} · {activeDoctor?.experience}
                </p>

                {/* Specialty Pill Tags */}
                <div className="mt-2.5 flex flex-wrap justify-center gap-1.5">
                  {(activeDoctor?.specialties || ["Chronic Care", "PCOD", "Gut"]).slice(0, 3).map((spec, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-[#edf4ea] border border-[#cbd9c7] px-3 py-0.5 text-[11px] font-bold text-[#193325]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Astrotalk Star Rating & Consultations Count */}
                <div className="mt-3 flex items-center justify-center gap-3 text-xs">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    <span className="text-slate-900 font-bold">{activeDoctor?.rating || "4.9"}</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <span className="font-semibold text-slate-700">
                    {activeDoctor?.totalConsultations || currentStarConfig.consults} Consults
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-emerald-700 font-medium">99% Positive</span>
                </div>
              </div>

              {/* Astrotalk Signature Offer Box */}
              <div className="mt-4 rounded-2xl border border-dashed border-amber-400/80 bg-amber-50/80 p-3 text-center">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-amber-950">
                    <Gift size={15} className="text-amber-700" />
                    <span>First Consultation Voucher</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400 line-through text-[11px]">
                      ₹{activeDoctor?.originalPrice || 800}
                    </span>
                    <span className="rounded bg-amber-400 px-2 py-0.5 text-[11px] font-black text-slate-950">
                      FREE (₹0)
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-[10px] text-amber-900 font-medium">
                  5-Minute live initial chat or video meet automatically credited
                </p>
              </div>

              {/* Astrotalk Direct CTA Buttons */}
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => handleOpenConsultation("chat", activeDoctor)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#173f32] py-3 text-xs font-bold text-white shadow-md shadow-emerald-950/20 transition hover:bg-[#102d24] active:scale-95"
                >
                  <MessageCircle size={15} />
                  <span>Chat Free Now</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenConsultation("call", activeDoctor)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-amber-300/80 bg-white py-3 text-xs font-bold text-amber-950 shadow-xs transition hover:bg-amber-50 active:scale-95"
                >
                  <Video size={15} className="text-amber-700" />
                  <span>Free Video Meet</span>
                </button>
              </div>

              {/* Bottom Multi-Doctor Swapper Dock (Astrotalk Style) */}
              <div className="mt-5 border-t border-[#e2e7dc] pt-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-[#5a6b60]">
                    India&apos;s Top City Doctors (Tap to Switch):
                  </span>
                  {/* Prev / Next controls */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={handlePrevDoctor}
                      aria-label="Previous doctor"
                      className="grid size-6 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-[#173f32] hover:text-white transition"
                    >
                      <ChevronLeft size={13} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextDoctor}
                      aria-label="Next doctor"
                      className="grid size-6 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-[#173f32] hover:text-white transition"
                    >
                      <ChevronRight size={13} />
                    </button>
                  </div>
                </div>

                {/* 4 Doctor Thumbnails */}
                <div className="grid grid-cols-4 gap-2">
                  {HERO_STAR_DOCTORS.map((doc, idx) => {
                    const isSelected = idx === activeIndex;
                    return (
                      <button
                        key={doc.doctorId}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        className={`flex flex-col items-center rounded-xl p-1.5 transition-all ${
                          isSelected
                            ? "bg-[#173f32] text-white shadow-sm ring-2 ring-[#173f32]/30"
                            : "bg-white/80 hover:bg-white text-slate-700 border border-slate-200/70"
                        }`}
                      >
                        <img
                          src={doc.avatarThumb}
                          alt={doc.cityName}
                          className="size-8 rounded-full object-cover object-top ring-1 ring-white/50"
                          onError={(e) => {
                            e.target.src = "/images/doctors/doctor1.webp";
                          }}
                        />
                        <span className="mt-1 text-[10px] font-bold truncate max-w-full">
                          {doc.cityName}
                        </span>
                        <span
                          className={`text-[9px] truncate max-w-full ${
                            isSelected ? "text-amber-300 font-semibold" : "text-slate-400"
                          }`}
                        >
                          #1 Ranked
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Consultation Launcher Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctor={activeDoctor}
        initialMode={modalMode}
      />
    </section>
  );
}