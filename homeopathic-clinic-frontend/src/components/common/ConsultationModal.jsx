import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  BadgePercent,
  Calendar,
  CheckCircle2,
  Clock,
  Gift,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  Video,
  X,
} from "lucide-react";

const CLINIC_WHATSAPP = "918767907569";

export default function ConsultationModal({
  isOpen,
  onClose,
  doctor,
  initialMode = "chat", // "chat" | "call" | "clinic"
}) {
  const [mode, setMode] = useState(initialMode);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");
  const [language, setLanguage] = useState("English / Hindi");
  const [stage, setStage] = useState("form"); // "form" | "chatting" | "confirmed"
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (initialMode) {
      setMode(initialMode);
    }
  }, [initialMode]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset state on close
      setStage("form");
      setChatMessages([]);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !doctor) return null;

  const quickConcerns = [
    "PCOD / Hormonal",
    "Skin Allergy & Acne",
    "Hair Fall & Alopecia",
    "Chronic Digestion & Acidity",
    "Asthma & Respiratory",
    "Child Immunity & Cough",
    "Joint Pain & Arthritis",
  ];

  const handleStartConsultation = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number to claim your Free Consultation.");
      return;
    }

    if (mode === "chat") {
      // Launch in-browser Astrotalk-like instant chat session
      setStage("chatting");
      const introMsg = {
        sender: "doctor",
        text: `Namaste ${name}! I am ${doctor.name}. Thank you for reaching out through HealingCare. Your First 5-Minute Free Consultation voucher is active. How can I help you today? Please tell me about your symptoms.`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setChatMessages([introMsg]);
    } else {
      // Video or Clinic confirmed
      setStage("confirmed");
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    const userMsg = {
      sender: "user",
      text: inputMsg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setInputMsg("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const replyMsg = {
        sender: "doctor",
        text: `Thank you for sharing, ${name}. For detailed constitutional analysis and prescribing the right homeopathic remedies without side effects, our senior team can also connect with you directly on WhatsApp (+91 ${phone}). Would you like to continue our consultation on WhatsApp with your prescription?`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setChatMessages((prev) => [...prev, replyMsg]);
    }, 1200);
  };

  const handleConnectWhatsApp = () => {
    const formattedMsg = encodeURIComponent(
      `Hello ${doctor.name},\n\nI want to claim my *FIRST FREE CONSULTATION* via HealingCare.\n\n*Patient Name:* ${name || "Guest"}\n*Phone:* ${phone || "Not specified"}\n*City:* ${doctor.city}\n*Consultation Type:* ${mode === "chat" ? "Free 5-Min Chat" : mode === "call" ? "Free Video Meeting" : "Clinic Visit"}\n*Health Concern:* ${concern || "General Homeopathic Advice"}\n*Preferred Language:* ${language}\n\nPlease connect with me.`
    );
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${formattedMsg}`, "_blank");
  };

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-slate-950/75 backdrop-blur-md"
    >
      {/* Click outside to close backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 -z-10 cursor-pointer"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-xl my-auto overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-200/80 flex flex-col max-h-[92vh] animate-fadeIn">
        {/* Top Header */}
        <div className="relative shrink-0 bg-gradient-to-r from-[#0d3d2c] via-[#145c43] to-[#1c7355] p-5 text-white sm:p-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-4 top-4 z-30 grid size-9 place-items-center rounded-full bg-white/20 text-white transition hover:bg-white/30 active:scale-95 shadow-md"
          >
            <X size={19} />
          </button>

          {/* Doctor Brief */}
          <div className="flex items-center gap-4 pr-10">
            <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl border-2 border-white/20 bg-emerald-950/50 shadow-md sm:size-18">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/doctors/doctor1.webp";
                }}
              />
              {doctor.isOnline && (
                <span
                  title="Online Now"
                  className="absolute bottom-1 right-1 size-3.5 rounded-full border-2 border-white bg-emerald-400"
                />
              )}
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
                  <Star size={11} className="fill-amber-400 text-amber-400" />
                  {doctor.rating} ({doctor.reviewsCount || "1,200+"})
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-200">
                  <MapPin size={11} />
                  {doctor.city} #{doctor.rankInCity || 1}
                </span>
              </div>

              <h2
                id="consultation-modal-title"
                className="mt-1 truncate text-lg font-bold text-white sm:text-xl"
              >
                {doctor.name}
              </h2>

              <p className="truncate text-xs text-emerald-100/80 font-medium">
                {doctor.role} · {doctor.experience}
              </p>
            </div>
          </div>

          {/* Astrotalk-style Promo Voucher Banner */}
          <div className="mt-4 flex items-center justify-between rounded-xl border border-amber-300/40 bg-amber-400/20 px-3 py-2 text-xs font-semibold text-amber-100 shadow-xs">
            <span className="flex items-center gap-1.5 font-bold text-amber-200">
              <Gift size={15} className="animate-bounce text-amber-300" />
              FIRST CONSULTATION IS FREE
            </span>
            <span className="rounded-md bg-amber-400 px-2 py-0.5 text-[11px] font-black text-slate-950">
              100% OFF (₹0)
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 modal-scrollbar">
          {stage === "form" && (
            <form onSubmit={handleStartConsultation} className="space-y-4">
              {/* Consultation Mode Picker */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Select Consultation Mode
                </label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setMode("chat")}
                    className={`flex flex-col items-center gap-1 rounded-2xl border p-3 text-center transition ${
                      mode === "chat"
                        ? "border-[#145c43] bg-emerald-50 text-[#145c43] shadow-sm ring-1 ring-[#145c43]"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <MessageCircle size={20} className={mode === "chat" ? "text-[#145c43]" : "text-slate-400"} />
                    <span className="text-xs font-bold">Live Chat</span>
                    <span className="text-[10px] font-semibold text-emerald-700">5 Mins FREE</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode("call")}
                    className={`flex flex-col items-center gap-1 rounded-2xl border p-3 text-center transition ${
                      mode === "call"
                        ? "border-[#145c43] bg-emerald-50 text-[#145c43] shadow-sm ring-1 ring-[#145c43]"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <Video size={20} className={mode === "call" ? "text-[#145c43]" : "text-slate-400"} />
                    <span className="text-xs font-bold">Video Meet</span>
                    <span className="text-[10px] font-semibold text-emerald-700">Free Session</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode("clinic")}
                    className={`flex flex-col items-center gap-1 rounded-2xl border p-3 text-center transition ${
                      mode === "clinic"
                        ? "border-[#145c43] bg-emerald-50 text-[#145c43] shadow-sm ring-1 ring-[#145c43]"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <Calendar size={20} className={mode === "clinic" ? "text-[#145c43]" : "text-slate-400"} />
                    <span className="text-xs font-bold">Clinic Visit</span>
                    <span className="text-[10px] text-slate-500">{doctor.city} Clinic</span>
                  </button>
                </div>
              </div>

              {/* Patient Info */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Patient Name *
                  </label>
                  <div className="relative mt-1">
                    <User size={16} className="absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-slate-200 py-2.5 pl-9 pr-3 text-sm text-slate-900 outline-none focus:border-[#145c43] focus:ring-2 focus:ring-emerald-700/15"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    WhatsApp Number *
                  </label>
                  <div className="relative mt-1">
                    <Phone size={16} className="absolute left-3 top-3 text-slate-400" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full rounded-xl border border-slate-200 py-2.5 pl-9 pr-3 text-sm text-slate-900 outline-none focus:border-[#145c43] focus:ring-2 focus:ring-emerald-700/15"
                    />
                  </div>
                </div>
              </div>

              {/* Health Issue Quick Tags */}
              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Select Health Concern / Symptoms
                </label>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {quickConcerns.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setConcern(item)}
                      className={`rounded-full px-2.5 py-1 text-xs transition ${
                        concern === item
                          ? "bg-[#145c43] font-semibold text-white"
                          : "border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                  placeholder="Or describe symptoms in short..."
                  className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-[#145c43] focus:ring-2 focus:ring-emerald-700/15"
                />
              </div>

              {/* Language Preference */}
              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Preferred Consultation Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-[#145c43]"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Marathi">Marathi</option>
                  <option value="English / Hindi">English / Hindi (Both)</option>
                </select>
              </div>

              {/* Pricing breakdown like Astrotalk */}
              <div className="rounded-2xl border border-emerald-100 bg-[#f4f9f6] p-3 text-xs">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Regular Consultation Fee</span>
                  <span className="line-through">₹{doctor.originalPrice || 650}</span>
                </div>
                <div className="mt-1 flex items-center justify-between font-semibold text-[#145c43]">
                  <span>New User Welcome Voucher</span>
                  <span>- ₹{doctor.originalPrice || 650} (100% Free)</span>
                </div>
                <div className="mt-2 border-t border-emerald-200/60 pt-2 flex items-center justify-between text-sm font-bold text-slate-900">
                  <span>Amount Payable Today</span>
                  <span className="text-emerald-700">₹0 (FREE)</span>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#145c43] px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-[#0e4532] active:scale-[0.99]"
                >
                  <Sparkles size={17} />
                  <span>
                    {mode === "chat"
                      ? "Start Free Chat Now"
                      : mode === "call"
                      ? "Connect Free Video Meeting"
                      : "Confirm Free Clinic Appointment"}
                  </span>
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </button>

                <p className="mt-2 text-center text-[11px] text-slate-400">
                  🔒 100% Private & Confidential · Verified Doctor Profile
                </p>
              </div>
            </form>
          )}

          {/* Interactive Simulated Astrotalk Chat Room */}
          {stage === "chatting" && (
            <div className="flex flex-col h-[400px]">
              {/* Chat Status Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-slate-800">
                    Live with {doctor.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                  <Clock size={12} />
                  <span>Free Session Active</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto py-3 space-y-3 modal-scrollbar">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${
                      msg.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#145c43] text-white rounded-br-sm"
                          : "bg-slate-100 text-slate-800 rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="mt-1 text-[10px] text-slate-400 px-1">
                      {msg.time}
                    </span>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full w-fit">
                    <span className="size-1.5 rounded-full bg-slate-400 animate-bounce" />
                    <span className="size-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="size-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                    <span>{doctor.name} is typing...</span>
                  </div>
                )}
              </div>

              {/* Fast connect to WhatsApp banner */}
              <div className="mb-2 flex items-center justify-between rounded-xl bg-emerald-50 border border-emerald-200/80 p-2 text-xs">
                <span className="text-emerald-900 font-medium">
                  Want prescriptions & medicine delivery delivered?
                </span>
                <button
                  type="button"
                  onClick={handleConnectWhatsApp}
                  className="rounded-lg bg-[#25d366] px-2.5 py-1 text-xs font-bold text-white shadow-sm hover:bg-[#20ba59]"
                >
                  Open WhatsApp
                </button>
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="flex gap-2 pt-1 border-t border-slate-100">
                <input
                  type="text"
                  value={inputMsg}
                  onChange={(e) => setInputMsg(e.target.value)}
                  placeholder="Type your health question or symptom..."
                  className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#145c43]"
                />
                <button
                  type="submit"
                  className="grid size-10 place-items-center rounded-xl bg-[#145c43] text-white transition hover:bg-[#0e4532]"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          )}

          {/* Confirmed Screen for Call or Clinic */}
          {stage === "confirmed" && (
            <div className="py-6 text-center">
              <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-100 text-[#145c43]">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Your Free Consultation Request is Received!
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-slate-600">
                Dr. {doctor.name}’s clinical coordinator will connect with you at{" "}
                <span className="font-semibold text-slate-900">+91 {phone}</span> within 5–10 minutes for your free video meeting.
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={handleConnectWhatsApp}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 text-sm font-semibold text-white shadow-md hover:bg-[#20ba59]"
                >
                  <MessageCircle size={18} />
                  Continue on WhatsApp Now
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Back to Doctors
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(modalContent, document.body);
}
