import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Check,
  CheckCircle2,
  Clock,
  Clock3,
  Gift,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Video,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import ConsultationModal from "../components/common/ConsultationModal";

import { getLocationBySlug, locations } from "../data/locations";
import { getTopDoctorsByCity } from "../data/doctors";

export default function LocationDetails() {
  const { stateSlug, citySlug } = useParams();
  const location = getLocationBySlug(stateSlug, citySlug);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [modalMode, setModalMode] = useState("chat");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cityDoctors = getTopDoctorsByCity(citySlug || "pune", 5);

  const handleOpenConsultation = (doctor, mode = "chat") => {
    setSelectedDoctor(doctor);
    setModalMode(mode);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (!location) {
      document.title = "Location Not Found | HealingCare";
      return;
    }

    document.title = `Top 5 Homeopathic Doctors in ${location.city} | HealingCare Free Consultation`;

    const description = `Find and consult the top 5 verified homeopathic doctors in ${location.city}, ${location.state}. First consultation is 100% Free on HealingCare.`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, [location]);

  if (!location) {
    return (
      <div className="min-h-screen bg-[#f8faf8]">
        <Navbar />
        <main className="grid min-h-[70vh] place-items-center px-6 pt-24">
          <div className="max-w-lg text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-800">
              Location
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              City not found
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              The city you are looking for is not listed yet.
            </p>
            <div className="mt-7">
              <Button to="/locations">Explore all cities</Button>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  const nearbyLocations = locations
    .filter(
      (item) => item.slug !== location.slug && item.state === location.state
    )
    .slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hello HealingCare,\n\nI am looking for the Top Homeopathic Doctor in ${location.city}, ${location.state} and would like to claim my FIRST FREE CONSULTATION.`
  );

  const whatsappUrl = `https://wa.me/918767907569?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8faf8]">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Breadcrumb & City Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f4f9f6] border-b border-slate-200/80 py-12 sm:py-16">
          <div className="absolute right-[-100px] top-10 -z-10 size-[380px] rounded-full bg-emerald-100/40 blur-3xl" />

          <Container>
            <Link
              to="/locations"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#145c43] transition mb-6"
            >
              <ArrowLeft size={15} />
              <span>Back to all cities</span>
            </Link>

            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/10 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#145c43] shadow-xs">
                  <MapPin size={13} />
                  <span>{location.city}, {location.state}</span>
                </div>

                <h1 className="mt-5 font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950">
                  Top 5 Homeopathic Doctors in{" "}
                  <em className="italic font-bold text-[#145c43]">{location.city}</em>
                </h1>

                <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {location.description}
                </p>

                {/* Offer Callout */}
                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-3 text-xs font-medium text-amber-900 max-w-lg">
                  <Gift size={18} className="text-amber-600 shrink-0" />
                  <span>
                    <strong>First 5-Min Consultation is 100% Free</strong> with any verified {location.city} doctor.
                  </span>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="#city-top-doctors"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#145c43] px-6 text-sm font-semibold text-white shadow-md hover:bg-[#0e4532]"
                  >
                    <span>View Top 5 Doctors</span>
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 shadow-xs hover:bg-slate-50"
                  >
                    <MessageCircle size={17} className="text-[#25d366]" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>

              {/* City Features Card */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <Sparkles size={16} className="text-amber-500" />
                  <span>HealingCare Standard in {location.city}</span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-slate-950">
                  Why patients in {location.city} trust HealingCare
                </h3>

                <div className="mt-6 space-y-3.5">
                  {location.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#145c43]">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#145c43]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>Express doorstep medicine delivery to all pincodes in {location.city}</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* City's Top 5 Doctors Section */}
        <section id="city-top-doctors" className="py-14 sm:py-20 bg-white">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#145c43]">
                  Verified Specialists
                </span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Meet the Top 5 Doctors for {location.city}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-500">
                  Handpicked MD & senior homeopathic consultants serving {location.city}.
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-300 px-3 py-1 text-xs font-bold text-amber-900 w-fit">
                <Gift size={13} className="text-amber-600" />
                First Consultation Free
              </span>
            </div>

            {/* Doctor Cards Grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {cityDoctors.map((doc, idx) => {
                const isFirst = idx === 0;
                return (
                  <article
                    key={doc.id}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      isFirst
                        ? "border-amber-400 shadow-md ring-1 ring-amber-400/30"
                        : "border-slate-200"
                    }`}
                  >
                    <div>
                      {/* Photo */}
                      <div className="relative aspect-[4/3.8] overflow-hidden bg-slate-100">
                        <img
                          src={doc.image}
                          alt={doc.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.target.src = "/images/doctors/doctor1.webp";
                          }}
                        />

                        {/* Top Rank Badge */}
                        <div className="absolute left-3 top-3">
                          {isFirst ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-extrabold text-slate-950 shadow-md">
                              <Award size={11} />
                              #1 in {location.city}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-0.5 text-[10px] font-semibold text-emerald-200">
                              #{doc.rankInCity || idx + 1}
                            </span>
                          )}
                        </div>

                        {/* Online Indicator */}
                        <div className="absolute right-3 top-3">
                          <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-0.5 text-[10px] text-emerald-300 backdrop-blur-md">
                            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {doc.isOnline ? "Online" : "Wait 5m"}
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-4">
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center gap-1 font-bold text-amber-500">
                            <Star size={12} className="fill-amber-400 text-amber-400" />
                            {doc.rating}
                          </span>
                          <span className="text-[11px] text-slate-400">
                            {doc.totalConsultations}
                          </span>
                        </div>

                        <h3 className="mt-2 text-base font-bold text-slate-950 group-hover:text-[#145c43] transition">
                          {doc.name}
                        </h3>
                        <p className="text-xs font-semibold text-emerald-800 truncate">
                          {doc.qualification}
                        </p>
                        <p className="mt-1 text-xs text-slate-500 line-clamp-1">
                          {doc.role}
                        </p>
                        <p className="mt-2 text-xs text-slate-600 line-clamp-2 bg-[#f8faf8] p-2 rounded-xl">
                          {doc.specialization}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Consultation trigger */}
                    <div className="p-4 pt-0">
                      <div className="border-t border-slate-100 pt-3">
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="font-extrabold text-[#145c43]">FREE (₹0)</span>
                          <span className="text-[10px] line-through text-slate-400">₹{doc.originalPrice || 650}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleOpenConsultation(doc, "chat")}
                            className="flex items-center justify-center gap-1 rounded-xl border border-emerald-800/20 bg-emerald-50 py-2 text-xs font-bold text-[#145c43] hover:bg-[#145c43] hover:text-white transition"
                          >
                            <MessageCircle size={13} />
                            <span>Chat</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleOpenConsultation(doc, "call")}
                            className="flex items-center justify-center gap-1 rounded-xl bg-[#145c43] py-2 text-xs font-bold text-white hover:bg-[#0e4532] transition"
                          >
                            <Video size={13} />
                            <span>Meet</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Nearby Cities */}
        {nearbyLocations.length > 0 && (
          <section className="py-14 sm:py-20 border-t border-slate-200/80">
            <Container>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Explore Other Cities
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    More Locations in {location.state}
                  </h3>
                </div>

                <Link
                  to="/locations"
                  className="text-xs sm:text-sm font-bold text-[#145c43] hover:underline"
                >
                  View all Indian cities →
                </Link>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {nearbyLocations.map((item) => (
                  <Link
                    key={item.slug}
                    to={item.path}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <MapPin size={17} className="text-[#145c43]" />
                      <ArrowUpRight size={15} className="text-slate-300 group-hover:text-[#145c43]" />
                    </div>
                    <h4 className="mt-4 font-bold text-slate-900">{item.city}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Top 5 Doctors Available</p>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}
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