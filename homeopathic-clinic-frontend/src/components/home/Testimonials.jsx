import { MapPin, Quote, Sparkles, Star } from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-[#f8faf8] py-20 sm:py-28 border-t border-slate-900/5">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Real Patient Reviews"
          title={
            <>
              Real Stories from Patients{" "}
              <em className="italic font-normal text-[#58745e]">Across India</em>
            </>
          }
          description="Read how our city-wise top rated homeopaths have helped thousands recover naturally from chronic conditions."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-3xl border border-slate-900/8 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-emerald-800/20"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <Star key={index} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800">
                    <MapPin size={11} />
                    {item.city}
                  </span>
                </div>

                <div className="mt-4">
                  <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-700">
                    Treated for: {item.concern}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-400">Verified Patient</p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-semibold text-emerald-800 block">
                    Consulted with
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    {item.doctorName}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}