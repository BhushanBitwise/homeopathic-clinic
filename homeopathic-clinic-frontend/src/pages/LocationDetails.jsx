import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

import { getLocationBySlug, locations } from "../data/locations";

function LocationDetails() {
  const { stateSlug, citySlug } = useParams();

  const location = getLocationBySlug(stateSlug, citySlug);

  useEffect(() => {
    if (!location) {
      document.title = "Location Not Found | HealingCare";
      return;
    }

    document.title = `Homeopathy Consultation in ${location.city} | HealingCare`;

    const description = `Explore personalized homeopathy consultation support for patients in ${location.city}, ${location.state}.`;

    let meta = document.querySelector(
      'meta[name="description"]'
    );

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
              Location not found
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              The city you are looking for is not available yet.
            </p>

            <div className="mt-7">
              <Button to="/locations">
                Explore all locations
              </Button>
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
      (item) =>
        item.slug !== location.slug &&
        item.state === location.state
    )
    .slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hello HealingCare,

I am from ${location.city}, ${location.state} and would like to know more about a homeopathy consultation.`
  );

  const whatsappUrl = `https://wa.me/918767907569?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8faf8]">
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden pt-32 sm:pt-40">
          <div className="absolute right-[-120px] top-20 -z-10 size-[420px] rounded-full bg-emerald-100/50 blur-3xl" />

          <Container>
            <Link
              to="/locations"
              className="inline-flex min-h-11 items-center gap-2 rounded-full px-2 text-sm font-semibold text-slate-500 transition-colors hover:text-emerald-800"
            >
              <ArrowLeft size={16} />
              All locations
            </Link>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800 shadow-sm">
                  <MapPin size={14} />
                  {location.city}, {location.state}
                </div>

                <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
                  Homeopathy consultation
                  <span className="block text-emerald-800">
                    in {location.city}.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  {location.description}
                </p>

                {/* CTA BUTTONS */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    to="/appointment"
                    variant="primary"
                  >
                    Book an appointment
                  </Button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-800/20 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/30 focus-visible:ring-offset-2"
                  >
                    <MessageCircle size={17} />

                    <span>Ask on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right card */}
              <div className="rounded-[2rem] border border-slate-900/8 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-8">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                  <Sparkles size={21} />
                </div>

                <h2 className="mt-6 text-xl font-semibold text-slate-950">
                  A thoughtful consultation experience
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Your consultation starts with understanding your
                  individual concerns rather than taking a one-size-fits-all
                  approach.
                </p>

                <div className="mt-7 space-y-4">
                  {location.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-800">
                        <Check size={14} />
                      </span>

                      <span className="text-sm font-medium leading-6 text-slate-700">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            BENEFITS
        ====================================================== */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-900/8 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                  <ShieldCheck size={20} />
                </div>

                <h3 className="mt-5 font-semibold text-slate-950">
                  Personalized care
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Consultation is centered around your individual
                  symptoms, concerns and overall wellbeing.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-900/8 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                  <Clock3 size={20} />
                </div>

                <h3 className="mt-5 font-semibold text-slate-950">
                  Convenient appointments
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Choose a suitable consultation time and connect
                  through the clinic's appointment flow.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-900/8 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                  <MessageCircle size={20} />
                </div>

                <h3 className="mt-5 font-semibold text-slate-950">
                  Easy communication
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Get in touch with the clinic through WhatsApp for
                  appointment-related questions.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            WHY HEALINGCARE
        ====================================================== */}
        <section className="border-y border-slate-900/5 bg-white py-20 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-800">
                  Why HealingCare
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
                  A care experience designed around the patient.
                </h2>
              </div>

              <div className="space-y-6">
                <div className="border-b border-slate-900/8 pb-6">
                  <h3 className="font-semibold text-slate-950">
                    Understand first
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    The consultation begins by understanding the
                    patient's concern, symptoms and relevant context.
                  </p>
                </div>

                <div className="border-b border-slate-900/8 pb-6">
                  <h3 className="font-semibold text-slate-950">
                    Personalized guidance
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Recommendations are approached around the
                    individual's needs instead of using a generic
                    experience for everyone.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    Continued support
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Follow-up communication helps patients continue
                    their care journey with clarity.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="rounded-[2rem] bg-[#12372a] px-6 py-12 text-white sm:px-12 sm:py-16">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-200">
                    {location.city}
                  </p>

                  <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                    Ready to discuss your health concern?
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-emerald-50/70">
                    Book a consultation or contact the clinic directly
                    through WhatsApp.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  {/* WORKING WHITE BUTTON */}
                  <Button
                    to="/appointment"
                    variant="light"
                  >
                    Book appointment
                  </Button>

                  {/* WORKING OUTLINE BUTTON */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#12372a]"
                  >
                    <MessageCircle size={17} />

                    <span>WhatsApp</span>

                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            NEARBY LOCATIONS
        ====================================================== */}
        {nearbyLocations.length > 0 && (
          <section className="pb-20 sm:pb-24">
            <Container>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-800">
                    Explore nearby
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    More locations in {location.state}
                  </h2>
                </div>

                <Link
                  to="/locations"
                  className="hidden min-h-11 items-center gap-2 rounded-full px-2 text-sm font-semibold text-emerald-800 sm:inline-flex"
                >
                  View all
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {nearbyLocations.map((item) => (
                  <Link
                    key={item.slug}
                    to={item.path}
                    className="group rounded-2xl border border-slate-900/8 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <MapPin
                        size={18}
                        className="text-emerald-800"
                      />

                      <ArrowUpRight
                        size={16}
                        className="text-slate-300 transition group-hover:text-emerald-700"
                      />
                    </div>

                    <h3 className="mt-5 font-semibold text-slate-950">
                      {item.city}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.region}
                    </p>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}

export default LocationDetails;