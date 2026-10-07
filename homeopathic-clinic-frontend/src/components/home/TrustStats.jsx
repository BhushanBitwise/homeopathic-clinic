import { Award, CalendarDays, HeartHandshake, UsersRound } from "lucide-react";

import Container from "../common/Container";

const stats = [
  {
    value: "10+",
    label: "Years of experience",
    icon: Award,
  },
  {
    value: "5K+",
    label: "Consultations",
    icon: UsersRound,
  },
  {
    value: "4.9/5",
    label: "Patient experience",
    icon: HeartHandshake,
  },
  {
    value: "6 Days",
    label: "Weekly availability",
    icon: CalendarDays,
  },
];

function TrustStats() {
  return (
    <section className="border-y border-slate-900/6 bg-white">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-y divide-slate-900/8 lg:grid-cols-4 lg:divide-y-0">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 px-4 py-7 sm:px-7 lg:py-8"
              >
                <div className="hidden size-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-800 sm:grid">
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">
                    {stat.label}
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

export default TrustStats;