import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import { createAppointmentMessage, openWhatsApp } from "../utils/whatsapp";

const consultationTypes = [
  "Clinic Visit",
  "Online Consultation",
];

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
];

function getDateOptions() {
  const dates = [];

  for (let i = 1; i <= 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);

    dates.push({
      value: date.toISOString().split("T")[0],
      day: date.toLocaleDateString("en-IN", {
        weekday: "short",
      }),
      date: date.getDate(),
      month: date.toLocaleDateString("en-IN", {
        month: "short",
      }),
    });
  }

  return dates;
}

function Appointment() {
  const dates = useMemo(() => getDateOptions(), []);

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    consultationType: "Clinic Visit",
    date: dates[0]?.value || "",
    time: "",
    name: "",
    phone: "",
    concern: "",
  });

  const [error, setError] = useState("");

  const updateForm = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setError("");
  };

  const nextStep = () => {
    if (step === 1 && !form.consultationType) {
      setError("Please select a consultation type.");
      return;
    }

    if (step === 2 && (!form.date || !form.time)) {
      setError("Please select a date and time.");
      return;
    }

    if (
      step === 3 &&
      (!form.name.trim() ||
        !/^[6-9]\d{9}$/.test(form.phone))
    ) {
      setError(
        "Please enter your name and a valid 10-digit Indian mobile number."
      );
      return;
    }

    setStep((current) => current + 1);
  };

  const previousStep = () => {
    setError("");
    setStep((current) => current - 1);
  };

  const confirmAppointment = () => {
    const message = createAppointmentMessage(form);

    openWhatsApp(message);
  };

  const selectedDate = dates.find(
    (item) => item.value === form.date
  );

  return (
    <div className="min-h-screen bg-[#f8faf8]">
      <Navbar />

      <main className="px-5 pb-20 pt-[120px] sm:px-7">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-800"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Appointment
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Book your consultation.
              </h1>

              <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
                Choose your preferred option and confirm the request directly
                through WhatsApp.
              </p>
            </div>

            {/* Progress */}
            <div className="mt-10 flex items-center gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex flex-1 items-center gap-2">
                  <div
                    className={`grid size-8 shrink-0 place-items-center rounded-full text-xs font-bold ${
                      step >= item
                        ? "bg-[#145c43] text-white"
                        : "bg-white text-slate-400"
                    }`}
                  >
                    {step > item ? <Check size={14} /> : item}
                  </div>

                  {item !== 4 && (
                    <div
                      className={`h-px flex-1 ${
                        step > item
                          ? "bg-emerald-700"
                          : "bg-slate-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Card */}
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-900/8 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
              <div className="p-6 sm:p-9">
                {/* STEP 1 */}
                {step === 1 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Step 1
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                      Choose consultation type
                    </h2>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                      {consultationTypes.map((type) => {
                        const active =
                          form.consultationType === type;

                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              updateForm("consultationType", type)
                            }
                            className={`rounded-2xl border p-5 text-left transition ${
                              active
                                ? "border-emerald-700 bg-emerald-50 ring-2 ring-emerald-700/10"
                                : "border-slate-900/8 hover:border-emerald-700/20"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-slate-900">
                                {type}
                              </span>

                              {active && (
                                <CheckCircle2
                                  size={19}
                                  className="text-emerald-700"
                                />
                              )}
                            </div>

                            <p className="mt-2 text-xs leading-5 text-slate-500">
                              {type === "Clinic Visit"
                                ? "Visit the clinic for an in-person consultation."
                                : "Consult remotely where online consultation is available."}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Step 2
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                      Select date & time
                    </h2>

                    <div className="mt-7">
                      <p className="text-sm font-semibold text-slate-900">
                        Available dates
                      </p>

                      <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-7">
                        {dates.map((date) => {
                          const active = form.date === date.value;

                          return (
                            <button
                              key={date.value}
                              type="button"
                              onClick={() =>
                                updateForm("date", date.value)
                              }
                              className={`rounded-2xl border px-2 py-3 text-center ${
                                active
                                  ? "border-emerald-700 bg-emerald-50 text-emerald-800"
                                  : "border-slate-900/8 bg-white text-slate-600"
                              }`}
                            >
                              <span className="block text-[10px] uppercase">
                                {date.day}
                              </span>

                              <span className="mt-1 block text-lg font-bold">
                                {date.date}
                              </span>

                              <span className="block text-[10px]">
                                {date.month}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-8">
                      <p className="text-sm font-semibold text-slate-900">
                        Available times
                      </p>

                      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {timeSlots.map((time) => {
                          const active = form.time === time;

                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() =>
                                updateForm("time", time)
                              }
                              className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                                active
                                  ? "border-emerald-700 bg-emerald-50 text-emerald-800"
                                  : "border-slate-900/8 text-slate-600 hover:border-emerald-700/20"
                              }`}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Step 3
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                      Your details
                    </h2>

                    <div className="mt-7 space-y-5">
                      <label className="block">
                        <span className="text-sm font-medium text-slate-700">
                          Full name
                        </span>

                        <input
                          value={form.name}
                          onChange={(event) =>
                            updateForm("name", event.target.value)
                          }
                          placeholder="Enter your full name"
                          className="mt-2 h-12 w-full rounded-xl border border-slate-900/10 bg-white px-4 text-sm outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
                        />
                      </label>

                      <label className="block">
                        <span className="text-sm font-medium text-slate-700">
                          Mobile number
                        </span>

                        <input
                          value={form.phone}
                          onChange={(event) =>
                            updateForm(
                              "phone",
                              event.target.value.replace(/\D/g, "").slice(0, 10)
                            )
                          }
                          inputMode="numeric"
                          placeholder="10-digit mobile number"
                          className="mt-2 h-12 w-full rounded-xl border border-slate-900/10 bg-white px-4 text-sm outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
                        />
                      </label>

                      <label className="block">
                        <span className="text-sm font-medium text-slate-700">
                          What would you like help with?
                        </span>

                        <textarea
                          value={form.concern}
                          onChange={(event) =>
                            updateForm("concern", event.target.value)
                          }
                          rows={4}
                          placeholder="Briefly describe your concern..."
                          className="mt-2 w-full resize-none rounded-xl border border-slate-900/10 bg-white p-4 text-sm outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
                        />
                      </label>
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <div>
                    <div className="grid size-14 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                      <Check size={26} />
                    </div>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                      Final step
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                      Review your appointment
                    </h2>

                    <div className="mt-7 divide-y divide-slate-900/8 rounded-2xl border border-slate-900/8">
                      {[
                        ["Name", form.name],
                        ["Phone", form.phone],
                        ["Consultation", form.consultationType],
                        [
                          "Date",
                          selectedDate
                            ? `${selectedDate.day}, ${selectedDate.date} ${selectedDate.month}`
                            : form.date,
                        ],
                        ["Time", form.time],
                        ["Concern", form.concern || "Not specified"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5"
                        >
                          <span className="text-xs text-slate-400">
                            {label}
                          </span>

                          <span className="text-sm font-medium text-slate-900 sm:text-right">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={confirmAppointment}
                      className="mt-7 flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#1f9d61] px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-[#188452]"
                    >
                      <MessageCircle size={19} />
                      Confirm via WhatsApp
                    </button>
                  </div>
                )}

                {error && (
                  <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </p>
                )}

                {/* Controls */}
                {step < 4 && (
                  <div className="mt-9 flex items-center justify-between gap-4 border-t border-slate-900/8 pt-6">
                    <button
                      type="button"
                      onClick={previousStep}
                      disabled={step === 1}
                      className="text-sm font-semibold text-slate-500 disabled:invisible"
                    >
                      Back
                    </button>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#145c43] px-6 text-sm font-semibold text-white transition hover:bg-[#104d39]"
                    >
                      Continue
                      <ArrowRight size={17} />
                    </button>
                  </div>
                )}

                {step === 4 && (
                  <button
                    type="button"
                    onClick={previousStep}
                    className="mt-5 text-sm font-semibold text-slate-500 hover:text-emerald-800"
                  >
                    ← Edit appointment
                  </button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default Appointment;