
import { Link } from "react-router-dom";
import doctors from "../../data/doctors";

function DoctorCard({ doctor }) {
  return (
    <article
      className="
        group overflow-hidden rounded-3xl
        border border-slate-200/80 bg-white
        transition-all duration-300
        hover:-translate-y-1
        hover:border-emerald-800/20
        hover:shadow-[0_20px_50px_rgba(18,55,42,0.09)]
      "
    >
      <div className="relative overflow-hidden bg-[#e7f2eb]">
        <img
          src={doctor.image}
          alt={`${doctor.name}, ${doctor.role}`}
          width="600"
          height="680"
          loading="lazy"
          decoding="async"
          className="
            aspect-[4/3] w-full object-cover object-top
            transition-transform duration-500
            group-hover:scale-[1.03]
          "
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
        />

        <span
          className="
            absolute left-4 top-4 rounded-full
            border border-white/70 bg-white/90
            px-3 py-1.5 text-xs font-semibold
            text-emerald-900 shadow-sm backdrop-blur
          "
        >
          {doctor.qualification}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.13em] text-emerald-800">
          {doctor.role}
        </p>

        <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
          {doctor.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {doctor.specialization}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-900">
            {doctor.experience}
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
            {doctor.availability}
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {doctor.bio}
        </p>

        <Link
          to="/appointment"
          className="
            mt-6 flex min-h-12 w-full items-center
            justify-center gap-2 rounded-full
            bg-[#145c43] px-5 py-3
            text-sm font-semibold text-white
            transition-all duration-200
            hover:bg-[#104b37]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-emerald-700
            focus-visible:ring-offset-2
          "
        >
          Book an appointment
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function DoctorsTeam({
  limit,
  showViewAll = false,
}) {
  const visibleDoctors =
    typeof limit === "number"
      ? doctors.slice(0, limit)
      : doctors;

  return (
    <section className="bg-[#f8faf8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-800">
              Meet our doctors
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
              Care that starts with listening.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Get to know our consultation team and choose a
              convenient time to discuss your healthcare needs.
            </p>
          </div>

          {showViewAll && (
            <Link
              to="/doctor"
              className="
                inline-flex min-h-11 w-fit items-center
                gap-2 rounded-full border border-emerald-900/15
                bg-white px-5 py-3 text-sm font-semibold
                text-emerald-900 transition-colors
                hover:border-emerald-800/30
                hover:bg-emerald-50
              "
            >
              Meet the full team
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {visibleDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {typeof limit === "number" && doctors.length > limit && (
          <div className="mt-9 flex justify-center">
            <Link
              to="/doctor"
              className="
                inline-flex min-h-12 items-center justify-center
                rounded-full border border-emerald-900/15
                bg-white px-6 py-3 text-sm font-semibold
                text-emerald-900 transition-all
                hover:border-emerald-800/30
                hover:bg-emerald-50
              "
            >
              View all doctors
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
