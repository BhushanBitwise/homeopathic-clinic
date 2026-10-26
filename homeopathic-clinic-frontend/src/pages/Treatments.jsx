import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import { treatments } from "../data/treatments";

function Treatments() {
  return (
    <div className="min-h-screen bg-[#f8faf8]">
      <Navbar />

      <main className="pt-20 sm:pt-24">
        <section className="border-b border-slate-900/8 bg-white py-16 sm:py-24">
          <Container>
            <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#145c43]">
              <span className="w-7 h-[2px] bg-[#145c43]" />
              <span>Areas of care</span>
            </div>

            <h1 className="mt-4 max-w-3xl font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950">
              Personalized care for{" "}
              <em className="italic font-bold text-[#145c43]">different needs</em>.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore our consultation areas and learn more about the
              patient-first approach.
            </p>
          </Container>
        </section>

        <section className="py-16 sm:py-24">
          <Container>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {treatments.map((treatment) => {
                const Icon = treatment.icon;

                return (
                  <Link
                    key={treatment.slug}
                    to={`/treatments/${treatment.slug}`}
                    className="group rounded-[1.75rem] border border-slate-900/8 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="grid size-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-800">
                        <Icon size={21} />
                      </div>

                      <ArrowRight
                        size={18}
                        className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-emerald-700"
                      />
                    </div>

                    <h2 className="mt-8 text-xl font-semibold text-slate-900">
                      {treatment.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {treatment.shortDescription}
                    </p>
                  </Link>
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

export default Treatments;