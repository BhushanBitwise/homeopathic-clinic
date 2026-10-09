
import { Link } from "react-router-dom";
import doctors from "../../data/doctors";

export default function DoctorsPreviewGrid() {
  return (
    <section className="bg-[#f8faf8] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-800">
              Our consultation team
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Meet more of our doctors.
            </h2>
          </div>

          <Link
            to="/doctor"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-emerald-800 hover:text-emerald-950"
          >
            View all doctors →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.slice(0, 3).map((doctor) => (
            <Link
              to="/doctor"
              key={doctor.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-colors hover:border-emerald-800/25"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#e7f2eb]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                  {doctor.role}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">
                  {doctor.name}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {doctor.qualification}
                </p>
                <span className="mt-4 inline-flex text-sm font-semibold text-emerald-800">
                  View team profile →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
