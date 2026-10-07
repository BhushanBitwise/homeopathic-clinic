import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { treatments } from "../data/treatments";

function TreatmentDetails() {
  const { slug } = useParams();

  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    return (
      <div className="min-h-screen bg-[#f8faf8]">
        <Navbar />

        <main className="grid min-h-[70vh] place-items-center px-5 pt-[76px]">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-slate-950">
              Treatment not found
            </h1>

            <Link
              to="/treatments"
              className="mt-6 inline-flex text-sm font-semibold text-emerald-800"
            >
              Back to treatments
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  const Icon = treatment.icon;

  return (
    <div className="min-h-screen bg-[#f8faf8]">
      <Navbar />

      <main className="pt-[76px]">
        <section className="bg-white py-20 sm:py-28">
          <Container>
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-emerald-800"
            >
              <ArrowLeft size={16} />
              All treatments
            </Link>

            <div className="mt-12 grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <div className="grid size-16 place-items-center rounded-2xl bg-emerald-50 text-emerald-800">
                  <Icon size={28} />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Area of care
                </p>

                <h1 className="mt-3 text-5xl font-semibold tracking-[-0.05em] text-slate-950">
                  {treatment.title}
                </h1>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  {treatment.description}
                </p>

                <div className="mt-9 space-y-4">
                  {[
                    "Personalized consultation",
                    "Detailed health discussion",
                    "Individual care approach",
                    "Follow-up guidance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2
                        size={19}
                        className="text-emerald-700"
                      />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button to="/appointment">
                    Book a Consultation
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

export default TreatmentDetails;