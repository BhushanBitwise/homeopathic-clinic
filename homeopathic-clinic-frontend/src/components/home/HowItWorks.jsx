import { ArrowRight, CalendarDays, MessageCircle, UserRound } from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const steps = [
  {
    number: "01",
    icon: CalendarDays,
    title: "Choose a consultation",
    description: "Select your preferred consultation type, date and time.",
  },
  {
    number: "02",
    icon: UserRound,
    title: "Share your details",
    description: "Tell us a little about yourself and your concern.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Confirm on WhatsApp",
    description: "Your appointment details are prepared automatically.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Simple process"
          title="From booking to consultation, made easy."
          description="No complicated forms. Just a clear and comfortable appointment experience."
        />

        <div className="relative mt-14 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-[1.75rem] border border-slate-900/8 bg-[#f8faf8] p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#145c43] text-white">
                    <Icon size={21} />
                  </div>

                  <span className="text-3xl font-semibold tracking-[-0.05em] text-slate-200">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-7 top-1/2 z-10 hidden -translate-y-1/2 text-emerald-200 lg:block"
                    size={24}
                  />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;