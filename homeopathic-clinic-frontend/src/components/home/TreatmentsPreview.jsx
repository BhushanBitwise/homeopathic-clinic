import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { treatments } from "../../data/treatments";

function TreatmentsPreview() {
  return (
    <section className="bg-[#f8faf8] py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Areas of care"
            title="Personalized care for different needs."
            description="Explore the areas where our consultation-led approach can help you better understand your individual concerns."
          />

          <Link
            to="/treatments"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-emerald-800 sm:flex"
          >
            View all treatments
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.slice(0, 8).map((treatment, index) => {
            const Icon = treatment.icon;

            return (
              <Link
                key={treatment.slug}
                to={`/treatments/${treatment.slug}`}
                className="group relative overflow-hidden rounded-[1.5rem] border border-slate-900/8 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-800/15 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex items-start justify-between">
                  <div className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-800">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-700"
                  />
                </div>

                <div className="mt-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
                    {treatment.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {treatment.shortDescription}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <Link
          to="/treatments"
          className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-emerald-800 sm:hidden"
        >
          View all treatments
          <ArrowUpRight size={17} />
        </Link>
      </Container>
    </section>
  );
}

export default TreatmentsPreview;