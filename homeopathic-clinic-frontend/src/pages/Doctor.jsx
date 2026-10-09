
import { memo, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import Container from "../components/common/Container";

import doctors from "../data/doctors";

const DESKTOP_PAGE_SIZE = 9;
const MOBILE_PAGE_SIZE = 6;

const selectClass =
  "min-h-12 w-full min-w-0 rounded-xl border border-slate-200 bg-[#f8faf8] px-3 text-sm text-slate-700 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10";

function getInitials(name = "") {
  return name
    .replace(/^Dr\.\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function getExperienceYears(experience = "") {
  return Number(String(experience).match(/\d+/)?.[0] || 0);
}

const DoctorCard = memo(function DoctorCard({ doctor }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-colors duration-150 hover:border-emerald-800/25">
      {/* Portrait image: gives the face and shoulders more room */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#e7f2eb]">
        {!imageFailed && doctor.image ? (
          <img
            src={doctor.image}
            alt={doctor.name}
            width="600"
            height="750"
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="block h-full w-full object-cover"
            style={{
              objectPosition: doctor.objectPosition || "center 20%",
            }}
          />
        ) : (
          <div
            className="flex h-full flex-col items-center justify-center gap-3 text-emerald-900"
            role="img"
            aria-label={`Image unavailable for ${doctor.name}`}
          >
            <span className="grid size-16 place-items-center rounded-full bg-white text-2xl font-semibold">
              {getInitials(doctor.name)}
            </span>
            <span className="text-sm font-medium">
              Doctor profile
            </span>
          </div>
        )}

        {doctor.qualification && (
          <span className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] truncate rounded-full border border-white/70 bg-white/95 px-3 py-1.5 text-xs font-semibold text-emerald-900">
            {doctor.qualification}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] leading-5 text-emerald-800">
          {doctor.role}
        </p>

        <h2 className="mt-2 break-words text-xl font-semibold tracking-tight text-slate-950">
          {doctor.name}
        </h2>

        {doctor.specialization && (
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {doctor.specialization}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {doctor.experience && (
            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-900">
              {doctor.experience}
            </span>
          )}

          {doctor.availability && (
            <span className="rounded-full bg-[#f1f4f1] px-3 py-1.5 text-xs text-slate-600">
              {doctor.availability}
            </span>
          )}
        </div>

        {doctor.bio && (
          <p className="mt-4 text-sm leading-6 text-slate-500">
            {doctor.bio}
          </p>
        )}

        <Link
          to="/appointment"
          className="mt-auto mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#145c43] px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#104b37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
        >
          Book an appointment
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
});

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = useMemo(() => {
    const visiblePages = new Set([
      1,
      totalPages,
      currentPage - 1,
      currentPage,
      currentPage + 1,
    ]);

    return [...visiblePages]
      .filter((page) => page >= 1 && page <= totalPages)
      .sort((a, b) => a - b);
  }, [currentPage, totalPages]);

  if (totalPages <= 1) return null;

  const buttonClass =
    "inline-flex min-h-11 items-center justify-center rounded-full border px-3 sm:px-4 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <nav
      aria-label="Doctor pagination"
      className="mt-8 flex flex-wrap items-center justify-center gap-2"
    >
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`${buttonClass} border-slate-200 bg-white text-slate-700 hover:bg-emerald-50`}
      >
        Previous
      </button>

      {pages.map((page, index) => {
        const previousPage = pages[index - 1];
        const showEllipsis =
          previousPage && page - previousPage > 1;
        const active = page === currentPage;

        return (
          <span key={page} className="flex items-center gap-2">
            {showEllipsis && (
              <span aria-hidden="true" className="text-slate-400">
                …
              </span>
            )}

            <button
              type="button"
              aria-label={`Go to page ${page}`}
              aria-current={active ? "page" : undefined}
              onClick={() => onPageChange(page)}
              className={`${buttonClass} ${
                active
                  ? "border-[#145c43] bg-[#145c43] text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-emerald-50"
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
        className={`${buttonClass} border-slate-200 bg-white text-slate-700 hover:bg-emerald-50`}
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

  // Adapt pagination to viewport size.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const updatePageSize = () => {
      setPageSize(
        mediaQuery.matches ? MOBILE_PAGE_SIZE : DESKTOP_PAGE_SIZE
      );
    };

    updatePageSize();
    mediaQuery.addEventListener("change", updatePageSize);

    return () => {
      mediaQuery.removeEventListener("change", updatePageSize);
    };
  }, []);

  const specializations = useMemo(
    () =>
      [
        ...new Set(
          doctors
            .map((doctor) => doctor.specialization)
            .filter(Boolean)
        ),
      ].sort(),
    []
  );

  const filteredDoctors = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = doctors.filter((doctor) => {
      const searchableText = [
        doctor.name,
        doctor.qualification,
        doctor.role,
        doctor.specialization,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(query);
      const matchesSpecialization =
        specialization === "all" ||
        doctor.specialization === specialization;

      return matchesSearch && matchesSpecialization;
    });

    if (sortBy === "experience") {
      return result.sort(
        (a, b) =>
          getExperienceYears(b.experience) -
          getExperienceYears(a.experience)
      );
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

  const hasActiveFilters =
    search.trim() !== "" ||
    specialization !== "all" ||
    sortBy !== "name";

  function handleSearch(value) {
    setSearch(value);
    setCurrentPage(1);
  }

  function handleSpecialization(value) {
    setSpecialization(value);
    setCurrentPage(1);
  }

  function handleSort(value) {
    setSortBy(value);
    setCurrentPage(1);
  }

  function resetFilters() {
    setSearch("");
    setSpecialization("all");
    setSortBy("name");
    setCurrentPage(1);
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8faf8]">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Heading */}
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
                {/* Rounded wrapper owns the focus ring; no hover styling */}
                <div className="flex min-h-12 min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-[#f8faf8] px-4 focus-within:border-emerald-700 focus-within:ring-4 focus-within:ring-emerald-700/10">
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
                    onChange={(event) => handleSearch(event.target.value)}
                    placeholder="Search doctors..."
                    autoComplete="off"
                    spellCheck={false}
                    className="!m-0 !min-w-0 !w-full !flex-1 !rounded-none !border-0 !bg-transparent !px-0 !py-3 !shadow-none text-sm text-slate-900 placeholder:text-slate-400 !outline-none !ring-0 focus:!border-0 focus:!outline-none focus:!ring-0 focus:!shadow-none"
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() => handleSearch("")}
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
                    onChange={(event) =>
                      handleSpecialization(event.target.value)
                    }
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
                    onChange={(event) => handleSort(event.target.value)}
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

                {hasActiveFilters && (
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

        {/* Responsive doctor cards */}
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
                  {Math.min(
                    startIndex + pageSize,
                    filteredDoctors.length
                  )}{" "}
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
                <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-800">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-6"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="m16 16 4 4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <h2 className="mt-4 text-xl font-semibold text-slate-950">
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

        {/* Appointment CTA */}
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
