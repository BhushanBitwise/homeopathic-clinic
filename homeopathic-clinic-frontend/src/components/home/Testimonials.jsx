import { Quote, Star } from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { testimonials } from "../../data/testimonials";

function Testimonials() {
  return (
    <section className="bg-[#f8faf8] py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Patient experiences"
          title="A care experience people remember."
          description="Real patient stories will be displayed here once approved for publication."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[1.75rem] border border-slate-900/8 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={14} fill="currentColor" />
                  ))}
                </div>

                <Quote size={22} className="text-emerald-100" />
              </div>

              <p className="mt-7 text-[15px] leading-7 text-slate-600">
                “{testimonial.text}”
              </p>

              <div className="mt-8 border-t border-slate-900/8 pt-5">
                <p className="text-sm font-semibold text-slate-900">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;