import {
  ArrowUpRight,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";

import doctorImage from "../../assets/images/doctor2.webp";

function DoctorPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="relative">
            <div className="aspect-[4/4.6] overflow-hidden rounded-[2rem] bg-emerald-50">
              <img
                src={doctorImage}
                alt="Doctor at the homeopathy clinic"
                width="800"
                height="920"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-white bg-white p-4 shadow-xl sm:-right-6">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-800">
                  <Stethoscope size={18} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Qualification
                  </p>

                  <p className="text-sm font-semibold text-slate-900">
                    BHMS
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Meet your doctor"
              title="Care begins with listening."
              description="A consultation should feel personal, comfortable and focused on understanding the individual behind the symptoms."
            />

            <div className="mt-8">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                Dr. Pranita Kanade
              </h3>

              <p className="mt-2 text-sm font-medium text-emerald-800">
                M.D. (Hom), Nutritionist
              </p>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600">
              With a patient-first consultation approach, every visit is
              centered around understanding health history, lifestyle and
              individual concerns.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-900/8 bg-[#f8faf8] p-5">
                <GraduationCap
                  className="text-emerald-800"
                  size={20}
                />

                <p className="mt-4 text-sm font-semibold text-slate-900">
                  9+ Years Clinical Experience
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Dedicated to thoughtful, individualized consultations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-900/8 bg-[#f8faf8] p-5">
                <Stethoscope
                  className="text-emerald-800"
                  size={20}
                />

                <p className="mt-4 text-sm font-semibold text-slate-900">
                  Patient-first care
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  A calm environment where your concerns are heard.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button to="/doctor">
                Meet the Doctor
                <ArrowUpRight size={17} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default DoctorPreview;