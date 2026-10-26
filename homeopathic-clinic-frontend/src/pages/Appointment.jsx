import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Gift,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import WhatsAppButton from "../components/common/WhatsAppButton";
import doctors, { featuredCities } from "../data/doctors";

const consultationModes = [
  {
    id: "Free 5-Min Chat",
    title: "Live Chat",
    subtitle: "Instant messaging with doctor",
    badge: "5 Mins FREE",
    icon: MessageCircle,
  },
  {
    id: "Free Video Meeting",
    title: "Video Call Meeting",
    subtitle: "Face-to-face HD consultation",
    badge: "Free 1st Session",
    icon: Video,
  },
  {
    id: "Clinic Visit",
    title: "In-Clinic Visit",
    subtitle: "In-person physical examination",
    badge: "Pune & City Clinics",
    icon: MapPin,
  },
];

const timeSlots = [
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:30 AM",
  "12:00 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
];

const quickConcerns = [
  "PCOD & Irregular Periods",
  "Hair Fall & Dandruff",
  "Chronic Skin Allergy / Eczema",
  "Acidity, Gas & IBS",
  "Asthma & Sinusitis",
  "Child Immunity & Frequent Colds",
  "Joint Pain & Arthritis",
  "Stress, Anxiety & Insomnia",
];

function getDateOptions() {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    dates.push({
      value: d.toISOString().split("T")[0],
      day: i === 0 ? "Today" : d.toLocaleDateString("en-IN", { weekday: "short" }),
      date: d.getDate(),
      month: d.toLocaleDateString("en-IN", { month: "short" }),
    });
  }
  return dates;
}

export default function Appointment() {
  const dates = useMemo(() => getDateOptions(), []);

  const [step, setStep] = useState(1);
  const [selectedCitySlug, setSelectedCitySlug] = useState("pune");
  const [form, setForm] = useState({
    consultationType: "Free Video Meeting",
    doctorId: "pune-dr-pranita-kanade",
    date: dates[0]?.value || "",
    time: "10:30 AM",
    name: "",
    phone: "",
    concern: "",
    language: "English / Hindi",
  });
  const [error, setError] = useState("");

  const cityDoctors = useMemo(() => {
    return doctors.filter((d) => d.citySlug === selectedCitySlug);
  }, [selectedCitySlug]);

  const selectedDoctorObj = useMemo(() => {
    return (
      doctors.find((d) => d.id === form.doctorId) ||
      cityDoctors[0] ||
      doctors[0]
    );
  }, [form.doctorId, cityDoctors]);

  const updateForm = (field, value) => {
    setForm((curr) => ({ ...curr, [field]: value }));
    setError("");
  };

  const nextStep = () => {
    if (step === 1 && !form.consultationType) {
      setError("Please select your consultation mode.");
      return;
    }
    if (step === 2 && (!form.date || !form.time)) {
      setError("Please choose a date and time slot.");
      return;
    }
    if (step === 3) {
      if (!form.name.trim() || !/^[6-9]\d{9}$/.test(form.phone.trim())) {
        setError("Please enter your name and a valid 10-digit Indian WhatsApp mobile number.");
        return;
      }
    }
    setStep((c) => c + 1);
  };

  const prevStep = () => {
    setError("");
    setStep((c) => c - 1);
  };

  const confirmAndLaunchWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello HealingCare,\n\nI want to book my *FIRST FREE CONSULTATION* with *${selectedDoctorObj.name}* (${selectedDoctorObj.city}).\n\n*Patient Name:* ${form.name}\n*Phone:* ${form.phone}\n*Mode:* ${form.consultationType}\n*Date:* ${form.date}\n*Time:* ${form.time}\n*Concern:* ${form.concern || "General Homeopathic Advice"}\n*Preferred Language:* ${form.language}\n\n*Amount to Pay:* ₹0 (Free Voucher Applied)\n\nPlease confirm my slot.`
    );
    window.open(`https://wa.me/918767907569?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8faf8]">
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-20">
        <Container>
          {/* Top Astrotalk-style Voucher Announcement */}
          <div className="mx-auto max-w-3xl mb-8 rounded-3xl border border-amber-300 bg-gradient-to-r from-amber-50 to-emerald-50 p-4 text-xs sm:text-sm font-medium text-amber-950 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-amber-400 text-slate-950 font-bold shrink-0">
                <Gift size={18} />
              </span>
              <div>
                <strong className="block font-bold text-amber-900">
                  New Patient Welcome Voucher Activated
                </strong>
                <span className="text-slate-600">
                  Your first 5-min chat or video consultation with India&apos;s top homeopaths is 100% Free.
                </span>
              </div>
            </div>

            <span className="hidden sm:inline-block rounded-lg bg-amber-400 px-2.5 py-1 text-xs font-black text-slate-950 shrink-0">
              ₹0 PAYABLE
            </span>
          </div>

          <div className="mx-auto max-w-3xl text-center mb-8">
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">
              Book Your{" "}
              <em className="italic font-bold text-[#145c43]">Free Consultation</em>
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Connect with verified top-ranked homeopaths in Pune, Mumbai, Delhi & across India.
            </p>

            {/* Stepper Dots */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    s === step
                      ? "w-8 bg-[#145c43]"
                      : s < step
                      ? "w-5 bg-emerald-700/50"
                      : "w-5 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form Container Card */}
          <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
            {error && (
              <div className="mb-5 rounded-2xl bg-red-50 p-3 text-xs font-semibold text-red-700 border border-red-200">
                {error}
              </div>
            )}

            {/* STEP 1: Choose Mode & Doctor */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    1. Select Consultation Mode
                  </label>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {consultationModes.map((item) => {
                      const Icon = item.icon;
                      const isSelected = form.consultationType === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => updateForm("consultationType", item.id)}
                          className={`flex flex-col items-start p-4 rounded-2xl border text-left transition ${
                            isSelected
                              ? "border-[#145c43] bg-emerald-50/70 ring-2 ring-[#145c43]"
                              : "border-slate-200 bg-white hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span className="grid size-9 place-items-center rounded-xl bg-white text-[#145c43] shadow-xs">
                              <Icon size={18} />
                            </span>
                            <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-extrabold text-amber-900">
                              {item.badge}
                            </span>
                          </div>
                          <span className="mt-3 text-sm font-bold text-slate-900">
                            {item.title}
                          </span>
                          <span className="mt-0.5 text-[11px] text-slate-500">
                            {item.subtitle}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* City & Doctor Selector */}
                <div className="grid gap-4 sm:grid-cols-2 pt-2 border-t border-slate-100">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Select City
                    </label>
                    <select
                      value={selectedCitySlug}
                      onChange={(e) => {
                        setSelectedCitySlug(e.target.value);
                        const firstDoc = doctors.find((d) => d.citySlug === e.target.value);
                        if (firstDoc) updateForm("doctorId", firstDoc.id);
                      }}
                      className="w-full rounded-2xl border border-slate-200 bg-[#f8faf8] py-2.5 px-3 text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:border-[#145c43]"
                    >
                      {featuredCities.map((city) => (
                        <option key={city.slug} value={city.slug}>
                          {city.name} ({city.badge})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Choose Doctor
                    </label>
                    <select
                      value={form.doctorId}
                      onChange={(e) => updateForm("doctorId", e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-[#f8faf8] py-2.5 px-3 text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:border-[#145c43]"
                    >
                      {cityDoctors.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name} · {doc.role?.slice(0, 25)} (Rank #{doc.rankInCity})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Doctor Preview Badge */}
                <div className="rounded-2xl border border-emerald-100 bg-[#f4f9f6] p-3.5 flex items-center gap-3">
                  <img
                    src={selectedDoctorObj.image}
                    alt={selectedDoctorObj.name}
                    className="size-14 rounded-2xl object-cover shrink-0 border border-emerald-200"
                    onError={(e) => {
                      e.target.src = "/images/doctors/doctor1.webp";
                    }}
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-slate-900 text-sm">
                        {selectedDoctorObj.name}
                      </span>
                      <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded font-bold">
                        {selectedDoctorObj.rating}★
                      </span>
                    </div>
                    <p className="text-xs text-emerald-800 font-semibold truncate">
                      {selectedDoctorObj.qualification} · {selectedDoctorObj.city}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate">
                      {selectedDoctorObj.specialization}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#145c43] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#0e4532]"
                >
                  <span>Continue to Date & Time</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}

            {/* STEP 2: Choose Date & Time Slot */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    2. Select Consultation Date
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {dates.map((item) => {
                      const isSelected = form.date === item.value;
                      return (
                        <button
                          key={item.value}
                          type="button"
                          onClick={() => updateForm("date", item.value)}
                          className={`flex flex-col items-center p-2.5 rounded-2xl border text-center transition ${
                            isSelected
                              ? "border-[#145c43] bg-[#145c43] text-white"
                              : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                          }`}
                        >
                          <span className={`text-[10px] font-bold uppercase ${isSelected ? "text-emerald-200" : "text-slate-400"}`}>
                            {item.day}
                          </span>
                          <span className="text-base font-extrabold mt-0.5">
                            {item.date}
                          </span>
                          <span className={`text-[10px] ${isSelected ? "text-emerald-200" : "text-slate-400"}`}>
                            {item.month}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Select Convenient Time Slot
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((slot) => {
                      const isSelected = form.time === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => updateForm("time", slot)}
                          className={`py-2 px-3 rounded-xl border text-xs font-bold transition ${
                            isSelected
                              ? "border-[#145c43] bg-emerald-50 text-[#145c43] ring-1 ring-[#145c43]"
                              : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 rounded-2xl border border-slate-200 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[#145c43] py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#0e4532]"
                  >
                    <span>Patient Details</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Patient Information & Concern */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => updateForm("name", e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-2xl border border-slate-200 bg-[#f8faf8] py-2.5 px-3.5 text-sm text-slate-900 outline-none focus:border-[#145c43] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => updateForm("phone", e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full rounded-2xl border border-slate-200 bg-[#f8faf8] py-2.5 px-3.5 text-sm text-slate-900 outline-none focus:border-[#145c43] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Select Your Health Concern
                  </label>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {quickConcerns.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => updateForm("concern", item)}
                        className={`rounded-full px-2.5 py-1 text-xs transition ${
                          form.concern === item
                            ? "bg-[#145c43] text-white font-bold"
                            : "border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  <textarea
                    rows={2}
                    value={form.concern}
                    onChange={(e) => updateForm("concern", e.target.value)}
                    placeholder="Describe main symptoms, since when you have them, etc..."
                    className="w-full rounded-2xl border border-slate-200 bg-[#f8faf8] p-3 text-sm text-slate-900 outline-none focus:border-[#145c43] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Language
                  </label>
                  <select
                    value={form.language}
                    onChange={(e) => updateForm("language", e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-[#f8faf8] py-2.5 px-3 text-sm text-slate-800 outline-none focus:border-[#145c43]"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Marathi">Marathi</option>
                    <option value="English / Hindi">English / Hindi</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 rounded-2xl border border-slate-200 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[#145c43] py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#0e4532]"
                  >
                    <span>Review & Confirm</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Summary & Confirm */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-[#f8faf8] p-4 text-xs sm:text-sm space-y-3">
                  <div className="flex justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500">Doctor:</span>
                    <span className="font-bold text-slate-900">{selectedDoctorObj.name} ({selectedDoctorObj.city})</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500">Mode:</span>
                    <span className="font-bold text-slate-900">{form.consultationType}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500">Slot:</span>
                    <span className="font-bold text-slate-900">{form.date} at {form.time}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500">Patient:</span>
                    <span className="font-bold text-slate-900">{form.name} (+91 {form.phone})</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500">Concern:</span>
                    <span className="font-bold text-slate-900">{form.concern || "General Homeopathy"}</span>
                  </div>

                  {/* Voucher calculation */}
                  <div className="pt-2 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>Standard Consultation Fee</span>
                      <span className="line-through">₹{selectedDoctorObj.originalPrice || 650}</span>
                    </div>
                    <div className="flex justify-between text-[#145c43] font-bold mt-1">
                      <span>First Consultation Free Voucher</span>
                      <span>- ₹{selectedDoctorObj.originalPrice || 650}</span>
                    </div>
                    <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-200 mt-2">
                      <span>Amount Payable Now</span>
                      <span className="text-[#145c43] text-base">₹0 (FREE)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={confirmAndLaunchWhatsApp}
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#25d366] px-6 text-sm font-bold text-white shadow-lg hover:bg-[#20ba59] active:scale-[0.99]"
                  >
                    <MessageCircle size={18} />
                    <span>Confirm & Connect on WhatsApp (Free)</span>
                  </button>

                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-full text-center text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    Edit details
                  </button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}