import {
  HeartHandshake,
  LockKeyhole,
  MessageSquareHeart,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const benefits = [
  {
    icon: HeartHandshake,
    title: "Patient-first approach",
    text: "Your concerns, history and comfort remain at the center of the consultation.",
  },
  {
    icon: MessageSquareHeart,
    title: "Thoughtful conversations",
    text: "We focus on creating a consultation environment where you can communicate comfortably.",
  },
  {
    icon: Sparkles,
    title: "Personalized experience",
    text: "Your consultation experience is designed around your individual needs.",
  },
  {
    icon: LockKeyhole,
    title: "Respect & privacy",
    text: "Sensitive health conversations should always be handled with care and discretion.",
  },
];

function WhyChooseUs() {
  return (
    <section className="overflow-hidden bg-[#12372a] py-20 text-white sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Why HealingCare"
            title="A more thoughtful healthcare experience."
            description="Modern convenience without losing the human side of healthcare."
          />

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="bg-[#12372a] p-7 transition-colors hover:bg-white/[0.04] sm:p-8"
                >
                  <Icon size={22} className="text-emerald-300" />

                  <h3 className="mt-7 text-lg font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-emerald-50/60">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;