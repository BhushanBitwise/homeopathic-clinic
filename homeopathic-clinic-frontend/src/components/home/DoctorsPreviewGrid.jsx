import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  CheckCircle2,
  Clock,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  TrendingUp,
  UserCheck,
  Video,
} from "lucide-react";

import Container from "../common/Container";
import ConsultationModal from "../common/ConsultationModal";
import { featuredCities, getTopDoctorsByCity } from "../../data/doctors";

function getInitials(name = "") {
  return name
    .replace(/^Dr\.\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function DoctorsPreviewGrid() {
  const [activeCitySlug, setActiveCitySlug] = useState("pune");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [modalMode, setModalMode] = useState("chat");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cityDoctors = getTopDoctorsByCity(activeCitySlug, 5);
  const currentCityObj =
    featuredCities.find((c) => c.slug === activeCitySlug) || featuredCities[0];

  const handleOpenConsultation = (doctor, mode = "chat") => {
    setSelectedDoctor(doctor);
    setModalMode(mode);
    setIsModalOpen(true);
  };

  return (
    <section
      id="top-doctors"
      className="section-deferred relative overflow-hidden bg-[#0d2a20] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Ambient background glow - GPU Isolated */}
      <div
        aria-hidden="true"
        className="blur-blob pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-400/[0.08] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="blur-blob pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-amber-400/[0.06] blur-3xl"
      />

      <Container className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#9be8c1]">
            <Sparkles size={14} className="text-amber-400" />
            <span>India&apos;s Curated Homeopathy Platform</span>
          </div>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            City-Wise Top 5 Rated{" "}
            <em className="italic font-semibold text-[#9be8c1]">Homeopathic Doctors</em>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            No endless scrolling. HealingCare handpicks and verifies the{" "}
            <strong className="text-white">top 5 homeopaths in every Indian city</strong>.
            Consult online with your <strong className="text-amber-300">First Consultation 100% Free</strong>.
          </p>
        </div>

        {/* Astrotalk-style City Filter Pills */}
        <div className="mt-10 flex items-center justify-center">
          <div className="flex max-w-full items-center gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-md">
            {featuredCities.map((city) => {
              const isActive = city.slug === activeCitySlug;
              return (
                <button
                  key={city.slug}
                  type="button"
                  onClick={() => setActiveCitySlug(city.slug)}
                  className={`group relative flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                    isActive
                      ? "bg-[#1f7053] text-white shadow-lg shadow-emerald-950/40"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <MapPin size={14} className={isActive ? "text-amber-300" : "text-emerald-300/70"} />
                  <span>{city.name}</span>
                  {city.slug === "pune" && (
                    <span className="rounded-full bg-amber-400/20 px-1.5 py-0.2 text-[9px] font-bold text-amber-300">
                      Dr. Pranita
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* City Info Banner */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-xs text-white/75">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              Showing <strong className="text-white">Top 5 Verified Homeopaths</strong> in{" "}
              <strong className="text-[#9be8c1]">{currentCityObj.name}</strong>
            </span>
          </div>
          <div className="flex items-center gap-4 text-emerald-200/80">
            <span className="flex items-center gap-1">
              <CheckCircle2 size={13} className="text-emerald-400" />
              100% MD/BHMS Verified
            </span>
            <span className="hidden sm:inline-block">·</span>
            <span className="flex items-center gap-1 text-amber-300">
              <Sparkles size={13} />
              First 5-Min Free Voucher Applied
            </span>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {cityDoctors.map((doctor, index) => {
            const isFirst = index === 0;
            return (
              <article
                key={doctor.id}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                  isFirst
                    ? "border-amber-400/50 bg-gradient-to-b from-[#144233] to-[#0d2a20] shadow-xl shadow-emerald-950/50 ring-1 ring-amber-400/30"
                    : "border-white/10 bg-white/[0.04] hover:border-emerald-300/30 hover:bg-white/[0.06]"
                }`}
              >
                {/* Top Badge: Rank in city */}
                <div className="relative">
                  {/* Photo area */}
                  <div className="relative aspect-[4/4.6] w-full overflow-hidden bg-[#092219]">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = "/images/doctors/doctor1.webp";
                      }}
                    />

                    {/* Gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d2a20] via-transparent to-transparent opacity-80" />

                    {/* Top Ribbons */}
                    <div className="absolute left-3 top-3 flex flex-col gap-1.5">
                      {isFirst ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-950 shadow-md">
                          <Award size={12} />
                          #1 Top in {doctor.city}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-200 backdrop-blur-sm">
                          #{doctor.rankInCity || index + 1} in {doctor.city}
                        </span>
                      )}
                    </div>

                    {/* Online status indicator */}
                    <div className="absolute right-3 top-3">
                      {doctor.isOnline ? (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-slate-950/80 px-2 py-0.5 text-[10px] font-medium text-emerald-300 backdrop-blur-md">
                          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Online
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/80 px-2 py-0.5 text-[10px] font-medium text-white/60 backdrop-blur-md">
                          <Clock size={10} />
                          Wait 10m
                        </span>
                      )}
                    </div>

                    {/* First Consultation Free Pill */}
                    <div className="absolute bottom-2.5 left-3">
                      <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/40 bg-amber-400/95 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-slate-950 shadow-sm">
                        <Sparkles size={11} className="fill-slate-950" />
                        First Chat Free
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  {/* Rating & Consultations count */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 font-bold text-amber-300">
                      <Star size={13} className="fill-amber-400 text-amber-400" />
                      {doctor.rating}
                      <span className="font-normal text-white/50">
                        ({doctor.reviewsCount || "980+"})
                      </span>
                    </span>

                    <span className="text-[11px] font-medium text-emerald-300/90">
                      {doctor.totalConsultations} consultations
                    </span>
                  </div>

                  {/* Doctor Name & Degree */}
                  <div className="mt-2.5">
                    <h3 className="text-base font-semibold text-white group-hover:text-[#9be8c1] transition-colors sm:text-lg">
                      {doctor.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-white/60 truncate">
                      {doctor.qualification}
                    </p>
                  </div>

                  {/* Specialty */}
                  <div className="mt-2.5">
                    <p className="line-clamp-2 text-xs leading-relaxed text-white/80">
                      {doctor.specialization}
                    </p>
                  </div>

                  {/* Experience & Languages */}
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-white/60">
                    <span className="rounded-md bg-white/10 px-2 py-0.5 text-white/90 font-medium">
                      {doctor.experience}
                    </span>
                    <span className="truncate">
                      {doctor.languages?.slice(0, 2).join(", ")}
                    </span>
                  </div>

                  {/* Pricing tag like Astrotalk */}
                  <div className="mt-4 border-t border-white/10 pt-3">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[10px] text-white/50 block">Consultation</span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-amber-300 text-sm">FREE</span>
                          <span className="text-[11px] line-through text-white/40">
                            ₹{doctor.originalPrice || 650}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] text-white/50">
                        then ₹{doctor.chatPrice || 15}/min
                      </span>
                    </div>

                    {/* Astrotalk Action Buttons: Chat & Call/Meet */}
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenConsultation(doctor, "chat")}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-400/30 bg-emerald-500/20 py-2.5 text-xs font-semibold text-[#9be8c1] transition hover:bg-[#145c43] hover:text-white active:scale-95"
                      >
                        <MessageCircle size={14} />
                        <span>Chat</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleOpenConsultation(doctor, "call")}
                        className="flex items-center justify-center gap-1.5 rounded-xl bg-white py-2.5 text-xs font-bold text-[#0d2a20] transition hover:bg-emerald-100 active:scale-95 shadow-sm"
                      >
                        <Video size={14} />
                        <span>Meeting</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA & Explore all cities */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/15 bg-white/[0.04] p-6 text-center sm:flex-row sm:text-left">
          <div>
            <h4 className="text-base font-semibold text-white sm:text-lg">
              Looking for top homeopathic specialists in other Indian cities?
            </h4>
            <p className="mt-1 text-xs text-white/60 sm:text-sm">
              We cover Pune, Mumbai, Delhi, Bengaluru, Hyderabad, Kolkata, Chennai, Ahmedabad, and 30+ more cities.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              to="/doctor"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1f7053] px-6 text-sm font-semibold text-white shadow-md transition hover:bg-[#175942]"
            >
              <span>View All India Doctors</span>
              <span className="text-base">↗</span>
            </Link>
          </div>
        </div>
      </Container>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctor={selectedDoctor}
        initialMode={modalMode}
      />
    </section>
  );
}
