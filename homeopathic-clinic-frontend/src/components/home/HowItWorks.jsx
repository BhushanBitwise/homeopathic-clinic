import { ArrowRight, Gift, MapPin, MessageCircle, PackageCheck, Sparkles, Video } from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Choose City & Top 5 Doctor",
    description:
      "Select Pune, Mumbai, Delhi, Bengaluru or your city to view verified, top-ranked homeopathic doctors.",
  },
  {
    number: "02",
    icon: Gift,
    title: "Claim First Free Consultation",
    description:
      "Astrotalk-style 100% Free initial consultation voucher. No advance fees or hidden commitments.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Instant Live Chat or Video Meet",
    description:
      "Discuss your chronic illness, skin, PCOD or child health symptoms directly with your doctor in private.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Medicine Delivery & Follow-up",
    description:
      "Receive certified, sealed homeopathic remedies delivered to your doorstep with weekly WhatsApp check-ins.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How HealingCare Works"
          title={
            <>
              From City Search to{" "}
              <em className="italic font-normal text-[#58745e]">Free Consultation</em> in 2 Minutes
            </>
          }
          description="Instant, transparent access to India's top 5 rated homeopaths with your first session 100% free."
        />

        <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-slate-900/8 bg-[#f8faf8] p-6 transition-all duration-200 hover:border-emerald-800/20 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5"
              >
                <div className="flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#145c43] text-white shadow-sm transition-transform group-hover:scale-105">
                    <Icon size={21} />
                  </div>

                  <span className="text-3xl font-extrabold tracking-[-0.05em] text-slate-200 group-hover:text-emerald-200 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-emerald-300 lg:block"
                    size={20}
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