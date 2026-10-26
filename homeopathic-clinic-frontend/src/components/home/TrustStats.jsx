import { Award, Gift, HeartHandshake, MapPin, ShieldCheck, UsersRound } from "lucide-react";
import Container from "../common/Container";

const stats = [
  {
    value: "30+ Cities",
    label: "Top 5 Verified Doctors per City",
    icon: MapPin,
    highlight: "Nationwide Network",
  },
  {
    value: "100% Free",
    label: "First Consultation / 5-Min Chat",
    icon: Gift,
    highlight: "Astrotalk-style Voucher",
  },
  {
    value: "25K+",
    label: "Successful Patient Consultations",
    icon: UsersRound,
    highlight: "Across India",
  },
  {
    value: "4.9 / 5",
    label: "Average Patient Rating",
    icon: HeartHandshake,
    highlight: "Verified Reviews",
  },
];

export default function TrustStats() {
  return (
    <section className="border-y border-slate-900/6 bg-white py-6 sm:py-8">
      <Container>
        <div className="grid grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 rounded-2xl border border-slate-100 bg-[#fbfdfb] p-3.5 sm:p-5 shadow-xs transition hover:border-emerald-700/20 hover:bg-white hover:shadow-md"
              >
                <div className="grid size-11 sm:size-12 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-[#145c43] shadow-xs">
                  <Icon size={20} strokeWidth={2} />
                </div>

                <div>
                  <p className="text-lg sm:text-2xl font-bold tracking-tight text-slate-950">
                    {stat.value}
                  </p>

                  <p className="mt-0.5 text-xs font-bold text-slate-800">
                    {stat.label}
                  </p>

                  <p className="text-[10px] text-[#145c43] font-bold">
                    {stat.highlight}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}