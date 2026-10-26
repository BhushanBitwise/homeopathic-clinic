import { memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  CheckCircle2,
  Clock,
  Gift,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Sparkles,
  Star,
  Video,
  X,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import Container from "../components/common/Container";
import ConsultationModal from "../components/common/ConsultationModal";

import doctors, { featuredCities } from "../data/doctors";

const selectClass =
  "min-h-11 w-full min-w-0 rounded-2xl border border-slate-200 bg-[#f8faf8] px-3.5 text-xs sm:text-sm font-semibold text-slate-700 outline-none transition focus:border-[#145c43] focus:bg-white focus:ring-2 focus:ring-emerald-700/10";

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

const DoctorMarketplaceCard = memo(function DoctorMarketplaceCard({
  doctor,
  onConsult,
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const isTopDoctor = doctor.rankInCity === 1;

  return (
    <article
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isTopDoctor
          ? "border-amber-400/60 shadow-md ring-1 ring-amber-400/30"
          : "border-slate-200/80 hover:border-emerald-700/30 shadow-xs"
      }`}
    >
      <div>
        {/* Top Portrait & Ribbons */}
        <div className="relative aspect-[4/3.8] overflow-hidden bg-slate-100">
          {!imageFailed && doctor.image ? (
            <img
              src={doctor.image}
              alt={doctor.name}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-emerald-900 to-teal-950 text-white">
              <span className="grid size-14 place-items-center rounded-full bg-white/10 text-xl font-bold">
                {getInitials(doctor.name)}
              </span>
            </div>
          )}

          {/* Top Ribbons */}
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {isTopDoctor ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
                <Award size={12} />
                #1 in {doctor.city}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/75 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-200 backdrop-blur-sm">
                #{doctor.rankInCity || 1} in {doctor.city}
              </span>
            )}
          </div>

          {/* Online status indicator */}
          <div className="absolute right-3 top-3">
            {doctor.isOnline ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-slate-950/80 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300 backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Online
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/80 px-2 py-0.5 text-[10px] font-medium text-white/60 backdrop-blur-md">
                <Clock size={10} />
                Wait {doctor.waitMinutes || 10}m
              </span>
            )}
          </div>

          {/* Free 1st consultation voucher badge */}
          <div className="absolute bottom-2.5 left-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-slate-950 shadow-sm">
              <Sparkles size={11} className="fill-slate-950" />
              1st 5-Min Free
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5">
          {/* Rating, Consultations count & City */}
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1 font-bold text-amber-500">
              <Star size={13} className="fill-amber-400 text-amber-400" />
              {doctor.rating}
              <span className="font-normal text-slate-400">
                ({doctor.reviewsCount || "1,200+"})
              </span>
            </span>

            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800">
              <MapPin size={11} />
              {doctor.city}
            </span>
          </div>

          {/* Doctor Name & Degree */}
          <div className="mt-2.5">
            <h3 className="text-lg font-bold tracking-tight text-slate-950 group-hover:text-[#145c43] transition-colors">
              {doctor.name}
            </h3>
            <p className="text-xs font-semibold text-emerald-800 truncate">
              {doctor.qualification}
            </p>
          </div>

          {/* Role / Title */}
          <p className="mt-1 text-xs text-slate-500 line-clamp-1">
            {doctor.role}
          </p>

          {/* Specialization snippet */}
          <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2 bg-[#f8faf8] p-2 rounded-xl border border-slate-100">
            {doctor.specialization}
          </p>

          {/* Experience, Consults & Languages */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
            <span className="rounded-md bg-emerald-50 px-2 py-0.5 font-bold text-emerald-900 border border-emerald-100">
              {doctor.experience}
            </span>
            <span>·</span>
            <span>{doctor.totalConsultations} consults</span>
          </div>

          <div className="mt-2 flex items-center gap-1 text-[11px] text-slate-500 truncate">
            <Languages size={12} className="shrink-0 text-slate-400" />
            <span className="truncate">{doctor.languages?.join(", ")}</span>
          </div>
        </div>
      </div>

      {/* Pricing & Astrotalk Actions */}
      <div className="p-4 sm:p-5 pt-0">
        <div className="border-t border-slate-100 pt-3">
          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Session Fee
              </span>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-[#145c43] text-sm">FREE (₹0)</span>
                <span className="text-[11px] line-through text-slate-400">
                  ₹{doctor.originalPrice || 650}
                </span>
              </div>
            </div>
            <span className="text-[11px] text-slate-500">
              then ₹{doctor.chatPrice || 15}/min
            </span>
          </div>

          {/* Actions: Chat & Video */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onConsult(doctor, "chat")}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-800/20 bg-emerald-50 py-2.5 text-xs font-bold text-[#145c43] transition hover:bg-[#145c43] hover:text-white active:scale-95"
            >
              <MessageCircle size={14} />
              <span>Chat Free</span>
            </button>

            <button
              type="button"
              onClick={() => onConsult(doctor, "call")}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-[#145c43] py-2.5 text-xs font-bold text-white transition hover:bg-[#0e4532] active:scale-95 shadow-xs"
            >
              <Video size={14} />
              <span>Video Meet</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
});

export default function Doctor() {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [specialtyFilter, setSpecialtyFilter] = useState("all");
  const [onlyOnline, setOnlyOnline] = useState(false);
  const [sortBy, setSortBy] = useState("rating");

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [modalMode, setModalMode] = useState("chat");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenConsultation = (doctor, mode = "chat") => {
    setSelectedDoctor(doctor);
    setModalMode(mode);
    setIsModalOpen(true);
  };

  // Extract all unique specialties
  const specialties = useMemo(() => {
    const set = new Set();
    doctors.forEach((d) => {
      d.specialties?.forEach((s) => set.add(s));
    });
    return Array.from(set).sort();
  }, []);

  // Filtered & Sorted Doctors
  const filteredDoctors = useMemo(() => {
    const q = search.trim().toLowerCase();

    const result = doctors.filter((doc) => {
      // City filter
      if (selectedCity !== "all" && doc.citySlug !== selectedCity) {
        return false;
      }

      // Online filter
      if (onlyOnline && !doc.isOnline) {
        return false;
      }

      // Specialty filter
      if (
        specialtyFilter !== "all" &&
        !doc.specialties?.some((s) =>
          s.toLowerCase().includes(specialtyFilter.toLowerCase())
        )
      ) {
        return false;
      }

      // Search query
      if (q) {
        const text = [
          doc.name,
          doc.city,
          doc.qualification,
          doc.role,
          doc.specialization,
          ...(doc.specialties || []),
        ]
          .join(" ")
          .toLowerCase();

        if (!text.includes(q)) return false;
      }

      return true;
    });

    // Sorting
    return result.sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      if (sortBy === "experience") {
        return (b.experienceYears || 0) - (a.experienceYears || 0);
      }
      if (sortBy === "cityRank") {
        return (a.rankInCity || 10) - (b.rankInCity || 10);
      }
      return (a.name || "").localeCompare(b.name || "");
    });
  }, [search, selectedCity, specialtyFilter, onlyOnline, sortBy]);

  const resetFilters = () => {
    setSearch("");
    setSelectedCity("all");
    setSpecialtyFilter("all");
    setOnlyOnline(false);
    setSortBy("rating");
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8faf8]">
      <Navbar />

      <main className="pt-20 sm:pt-24">
        {/* Header Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f4f9f6] border-b border-slate-200/80 py-12 sm:py-16">
          <Container>
            {/* Offer Callout */}
            <div className="mx-auto max-w-fit flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-900 shadow-xs mb-4">
              <Gift size={15} className="text-amber-600 animate-bounce" />
              <span>Launch Offer: First 5-Minute Consultation is 100% FREE (₹0)</span>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950">
                India&apos;s Top 5 Homeopaths{" "}
                <em className="italic font-bold text-[#145c43]">by City</em>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Find the highest-rated homeopathic doctors in Pune (featuring Dr. Pranita Kanade), Mumbai, Delhi NCR, Bengaluru, Hyderabad, Kolkata, and Chennai. Chat or take a video call now.
              </p>
            </div>

            {/* Astrotalk-style City Filter Quick Pills */}
            <div className="mt-8 flex items-center justify-center">
              <div className="flex max-w-full items-center gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
                <button
                  type="button"
                  onClick={() => setSelectedCity("all")}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                    selectedCity === "all"
                      ? "bg-[#145c43] text-white shadow-xs"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  All Cities
                </button>
                {featuredCities.map((c) => (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => setSelectedCity(c.slug)}
                    className={`rounded-xl px-4 py-2 text-xs font-bold transition flex items-center gap-1.5 shrink-0 ${
                      selectedCity === c.slug
                        ? "bg-[#145c43] text-white shadow-xs"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <span>{c.name}</span>
                    {c.slug === "pune" && (
                      <span className="rounded bg-amber-400 px-1 py-0.2 text-[9px] font-extrabold text-slate-950">
                        Dr. Pranita
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Filter Toolbar */}
        <section className="py-6 sm:py-8">
          <Container>
            <div className="rounded-3xl border border-slate-200/90 bg-white p-4 shadow-sm sm:p-5">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {/* Search box */}
                <div className="relative">
                  <Search size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search doctor, city, concern..."
                    className="w-full rounded-2xl border border-slate-200 bg-[#f8faf8] py-2.5 pl-10 pr-8 text-xs sm:text-sm font-medium text-slate-900 outline-none transition focus:border-[#145c43] focus:bg-white"
                  />
                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-700"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                {/* Specialty dropdown */}
                <div>
                  <select
                    value={specialtyFilter}
                    onChange={(e) => setSpecialtyFilter(e.target.value)}
                    className={selectClass}
                  >
                    <option value="all">All Specialties</option>
                    {specialties.map((spec) => (
                      <option key={spec} value={spec}>
                        {spec}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort dropdown */}
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={selectClass}
                  >
                    <option value="rating">Highest Rated (4.9★ first)</option>
                    <option value="cityRank">City Rank (#1 first)</option>
                    <option value="experience">Experience (Years)</option>
                    <option value="name">Doctor Name (A–Z)</option>
                  </select>
                </div>

                {/* Online toggle */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-[#f8faf8] px-4 py-2">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    Online Now Only
                  </span>
                  <input
                    type="checkbox"
                    checked={onlyOnline}
                    onChange={(e) => setOnlyOnline(e.target.checked)}
                    className="size-4 accent-[#145c43] cursor-pointer"
                  />
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3 text-xs text-slate-500">
                <p>
                  Showing <strong className="text-slate-900 font-bold">{filteredDoctors.length}</strong> top-rated homeopathic doctors
                  {selectedCity !== "all" && (
                    <span> in <strong className="text-[#145c43] capitalize">{selectedCity}</strong></span>
                  )}
                </p>

                {(search || selectedCity !== "all" || specialtyFilter !== "all" || onlyOnline) && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="font-bold text-[#145c43] hover:underline"
                  >
                    Reset all filters
                  </button>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Doctors Grid */}
        <section className="pb-20 sm:pb-28">
          <Container>
            {filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredDoctors.map((doc) => (
                  <DoctorMarketplaceCard
                    key={doc.id}
                    doctor={doc}
                    onConsult={handleOpenConsultation}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center">
                <Search size={32} className="mx-auto text-slate-300" />
                <h3 className="mt-3 text-lg font-bold text-slate-800">No doctors match your criteria</h3>
                <p className="mt-1 text-xs text-slate-500">Try changing the city or resetting filters.</p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-4 rounded-full bg-[#145c43] px-5 py-2 text-xs font-bold text-white"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctor={selectedDoctor}
        initialMode={modalMode}
      />
    </div>
  );
}
