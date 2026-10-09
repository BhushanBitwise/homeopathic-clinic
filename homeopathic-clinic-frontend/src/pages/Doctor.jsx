
import { memo, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import Container from "../components/common/Container";

import doctors from "../data/doctors";

const DESKTOP_PAGE_SIZE = 9;
const MOBILE_PAGE_SIZE = 6;

const DoctorCard = memo(function DoctorCard({ doctor }) {
  const [imageFailed, setImageFailed] = useState(false);

  const initials = (doctor.name || "Doctor")
    .replace(/^Dr\.\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-[0_3px_16px_rgba(18,55,42,0.035)] transition-colors duration-200 hover:border-emerald-800/30">
      {/* Consistent image frame across all cards */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e7f2eb]">
        {!imageFailed && doctor.image ? (
          <img
            src={doctor.image}
            alt={doctor.name}
            width="600"
            height="450"
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="absolute inset-0 block h-full w-full object-cover"
            style={{
              objectPosition: doctor.objectPosition || "center center",
            }}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-emerald-900">
            <span className="grid size-16 place-items-center rounded-full border border-emerald-900/10 bg-white text-xl font-semibold">
              {initials}
            </span>
            <span className="text-sm font-medium">Doctor profile</span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/15 to-transparent" />

        {doctor.qualification && (
          <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] truncate rounded-full border border-white/70 bg-white/95 px-3 py-2 text-xs font-semibold text-emerald-900 shadow-sm">
            {doctor.qualification}
          </span>
        )}
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[11px] font-bold uppercase leading-5 tracking-[0.14em] text-emerald-800 sm:text-xs">
          {doctor.role}
        </p>

        <h2 className="mt-2 break-words text-xl font-semibold tracking-tight text-slate-950 sm:text-[1.35rem]">
          {doctor.name}
        </h2>

        {doctor.specialization && (
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {doctor.specialization}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {doctor.experience && (
            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-900">
              {doctor.experience}
            </span>
          )}

          {doctor.availability && (
            <span className="rounded-full bg-[#f3f5f2] px-3 py-1.5 text-xs font-medium text-slate-600">
              {doctor.availability}
            </span>
          )}
        </div>

        {doctor.bio && (
          <p className="mt-4 text-sm leading-6 text-slate-500">
            {doctor.bio}
          </p>
        )}

        <div className="mt-auto pt-6">
          <Link
            to="/appointment"
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#145c43] px-4 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#104b37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
          >
            Book an appointment
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
});

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = useMemo(() => {
    const candidates = [
      1,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      totalPages,
    ];

    return [...new Set(candidates)]
      .filter((page) => page >= 1 && page <= totalPages)
      .sort((a, b) => a - b);
  }, [currentPage, totalPages]);

  if (totalPages <= 1) return null;

  const buttonClass =
    "inline-flex min-h-11 items-center justify-center rounded-full border px-3 sm:px-4 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <nav
      aria-label="Doctor pagination"
      className="mt-9 flex flex-wrap items-center justify-center gap-2"
    >
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`${buttonClass} border-slate-200 bg-white text-slate-700`}
      >
        Previous
      </button>

      {pages.map((page, index) => {
        const previousPage = pages[index - 1];
        const needsEllipsis =
          previousPage && page - previousPage > 1;
        const isActive = page === currentPage;

        return (
          <span key={page} className="flex items-center gap-2">
            {needsEllipsis && (
              <span className="text-slate-400" aria-hidden="true">
                …
              </span>
            )}

            <button
              type="button"
              aria-label={`Go to page ${page}`}
              aria-current={isActive ? "page" : undefined}
              onClick={() => onPageChange(page)}
              className={`${buttonClass} ${
                isActive
                  ? "border-[#145c43] bg-[#145c43] text-white"
                  : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              {page}
            </button>
          </span>
        );
      })}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`${buttonClass} border-slate-200 bg-white text-slate-700`}
      >
        Next
      </button>
    </nav>
  );
}

export default function Doctor() {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(DESKTOP_PAGE_SIZE);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");

    const updateSize = () => {
      setPageSize(
        media.matches ? MOBILE_PAGE_SIZE : DESKTOP_PAGE_SIZE
      );
    };

    updateSize();
    media.addEventListener("change", updateSize);

    return () => media.removeEventListener("change", updateSize);
  }, []);

  const specializations = useMemo(
    () =>
      [
        ...new Set(
          doctors.map((doctor) => doctor.specialization).filter(Boolean)
        ),
      ].sort(),
    []
  );

  const filteredDoctors = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = doctors.filter((doctor) => {
      const text = [
        doctor.name,
        doctor.qualification,
        doctor.role,
        doctor.specialization,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        text.includes(query) &&
        (specialization === "all" ||
          doctor.specialization === specialization)
      );
    });

    if (sortBy === "experience") {
      return result.sort((a, b) => {
        const yearsA = Number(
          String(a.experience || "").match(/\d+/)?.[0] || 0
        );
        const yearsB = Number(
          String(b.experience || "").match(/\d+/)?.[0] || 0
        );
        return yearsB - yearsA;
      });
    }

    return result.sort((a, b) =>
      (a.name || "").localeCompare(b.name || "")
    );
  }, [search, specialization, sortBy]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredDoctors.length / pageSize)
  );

  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * pageSize;

  const visibleDoctors = useMemo(
    () => filteredDoctors.slice(startIndex, startIndex + pageSize),
    [filteredDoctors, startIndex, pageSize]
  );

  function resetFilters() {
    setSearch("");
    setSpecialization("all");
    setSortBy("name");
    setCurrentPage(1);
  }

  const hasFilters =
    search.trim() !== "" ||
    specialization !== "all" ||
    sortBy !== "name";

  const searchWrapper =
    "flex min-h-12 min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-[#f8faf8] px-4 focus-within:border-emerald-700 focus-within:ring-4 focus-within:ring-emerald-700/10";

  const selectClass =
    "min-h-12 w-full min-w-0 rounded-xl border border-slate-200 bg-[#f8faf8] px-3 text-sm text-slate-700 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10";

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8faf8]">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        <section className="border-b border-slate-200 bg-white py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800 sm:text-sm">
                HealingCare · Our team
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
                Meet our doctors.
                <span className="mt-1 block text-emerald-800">
                  Care starts with listening.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Explore doctor profiles and consultation information.
                Contact the clinic to confirm availability.
              </p>
            </div>
          </Container>
        </section>

        {/* Search and filters */}
        <section className="py-7 sm:py-9">
          <Container>
            <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1fr)_minmax(190px,0.55fr)_minmax(180px,0.45fr)]">
                <div className={searchWrapper}>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-5 shrink-0 text-emerald-800"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="m16 16 4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>

                  <label htmlFor="doctor-search" className="sr-only">
                    Search doctors
                  </label>

                  <input
                    id="doctor-search"
                    type="search"
                    value={search}
                    onChange={(event) => {
                      setSearch(event.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Search doctors..."
                    autoComplete="off"
                    className="!m-0 !min-w-0 !w-full !flex-1 !rounded-none !border-0 !bg-transparent !px-0 !py-3 !shadow-none text-sm text-slate-900 placeholder:text-slate-400 !outline-none !ring-0 focus:!border-0 focus:!outline-none focus:!ring-0 focus:!shadow-none"
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearch("");
                        setCurrentPage(1);
                      }}
                      aria-label="Clear search"
                      className="shrink-0 rounded-lg px-2 py-1.5 text-xs font-semibold text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <label className="block min-w-0">
                  <span className="mb-1.5 block text-xs font-semibold text-slate-600">
                    Specialization
                  </span>
                  <select
                    value={specialization}
                    onChange={(event) => {
                      setSpecialization(event.target.value);
                      setCurrentPage(1);
                    }}
                    className={selectClass}
                  >
                    <option value="all">All specializations</option>
                    {specializations.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block min-w-0">
                  <span className="mb-1.5 block text-xs font-semibold text-slate-600">
                    Sort by
                  </span>
                  <select
                    value={sortBy}
                    onChange={(event) => {
                      setSortBy(event.target.value);
                      setCurrentPage(1);
                    }}
                    className={selectClass}
                  >
                    <option value="name">Name (A–Z)</option>
                    <option value="experience">
                      Experience (highest first)
                    </option>
                  </select>
                </label>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                <p className="text-sm text-slate-500" aria-live="polite">
                  <span className="font-semibold text-slate-950">
                    {filteredDoctors.length}
                  </span>{" "}
                  {filteredDoctors.length === 1 ? "doctor" : "doctors"} found
                </p>

                {hasFilters && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="inline-flex min-h-10 items-center rounded-full border border-emerald-800/15 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
                  >
                    Reset filters
                  </button>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Doctor listing */}
        <section className="pb-14 sm:pb-20">
          <Container>
            {visibleDoctors.length > 0 ? (
              <>
                <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                  {visibleDoctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                  ))}
                </div>

                <p className="mt-6 text-center text-xs text-slate-500">
                  Showing {startIndex + 1}–
                  {Math.min(startIndex + pageSize, filteredDoctors.length)}{" "}
                  of {filteredDoctors.length} doctors
                </p>

                <Pagination
                  currentPage={safePage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center sm:px-8">
                <h2 className="text-xl font-semibold text-slate-950">
                  No doctors found
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Try another search term or change the specialization.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 min-h-11 rounded-full bg-[#145c43] px-5 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
                >
                  Clear filters
                </button>
              </div>
            )}
          </Container>
        </section>

        {/* Appointment call to action */}
        <section className="pb-14 sm:pb-20">
          <Container>
            <div className="rounded-3xl bg-[#12372a] px-5 py-10 text-center sm:rounded-[2rem] sm:px-12 sm:py-14">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200 sm:text-sm">
                Your next step
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to arrange a consultation?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-emerald-50/75 sm:text-base">
                Contact the clinic to confirm doctor availability and
                appointment details.
              </p>

              <Link
                to="/appointment"
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#12372a]"
              >
                Book an appointment →
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
