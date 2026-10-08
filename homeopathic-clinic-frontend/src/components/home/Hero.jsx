// import { preload } from "react-dom";
// import {
//   ArrowUpRight,
//   Check,
//   MessageCircle,
// } from "lucide-react";

// import Container from "../common/Container";
// import Button from "../common/Button";

// import doctorImage from "../../assets/images/doctor.webp";

// preload(doctorImage, {
//   as: "image",
//   fetchPriority: "high",
// });

// const trustPoints = [
//   "Personalised care",
//   "Patient-first approach",
//   "Comfortable consultations",
// ];

// function Hero() {
//   return (
//     <section className="relative isolate overflow-hidden bg-[#f8faf8] pt-[76px]">
//       {/* =========================================================
//           BACKGROUND
//       ========================================================== */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
//       >
//         <div className="absolute -left-[18rem] top-[4rem] size-[38rem] rounded-full bg-emerald-100/35 blur-3xl" />

//         <div className="absolute -right-[18rem] -top-[14rem] size-[42rem] rounded-full bg-amber-100/20 blur-3xl" />

//         <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-white/80 to-transparent" />
//       </div>

//       <Container>
//         {/* =======================================================
//             MAIN HERO GRID

//             Left = 58%
//             Right = 42%

//             The important change:
//             left content gets the actual available width.
//         ======================================================== */}
//         <div
//           className="
//             grid
//             items-center
//             gap-8
//             py-10

//             sm:gap-10
//             sm:py-14

//             lg:min-h-[calc(100svh-76px)]
//             lg:grid-cols-[minmax(0,1.15fr)_minmax(390px,0.85fr)]
//             lg:gap-8
//             lg:py-10

//             xl:grid-cols-[minmax(0,1.12fr)_500px]
//             xl:gap-10

//             2xl:grid-cols-[minmax(0,1.14fr)_530px]
//             2xl:gap-12
//           "
//         >
//           {/* =====================================================
//               LEFT CONTENT
//           ====================================================== */}
//           <div className="min-w-0 max-w-[820px]">
//             {/* Eyebrow */}
//             <div className="mb-7 flex items-center gap-3 sm:mb-8">
//               <span
//                 aria-hidden="true"
//                 className="h-px w-11 bg-[#145c43]"
//               />

//               <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#145c43] sm:text-[10px]">
//                 Thoughtful homeopathic care
//               </span>
//             </div>

//             {/* =================================================
//                 HEADLINE

//                 Important:
//                 We intentionally use 2 visual lines on desktop.
//                 This removes the dead horizontal space.
//             ================================================== */}
//             <h1
//               className="
//                 max-w-[790px]
//                 text-[clamp(3.25rem,6vw,6.6rem)]
//                 font-medium
//                 leading-[0.94]
//                 tracking-[-0.065em]
//                 text-[#101713]

//                 sm:text-[clamp(4rem,6vw,6.7rem)]
//                 sm:leading-[0.92]

//                 lg:text-[clamp(4rem,5.45vw,6.35rem)]

//                 xl:text-[clamp(4.5rem,5.45vw,6.7rem)]

//                 2xl:text-[6.8rem]
//               "
//             >
//               <span className="block whitespace-nowrap">
//                 Care that
//               </span>

//               <span className="block whitespace-nowrap text-[#145c43]">
//                 actually listens.
//               </span>
//             </h1>

//             {/* Editorial line */}
//             <div className="mt-7 flex items-center gap-3 sm:mt-8">
//               <span className="h-px w-20 bg-[#145c43]" />

//               <span className="size-1.5 rounded-full bg-[#145c43]" />
//             </div>

//             {/* Description */}
//             <p
//               className="
//                 mt-6
//                 max-w-[650px]
//                 text-[15px]
//                 leading-7
//                 text-slate-600

//                 sm:mt-7
//                 sm:text-[16px]
//                 sm:leading-8
//               "
//             >
//               A thoughtful consultation begins with listening. We take time
//               to understand your concerns, your experience and what matters
//               to you — creating a more comfortable and personal healthcare
//               experience.
//             </p>

//             {/* =================================================
//                 ACTIONS
//             ================================================== */}
//             <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
//               <Button
//                 to="/appointment"
//                 className="w-full sm:w-auto"
//               >
//                 Book a consultation
//               </Button>

//               <a
//                 href="https://wa.me/918767907569?text=Hello%20HealingCare%2C%20I%20would%20like%20to%20know%20more%20about%20booking%20a%20consultation."
//                 target="_blank"
//                 rel="noreferrer"
//                 className="
//                   group
//                   inline-flex
//                   min-h-12
//                   items-center
//                   justify-center
//                   gap-2
//                   px-2
//                   text-sm
//                   font-medium
//                   text-slate-600
//                   transition-colors
//                   duration-200
//                   hover:text-[#145c43]
//                   sm:justify-start
//                 "
//               >
//                 <span className="grid size-8 place-items-center rounded-full border border-slate-900/10 bg-white">
//                   <MessageCircle
//                     size={15}
//                     strokeWidth={1.8}
//                   />
//                 </span>

//                 WhatsApp consultation

//                 <ArrowUpRight
//                   size={14}
//                   className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </a>
//             </div>

//             {/* =================================================
//                 TRUST RAIL

//                 Full width instead of being constrained to
//                 the headline width.
//             ================================================== */}
//             <div className="mt-9 border-t border-slate-900/10 pt-5 sm:mt-10 sm:pt-6">
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
//                 {trustPoints.map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-2.5"
//                   >
//                     <span className="grid size-4 shrink-0 place-items-center rounded-full bg-emerald-100 text-[#145c43]">
//                       <Check
//                         size={9}
//                         strokeWidth={3}
//                       />
//                     </span>

//                     <span className="text-[10px] font-medium leading-5 text-slate-500">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* =====================================================
//               RIGHT — DOCTOR COMPOSITION
//           ====================================================== */}
//           <div
//             className="
//               relative
//               mx-auto
//               w-full
//               max-w-[500px]

//               lg:ml-[-4px]
//               lg:max-w-[455px]

//               xl:ml-[-10px]
//               xl:max-w-[490px]

//               2xl:ml-[-8px]
//               2xl:max-w-[525px]
//             "
//           >
//             {/* Architectural offset frame */}
//             <div
//               aria-hidden="true"
//               className="
//                 absolute
//                 -right-3
//                 -top-3
//                 h-full
//                 w-full
//                 rounded-[2rem]
//                 border
//                 border-[#145c43]/10

//                 sm:-right-4
//                 sm:-top-4
//                 sm:rounded-[2.25rem]
//               "
//             />

//             {/* =================================================
//                 SINGLE PHOTO UNIT
//             ================================================== */}
//             <figure
//               className="
//                 relative
//                 overflow-hidden
//                 rounded-[2rem]
//                 border
//                 border-white
//                 bg-white
//                 p-2
//                 shadow-[0_28px_80px_rgba(20,60,45,0.12)]

//                 sm:rounded-[2.25rem]
//                 sm:p-2.5
//               "
//             >
//               {/* Photo */}
//               <div
//                 className="
//                   relative
//                   overflow-hidden
//                   rounded-[1.55rem]
//                   bg-[#dcece3]

//                   sm:rounded-[1.85rem]
//                 "
//               >
//                 <img
//                   src={doctorImage}
//                   alt="Homeopathic doctor at the clinic"
//                   width="900"
//                   height="1024"
//                   loading="eager"
//                   fetchPriority="high"
//                   decoding="async"
//                   className="
//                     block
//                     aspect-[0.9]
//                     w-full
//                     object-cover
//                     object-center
//                   "
//                 />

//                 <div
//                   aria-hidden="true"
//                   className="
//                     pointer-events-none
//                     absolute
//                     inset-0
//                     bg-gradient-to-t
//                     from-[#102f25]/15
//                     via-transparent
//                     to-transparent
//                   "
//                 />
//               </div>

//               {/* =================================================
//                   INTEGRATED CAPTION
//               ================================================== */}
//               <figcaption className="px-4 pb-4 pt-5 sm:px-5 sm:pb-5 sm:pt-6">
//                 <div className="flex items-end justify-between gap-5">
//                   <div>
//                     <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#145c43]">
//                       The consultation
//                     </p>

//                     <h2 className="mt-2 text-[17px] font-medium leading-tight tracking-[-0.025em] text-slate-900 sm:text-lg">
//                       A calmer place to begin.
//                     </h2>

//                     <p className="mt-1.5 max-w-[320px] text-[11px] leading-5 text-slate-500">
//                       Care starts with understanding the person behind the
//                       concern.
//                     </p>
//                   </div>

//                   <span className="hidden size-9 shrink-0 place-items-center rounded-full border border-slate-900/10 bg-[#f8faf8] text-slate-500 sm:grid">
//                     <ArrowUpRight size={14} />
//                   </span>
//                 </div>
//               </figcaption>
//             </figure>

//             {/* Corner details */}
//             <span
//               aria-hidden="true"
//               className="
//                 absolute
//                 -bottom-3
//                 -left-3
//                 hidden
//                 size-14
//                 border-b
//                 border-l
//                 border-emerald-900/20

//                 sm:block
//               "
//             />

//             <span
//               aria-hidden="true"
//               className="
//                 absolute
//                 -right-3
//                 -top-3
//                 hidden
//                 size-14
//                 border-r
//                 border-t
//                 border-amber-500/40

//                 sm:block
//               "
//             />
//           </div>
//         </div>

//         {/* =======================================================
//             BOTTOM SIGNATURE
//         ======================================================== */}
//         <div className="border-t border-slate-900/10 py-5 sm:py-6">
//           <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
//             <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400">
//               A calmer approach to healthcare
//             </p>

//             <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400">
//               Listen · Understand · Care
//             </p>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// export default Hero;

















import { preload } from "react-dom";
import {
  ArrowUpRight,
  Check,
  MessageCircle,
} from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

import doctorImage from "../../assets/images/Dr-Pranita.webp";

preload(doctorImage, {
  as: "image",
  fetchPriority: "high",
});

const trustPoints = [
  "Personalised care",
  "Patient-first approach",
  "Comfortable consultations",
];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8faf8] pt-[76px]">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 -top-32 size-[34rem] rounded-full bg-emerald-100/35 blur-3xl" />

        <div className="absolute -right-48 top-0 size-[38rem] rounded-full bg-amber-100/20 blur-3xl" />

        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-white/80 to-transparent" />
      </div>

      <Container>
        <div
          className="
            grid
            gap-10
            py-10

            sm:gap-12
            sm:py-14

            lg:min-h-[calc(100svh-76px)]
            lg:grid-cols-[minmax(0,1fr)_minmax(390px,0.78fr)]
            lg:items-center
            lg:gap-7
            lg:py-12

            xl:grid-cols-[minmax(0,1fr)_500px]
            xl:gap-9

            2xl:grid-cols-[minmax(0,1fr)_530px]
            2xl:gap-12
          "
        >
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="min-w-0 lg:pr-2">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-12 bg-[#145c43]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#145c43]">
                Thoughtful homeopathic care
              </span>
            </div>

            <h1
              className="
                mt-7
                max-w-[760px]
                text-[clamp(3.15rem,7vw,6.35rem)]
                font-medium
                leading-[0.93]
                tracking-[-0.065em]
                text-[#101713]

                sm:mt-8
                sm:text-[clamp(4rem,7vw,6.6rem)]

                lg:mt-9
                lg:text-[clamp(4.2rem,5.4vw,6.25rem)]

                xl:text-[clamp(4.5rem,5.3vw,6.5rem)]
              "
            >
              <span className="block">
                Care that
              </span>

              <span className="block text-[#145c43]">
                actually listens.
              </span>
            </h1>

            <div className="mt-7 flex items-center gap-3 sm:mt-8">
              <span className="h-px w-20 bg-[#145c43]" />

              <span className="size-1.5 rounded-full bg-[#145c43]" />
            </div>

            <p
              className="
                mt-6
                max-w-[680px]
                text-[15px]
                leading-7
                text-slate-600

                sm:mt-7
                sm:text-[16px]
                sm:leading-8

                lg:max-w-[690px]
              "
            >
              A thoughtful consultation begins with listening. We take time
              to understand your concerns, your experience and what matters
              to you — creating a more comfortable and personal healthcare
              experience.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <Button
                to="/appointment"
                showArrow
                className="w-full sm:w-auto"
              >
                Book a consultation
              </Button>

              <a
                href="https://wa.me/918767907569?text=Hello%20HealingCare%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  px-1
                  text-sm
                  font-medium
                  text-slate-600
                  transition-colors
                  duration-200
                  hover:text-[#145c43]

                  sm:justify-start
                "
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-slate-900/10 bg-white">
                  <MessageCircle
                    size={15}
                    strokeWidth={1.8}
                  />
                </span>

                <span>WhatsApp consultation</span>

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Mobile / tablet image */}
            <div className="mt-10 lg:hidden">
              <DoctorComposition />
            </div>

            {/* Trust row */}
            <div className="mt-9 border-t border-slate-900/10 pt-5 sm:mt-10 sm:pt-6">
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
                {trustPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5"
                  >
                    <span className="grid size-4 shrink-0 place-items-center rounded-full bg-emerald-100 text-[#145c43]">
                      <Check
                        size={9}
                        strokeWidth={3}
                      />
                    </span>

                    <span className="text-[10px] font-medium leading-5 text-slate-500">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================
              DESKTOP IMAGE
          ========================== */}
          <div className="hidden lg:block">
            <DoctorComposition />
          </div>
        </div>

        {/* Small editorial footer */}
        <div className="border-t border-slate-900/10 py-5 sm:py-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400">
              A calmer approach to healthcare
            </span>

            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Listen · Understand · Care
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

function DoctorComposition() {
  return (
    <div className="relative mx-auto w-full max-w-[530px]">
      {/* Offset frame */}
      <div
        aria-hidden="true"
        className="
          absolute
          -right-3
          -top-3
          h-full
          w-full
          rounded-[2rem]
          border
          border-[#145c43]/10

          sm:-right-4
          sm:-top-4
          sm:rounded-[2.25rem]
        "
      />

      {/* Main photographic composition */}
      <figure
        className="
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-white
          bg-white
          p-2
          shadow-[0_28px_80px_rgba(20,60,45,0.12)]

          sm:rounded-[2.25rem]
          sm:p-2.5
        "
      >
        <div className="overflow-hidden rounded-[1.55rem] bg-[#dcece3] sm:rounded-[1.85rem]">
          <img
            src={doctorImage}
            alt="Homeopathic doctor at the clinic"
            width="900"
            height="1024"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="
              aspect-[0.92]
              w-full
              object-cover
              object-center
            "
          />
        </div>

        {/* Caption */}
        <figcaption className="px-4 pb-4 pt-5 sm:px-5 sm:pb-5 sm:pt-6">
          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#145c43]">
            The consultation
          </p>

          <div className="mt-2 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-[17px] font-medium leading-tight tracking-[-0.025em] text-slate-900 sm:text-lg">
                A calmer place to begin.
              </h2>

              <p className="mt-1.5 max-w-[330px] text-[11px] leading-5 text-slate-500">
                Care starts with understanding the person behind the concern.
              </p>
            </div>

            <span
              aria-hidden="true"
              className="hidden size-9 shrink-0 place-items-center rounded-full border border-slate-900/10 bg-[#f8faf8] text-slate-500 sm:grid"
            >
              <ArrowUpRight size={14} />
            </span>
          </div>
        </figcaption>
      </figure>

      {/* Minimal editorial corners */}
      <span
        aria-hidden="true"
        className="absolute -bottom-3 -left-3 hidden size-14 border-b border-l border-emerald-900/20 sm:block"
      />

      <span
        aria-hidden="true"
        className="absolute -right-3 -top-3 hidden size-14 border-r border-t border-amber-500/40 sm:block"
      />
    </div>
  );
}

export default Hero;