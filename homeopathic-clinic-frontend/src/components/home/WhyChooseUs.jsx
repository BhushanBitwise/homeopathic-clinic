import {
  Award,
  Gift,
  HeartHandshake,
  LockKeyhole,
  MessageSquareHeart,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const benefits = [
  {
    icon: Award,
    title: "Curated Top 5 per City",
    text: "We reject 90% of applicants and only enlist the top 5 highest-rated MD/BHMS homeopaths in Pune, Mumbai, Delhi and key Indian cities.",
  },
  {
    icon: Gift,
    title: "First Consultation 100% Free",
    text: "Experience the doctor's approach, discuss your medical history, and see if homeopathy works for you with zero upfront payment.",
  },
  {
    icon: ShieldCheck,
    title: "100% Natural & Safe",
    text: "Pure constitutional homeopathic formulations that treat the root cause of chronic conditions without steroid side effects or dependency.",
  },
  {
    icon: LockKeyhole,
    title: "Private & End-to-End Delivery",
    text: "Confidential consultations on private chat/video with genuine medicines delivered in sealed tamper-proof packaging across India.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="overflow-hidden bg-[#0c2f24] py-20 text-white sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              <Sparkles size={13} className="text-amber-400" />
              <span>The HealingCare Standard</span>
            </div>

            <h2 className="mt-5 font-serif text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-5xl">
              Why thousands trust HealingCare over{" "}
              <em className="italic font-semibold text-[#9be8c1]">generic clinic directories</em>.
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-emerald-100/70 sm:text-base">
              Healthcare shouldn&apos;t feel like a lottery. We bring you verified clinical experts who take time to understand your lifestyle, emotional state, and root health triggers.
            </p>

            <div className="mt-8 flex items-center gap-4 text-xs text-emerald-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-400" />
                Founded in Pune
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-amber-400" />
                Serving All India
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-400" />
                Official WhatsApp Support
              </span>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="bg-[#0e3529] p-7 transition-colors hover:bg-[#124234] sm:p-8"
                >
                  <div className="grid size-11 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-base font-semibold text-white sm:text-lg">
                    {benefit.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-emerald-100/65 sm:text-sm">
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