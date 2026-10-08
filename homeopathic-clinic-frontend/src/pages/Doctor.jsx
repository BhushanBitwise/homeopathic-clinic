import {
  Award,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

import doctorImage from "../assets/images/doctor.webp";

function Doctor() {
  return (
    <div className="min-h-screen bg-[#f8faf8]">
      <Navbar />

      <main className="pt-[76px]">
        <section className="bg-white py-20 sm:py-28">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

              {/* Doctor Image */}
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/8 bg-[#f8faf8] shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <img
                  src={doctorImage}
                  alt="Homeopathic doctor at the clinic"
                  width="900"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/4.8] h-full w-full object-cover object-center"
                />

                {/* Soft overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/10 via-transparent to-white/5" />
              </div>

              {/* Doctor Information */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Meet the doctor
                </p>

                <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">
                  Dr. Pranita Kanade
                </h1>

                <p className="mt-3 font-medium text-emerald-800">
                  M.D. (Hom), Nutritionist 
                </p>

                <p className="mt-7 max-w-xl text-base leading-7 text-slate-600">
                  A patient-first consultation approach focused on listening,
                  understanding and creating a comfortable healthcare
                  experience.
                </p>

                <div className="mt-9 grid gap-4 sm:grid-cols-3">
                  {[
                    [GraduationCap, "M.D. (Hom)"],
                    [Award, "9+ Years Clinical Experience"],
                    [HeartHandshake, "Personalised, thoughtful care"],
                  ].map(([Icon, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-slate-900/8 bg-[#f8faf8] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-800/15 hover:bg-emerald-50/50"
                    >
                      <Icon
                        size={20}
                        className="text-emerald-800"
                      />

                      <p className="mt-4 text-sm font-semibold text-slate-900">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-9">
                  <Button to="/appointment">
                    Book Consultation
                  </Button>
                </div>
              </div>

            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Doctor;