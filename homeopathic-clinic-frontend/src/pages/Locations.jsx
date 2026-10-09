
import { memo, useDeferredValue, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

import {
  maharashtraLocations,
  indiaLocations,
} from "../data/locations";

const DESKTOP_PAGE_SIZE = 9;

const CityCard = memo(function CityCard({ location }) {
  return (
    <Link
      to={location.path}
      className="
        group rounded-3xl border border-slate-900/10
        bg-white p-5
        transition-all duration-300
        hover:-translate-y-1
        hover:border-emerald-800/25
        hover:bg-emerald-50/30
        hover:shadow-[0_12px_30px_rgba(20,92,67,0.07)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-emerald-700
        focus-visible:ring-offset-2
      "
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">
          {location.region || location.state}
        </span>

        <span
          aria-hidden="true"
          className="
            text-lg text-slate-300
            transition-all duration-200
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
            group-hover:text-emerald-700
          "
        >
          ↗
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
        {location.city}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {location.state}
      </p>

      <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
        {location.description}
      </p>

      <span className="mt-5 inline-flex text-sm font-semibold text-emerald-800">
        Explore location
        <span
          aria-hidden="true"
          className="ml-1 transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </Link>
  );
});

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = new Set([
      1,
      totalPages,
      currentPage,
      currentPage - 1,
      currentPage + 1,
    ]);

    return [...pages]
      .filter((page) => page >= 1 && page <= totalPages)
      .sort((a, b) => a - b);
  };

  const pages = getPages();

  const buttonBase = `
    inline-flex min-h-11 items-center justify-center
    rounded-full border px-4 text-sm font-semibold
    transition-all duration-200
    disabled:pointer-events-none disabled:opacity-40
  `;

  return (
    <nav
      aria-label="Location pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`
          ${buttonBase}
          border-slate-900/10 bg-white text-slate-700
          hover:border-emerald-800/25 hover:bg-emerald-50
        `}
      >
        Previous
      </button>

      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {pages.map((page, index) => {
          const previousPage = pages[index - 1];
          const showEllipsis =
            previousPage && page - previousPage > 1;
          const active = page === currentPage;

          return (
            <span key={page} className="flex items-center gap-1.5">
              {showEllipsis && (
                <span
                  aria-hidden="true"
                  className="px-1 text-slate-400"
                >
                  …
                </span>
              )}

              <button
                type="button"
                aria-label={`Go to page ${page}`}
                aria-current={active ? "page" : undefined}
                onClick={() => onPageChange(page)}
                className={`
                  grid size-11 place-items-center rounded-full
                  border text-sm font-semibold
                  transition-all duration-200
                  ${
                    active
                      ? "border-[#145c43] bg-[#145c43] text-white shadow-sm"
                      : "border-slate-900/10 bg-white text-slate-700 hover:border-emerald-800/25 hover:bg-emerald-50"
                  }
                `}
              >
                {page}
              </button>
            </span>
          );
        })}
      </div>

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`
          ${buttonBase}
          border-slate-900/10 bg-white text-slate-700
          hover:border-emerald-800/25 hover:bg-emerald-50
        `}
      >
        Next
      </button>
    </nav>
  );
}

function LocationCollection({
  eyebrow,
  title,
  description,
  locations,
  pageSize,
  search,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const deferredSearch = useDeferredValue(search);

  const filteredLocations = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase();

    if (!query) return locations;

    return locations.filter((location) =>
      [location.city, location.state, location.region]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [locations, deferredSearch]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredLocations.length / pageSize)
  );

  // Keep the displayed page valid when the filtered result count changes.
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * pageSize;

  const visibleLocations = useMemo(
    () => filteredLocations.slice(startIndex, startIndex + pageSize),
    [filteredLocations, startIndex, pageSize]
  );

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-800">
              {eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
              {title}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>

        {filteredLocations.length > 0 ? (
          <>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleLocations.map((location) => (
                <CityCard
                  key={`${location.state}-${location.slug}`}
                  location={location}
                />
              ))}
            </div>

            <div className="text-center">
              <p className="mt-8 text-xs text-slate-400">
                Showing {startIndex + 1}–
                {Math.min(
                  startIndex + pageSize,
                  filteredLocations.length
                )}{" "}
                of {filteredLocations.length} locations
              </p>

              <Pagination
                currentPage={safePage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
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

            <p className="mt-4 font-semibold text-slate-950">
              No location found
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Try searching for another city or state.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

function Locations() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8faf8]">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="border-b border-slate-900/5 pb-14 pt-32 sm:pb-16 sm:pt-40">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-800">
                Locations
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
                Homeopathy care,
                <span className="block text-emerald-800">
                  wherever you are.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Explore consultation information for cities across
                Maharashtra and selected locations across India.
              </p>

              {/* SEARCH */}
              
{/* SEARCH */}
<div className="mx-auto mt-9 max-w-2xl">
  <label htmlFor="location-search" className="sr-only">
    Search locations by city or state
  </label>

  <div
    className="
      group flex min-h-[60px] items-center gap-3
      rounded-2xl border border-slate-200
      bg-white px-4 sm:px-5
      shadow-[0_8px_30px_rgba(15,23,42,0.04)]
      transition-all duration-300
      hover:border-emerald-300
      hover:shadow-[0_10px_35px_rgba(20,92,67,0.08)]
      focus-within:border-emerald-700
      focus-within:ring-4
      focus-within:ring-emerald-700/10
    "
  >
    {/* Search icon */}
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="
        size-5 shrink-0 text-slate-400
        transition-colors duration-200
        group-focus-within:text-emerald-700
      "
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

    {/* Input: remove the square focus border */}
    <input
      id="location-search"
      type="search"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      placeholder="Search by city or state..."
      autoComplete="off"
      spellCheck={false}
      className="
        !m-0 !min-w-0 !w-full !flex-1
        !border-0 !outline-none !ring-0
        !shadow-none !rounded-none
        appearance-none bg-transparent
        py-4 px-0
        text-base text-slate-900
        placeholder:text-slate-400
        focus:!border-0
        focus:!outline-none
        focus:!ring-0
        focus:!shadow-none
        focus-visible:!outline-none
        focus-visible:!ring-0
      "
    />

    {/* Clear button */}
    {search && (
      <button
        type="button"
        onClick={() => setSearch("")}
        aria-label="Clear location search"
        className="
          shrink-0 rounded-xl px-3 py-2
          text-sm font-semibold text-slate-500
          transition-colors
          hover:bg-emerald-50 hover:text-emerald-800
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-emerald-700
        "
      >
        Clear
      </button>
    )}
  </div>

  <p className="mt-3 text-center text-xs text-slate-400">
    Search using a city name or state
  </p>
</div>


            </div>
          </Container>
        </section>

        {/* MAHARASHTRA */}
        <LocationCollection
          key={`maharashtra-${search}`}
          eyebrow="Maharashtra"
          title="Find your city"
          description="Explore city-specific consultation information and appointment options."
          locations={maharashtraLocations}
          pageSize={DESKTOP_PAGE_SIZE}
          search={search}
        />

        {/* INDIA */}
        <section className="border-y border-slate-900/5 bg-white">
          <LocationCollection
            key={`india-${search}`}
            eyebrow="Across India"
            title="More cities, same care philosophy"
            description="Explore selected cities and learn more about consultation support."
            locations={indiaLocations}
            pageSize={DESKTOP_PAGE_SIZE}
            search={search}
          />
        </section>

        {/* FINAL CTA */}
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="rounded-[2rem] bg-[#12372a] px-6 py-12 text-center sm:px-12 sm:py-16">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-200">
                Ready when you are
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Start with a conversation about your health.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-emerald-50/70 sm:text-base">
                Share your concern, choose a convenient consultation
                time and connect with the clinic through WhatsApp.
              </p>

              <div className="mt-8 flex justify-center">
                <Button
                  to="/appointment"
                  variant="secondary"
                  showArrow={false}
                >
                  Book an appointment
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Locations;
