import {
  HeartHandshake,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";

import clinicImage from "../assets/images/clinic.webp";

const values = [
  {
    icon: HeartHandshake,
    title: "Patient first",
    text: "We create a consultation experience where patients feel heard and respected.",
  },
  {
    icon: Leaf,
    title: "Thoughtful care",
    text: "Every consultation starts with understanding the individual and their context.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & privacy",
    text: "We believe healthcare conversations should always be handled with discretion.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-[#f8faf8]">
      <Navbar />

      <main className="pt-[76px]">
        <section className="bg-white py-20 sm:py-28">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  About HealingCare
                </p>

                <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">
                  Modern convenience with a human approach to care.
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                  Our goal is to make the healthcare journey more comfortable,
                  transparent and patient-friendly from the first interaction.
                </p>
              </div>

              <div className="overflow-hidden rounded-[2rem] bg-emerald-50">
                <img
                  src={clinicImage}
                  alt="HealingCare clinic exterior"
                  width="1000"
                  height="750"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-24">
          <Container>
            <div className="grid gap-5 md:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="rounded-[1.75rem] border border-slate-900/8 bg-white p-7"
                  >
                    <Icon size={24} className="text-emerald-800" />

                    <h2 className="mt-7 text-xl font-semibold text-slate-900">
                      {value.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {value.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;