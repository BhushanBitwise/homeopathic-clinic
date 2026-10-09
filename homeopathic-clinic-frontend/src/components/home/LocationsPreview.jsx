import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import {
  maharashtraLocations,
  indiaLocations,
} from "../../data/locations";

function LocationsPreview() {
  const [search, setSearch] = useState("");

  const filteredMaharashtra = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return maharashtraLocations.slice(0, 9);
    }

    return maharashtraLocations
      .filter((location) =>
        `${location.city} ${location.region}`
          .toLowerCase()
          .includes(query)
      )
      .slice(0, 9);
  }, [search]);

  const filteredIndia = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return indiaLocations.slice(0, 6);
    }

    return indiaLocations
      .filter((location) =>
        `${location.city} ${location.state}`
          .toLowerCase()
          .includes(query)
      )
      .slice(0, 6);
  }, [search]);

  return (
    <section className="border-y border-slate-900/5 bg-white py-20 sm:py-24">
      <Container>
        {/* Heading */}
        <SectionHeading
          eyebrow="Locations"
          title="Homeopathy care, closer to you."
          description="Explore consultation information for cities across Maharashtra and selected locations across India."
        />

        {/* Search */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex items-center rounded-2xl border border-slate-900/10 bg-[#f8faf8] p-2 shadow-sm">
            <Search
              size={19}
              className="ml-3 shrink-0 text-slate-400"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search your city..."
              aria-label="Search your city"
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="rounded-xl px-3 py-2 text-xs font-semibold text-slate-500 transition hover:bg-white hover:text-slate-900"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Maharashtra */}
        <div className="mt-14">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-800">
                Maharashtra
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                Find your city
              </h3>
            </div>

            <Link
              to="/locations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 transition hover:text-emerald-950"
            >
              View all locations
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {filteredMaharashtra.length > 0 ? (
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMaharashtra.map((location) => (
                <Link
                  key={`${location.state}-${location.slug}`}
                  to={location.path}
                  className="group rounded-3xl border border-slate-900/8 bg-[#f8faf8] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-800/15 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                      <MapPin size={19} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-700"
                    />
                  </div>

                  <h4 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
                    {location.city}
                  </h4>

                  <p className="mt-1 text-xs font-medium text-slate-400">
                    {location.region}
                  </p>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                    Homeopathy consultation support for patients in{" "}
                    {location.city}.
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-7 rounded-3xl border border-dashed border-slate-900/10 bg-[#f8faf8] p-10 text-center">
              <p className="font-semibold text-slate-900">
                No city found
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Try searching for another city.
              </p>
            </div>
          )}
        </div>

        {/* India */}
        <div className="mt-16 border-t border-slate-900/8 pt-12">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-800">
                Across India
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                More cities, same care philosophy
              </h3>
            </div>

            <Link
              to="/locations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 transition hover:text-emerald-950"
            >
              Explore all
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {filteredIndia.map((location) => (
              <Link
                key={`${location.state}-${location.slug}`}
                to={location.path}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-900/8 bg-[#f8faf8] px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-800/20 hover:bg-emerald-50 hover:text-emerald-900"
              >
                <MapPin
                  size={15}
                  className="text-emerald-700"
                />

                {location.city}

                <ArrowUpRight
                  size={14}
                  className="text-slate-300 transition group-hover:text-emerald-700"
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LocationsPreview;