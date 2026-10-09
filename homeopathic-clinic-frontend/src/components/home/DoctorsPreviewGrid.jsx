
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import doctors from "../../data/doctors";

// function getInitials(name = "") {
//   return name
//     .replace(/^Dr\.\s*/i, "")
//     .split(/\s+/)
//     .filter(Boolean)
//     .slice(0, 2)
//     .map((part) => part[0])
//     .join("")
//     .toUpperCase();
// }

// function DoctorPortrait({ doctor, index }) {
//   const [imageFailed, setImageFailed] = useState(false);

//   return (
//     <article
//       className={`group min-w-0 ${
//         index === 1 ? "lg:-translate-y-8" : "lg:translate-y-4"
//       }`}
//     >
//       <Link
//         to="/doctor"
//         aria-label={`View ${doctor.name}'s doctor profile`}
//         className="relative block overflow-hidden rounded-sm bg-[#173e30] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9be8c1]"
//       >
//         <div className="aspect-[4/5] overflow-hidden">
//           {!imageFailed && doctor.image ? (
//             <img
//               src={doctor.image}
//               alt={doctor.name}
//               width="600"
//               height="750"
//               loading="lazy"
//               decoding="async"
//               onError={() => setImageFailed(true)}
//               className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
//               style={{
//                 objectPosition: doctor.objectPosition || "center 20%",
//               }}
//             />
//           ) : (
//             <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#173e30] to-[#0b3025]">
//               <span className="flex h-20 w-20 items-center justify-center rounded-full border border-emerald-100/20 text-2xl font-medium text-emerald-100">
//                 {getInitials(doctor.name)}
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Soft gradient over image */}
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b3025]/55 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

//         {/* Profile arrow */}
//         <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0b3025]/85 text-lg text-white transition-colors duration-300 group-hover:bg-[#a4edca] group-hover:text-[#0b3025]">
//           ↗
//         </span>

//         {index === 1 && (
//           <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-[#0b3025]/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm">
//             Our medical team
//           </span>
//         )}
//       </Link>

//       {/* Doctor details */}
//       <div className="pt-4 sm:pt-5">
//         <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9be8c1] sm:text-xs">
//           {doctor.role || "Consultation team"}
//         </p>

//         <h3 className="mt-2 text-lg font-medium tracking-tight text-white sm:text-xl">
//           {doctor.name}
//         </h3>

//         {doctor.specialization && (
//           <p className="mt-1.5 text-sm leading-6 text-white/75">
//             {doctor.specialization}
//           </p>
//         )}

//         {doctor.qualification && (
//           <p className="mt-1 text-xs leading-5 text-white/55">
//             {doctor.qualification}
//           </p>
//         )}
//       </div>
//     </article>
//   );
// }

// export default function DoctorsPreviewGrid() {
//   const previewDoctors = doctors.slice(0, 3);

//   return (
//     <section className="relative overflow-hidden bg-[#0b3025] py-16 text-white sm:py-20 lg:py-28">
//       {/* Subtle green background accents */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-400/[0.07] blur-[100px]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-emerald-300/[0.06] blur-[110px]"
//       />

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//         {/* Section heading */}
//         <div className="mx-auto max-w-3xl text-center">
//           <p className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9be8c1] sm:text-xs">
//             <span className="h-px w-7 bg-[#6da989]" />
//             Our consultation team
//             <span className="h-px w-7 bg-[#6da989]" />
//           </p>

//           <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
//             Meet the people
//             <span className="block text-[#9be8c1]">
//               behind your care.
//             </span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
//             Get to know the team dedicated to listening, understanding,
//             and supporting your individual healthcare journey.
//           </p>
//         </div>

//         {/* Staggered doctor gallery */}
//         {previewDoctors.length > 0 ? (
//           <div className="mt-12 grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:mt-20 lg:grid-cols-3 lg:gap-x-8">
//             {previewDoctors.map((doctor, index) => (
//               <DoctorPortrait
//                 key={doctor.id ?? doctor.name ?? index}
//                 doctor={doctor}
//                 index={index}
//               />
//             ))}
//           </div>
//         ) : (
//           <p className="mt-12 text-center text-sm text-white/65">
//             Doctor profiles will be available soon.
//           </p>
//         )}

//         {/* Bottom divider and link */}
//         <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
//           <p className="text-sm text-white/65">
//             Personal attention. Thoughtful care. A team that listens.
//           </p>

//           <Link
//             to="/doctor"
//             className="group inline-flex min-h-11 w-fit items-center gap-3 text-sm font-medium text-[#9be8c1] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9be8c1] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b3025]"
//           >
//             View all doctors
//             <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//               ↗
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }











import { useState } from "react";
import { Link } from "react-router-dom";
import doctors from "../../data/doctors";

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

function DoctorPortrait({ doctor, index }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article
      className={`group min-w-0 ${
        index === 1 ? "lg:-translate-y-8" : "lg:translate-y-4"
      }`}
    >
      <Link
        to="/doctor"
        aria-label={`View ${doctor.name}'s doctor profile`}
        className="relative block overflow-hidden rounded-sm bg-[#173e30] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9be8c1]"
      >
        <div className="aspect-[4/5] overflow-hidden">
          {!imageFailed && doctor.image ? (
            <img
              src={doctor.image}
              alt={doctor.name}
              width="600"
              height="750"
              loading="lazy"
              decoding="async"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              style={{
                objectPosition: doctor.objectPosition || "center 20%",
              }}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#173e30] to-[#0b3025]">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-emerald-100/20 text-2xl font-medium text-emerald-100">
                {getInitials(doctor.name)}
              </span>
            </div>
          )}
        </div>

        {/* Image gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b3025]/55 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Profile arrow */}
        <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0b3025]/85 text-lg text-white transition-colors duration-300 group-hover:bg-[#a4edca] group-hover:text-[#0b3025]">
          ↗
        </span>

        {index === 1 && (
          <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-[#0b3025]/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm">
            Our medical team
          </span>
        )}
      </Link>

      {/* Doctor details */}
      <div className="pt-4 sm:pt-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9be8c1] sm:text-xs">
          {doctor.role || "Consultation team"}
        </p>

        <h3 className="mt-2 text-lg font-medium tracking-tight text-white sm:text-xl">
          {doctor.name}
        </h3>

        {doctor.specialization && (
          <p className="mt-1.5 text-sm leading-6 text-white/75">
            {doctor.specialization}
          </p>
        )}

        {doctor.qualification && (
          <p className="mt-1 text-xs leading-5 text-white/55">
            {doctor.qualification}
          </p>
        )}
      </div>
    </article>
  );
}

export default function DoctorsPreviewGrid() {
  // Explicit ordering: female doctor, male doctor, female doctor.
  // Update these IDs if your doctors.js uses different IDs.
  const preferredOrder = [
    "pranita-kanade",
    "doctor-3",
    "doctor-2",
  ];

  const previewDoctors = preferredOrder
    .map((id) => doctors.find((doctor) => doctor.id === id))
    .filter(Boolean);

  // Keep the section usable if the preferred IDs aren't present.
  const visibleDoctors =
    previewDoctors.length === 3
      ? previewDoctors
      : doctors.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-[#0b3025] py-16 text-white sm:py-20 lg:py-28">
      {/* Subtle green background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-400/[0.07] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-emerald-300/[0.06] blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9be8c1] sm:text-xs">
            <span className="h-px w-7 bg-[#6da989]" />
            Our consultation team
            <span className="h-px w-7 bg-[#6da989]" />
          </p>

          <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Meet the people
            <span className="block text-[#9be8c1]">
              behind your care.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Get to know the team dedicated to listening, understanding,
            and supporting your individual healthcare journey.
          </p>
        </div>

        {/* Staggered gallery: female / male / female */}
        {visibleDoctors.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:mt-20 lg:grid-cols-3 lg:gap-x-8">
            {visibleDoctors.map((doctor, index) => (
              <DoctorPortrait
                key={doctor.id ?? doctor.name ?? index}
                doctor={doctor}
                index={index}
              />
            ))}
          </div>
        ) : (
          <p className="mt-12 text-center text-sm text-white/65">
            Doctor profiles will be available soon.
          </p>
        )}

        {/* Bottom divider and link */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/65">
            Personal attention. Thoughtful care. A team that listens.
          </p>

          <Link
            to="/doctor"
            className="group inline-flex min-h-11 w-fit items-center gap-3 text-sm font-medium text-[#9be8c1] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9be8c1] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b3025]"
          >
            View all doctors
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
