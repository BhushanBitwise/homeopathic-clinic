// import { useEffect, useState } from "react";
// import {
//   Menu,
//   MessageCircle,
//   X,
// } from "lucide-react";
// import {
//   Link,
//   NavLink,
// } from "react-router-dom";

// import Container from "../common/Container";
// import Button from "../common/Button";

// const navItems = [
//   {
//     label: "Home",
//     to: "/",
//   },
//   {
//     label: "About",
//     to: "/about",
//   },
//   {
//     label: "Treatments",
//     to: "/treatments",
//   },
//   {
//     label: "Doctor",
//     to: "/doctor",
//   },
//   {
//     label: "Contact",
//     to: "/contact",
//   },
// ];

// const whatsappUrl =
//   "https://wa.me/918767907569?text=Hello%20HealingCare%2C%20I%20would%20like%20to%20book%20a%20consultation.";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   /* --------------------------------
//      Scroll state
//   -------------------------------- */
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 12);
//     };

//     handleScroll();

//     window.addEventListener(
//       "scroll",
//       handleScroll,
//       { passive: true }
//     );

//     return () => {
//       window.removeEventListener(
//         "scroll",
//         handleScroll
//       );
//     };
//   }, []);

//   /* --------------------------------
//      Lock page scroll while menu open
//   -------------------------------- */
//   useEffect(() => {
//     if (!menuOpen) {
//       document.body.style.overflow = "";
//       return;
//     }

//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   /* --------------------------------
//      Close menu with Escape
//   -------------------------------- */
//   useEffect(() => {
//     if (!menuOpen) {
//       return;
//     }

//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         setMenuOpen(false);
//       }
//     };

//     window.addEventListener(
//       "keydown",
//       handleKeyDown
//     );

//     return () => {
//       window.removeEventListener(
//         "keydown",
//         handleKeyDown
//       );
//     };
//   }, [menuOpen]);

//   /* --------------------------------
//      Close menu when viewport becomes desktop
//   -------------------------------- */
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setMenuOpen(false);
//       }
//     };

//     window.addEventListener(
//       "resize",
//       handleResize,
//       { passive: true }
//     );

//     return () => {
//       window.removeEventListener(
//         "resize",
//         handleResize
//       );
//     };
//   }, []);

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   const toggleMenu = () => {
//     setMenuOpen((current) => !current);
//   };

//   return (
//     <header
//       className={`
//         fixed
//         inset-x-0
//         top-0
//         z-[100]
//         pt-[env(safe-area-inset-top)]
//         transition-all
//         duration-300

//         ${
//           scrolled
//             ? "border-b border-slate-900/8 bg-[#f8faf8]/95 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl"
//             : "bg-[#f8faf8]/92 backdrop-blur-md"
//         }
//       `}
//     >
//       {/* =========================================
//           MAIN NAVBAR
//       ========================================== */}
//       <Container>
//         <div className="flex h-[76px] items-center justify-between">
//           {/* ---------------------------------------
//               BRAND
//           ---------------------------------------- */}
//           <Link
//             to="/"
//             onClick={closeMenu}
//             aria-label="HealingCare Home"
//             className="group flex min-h-11 items-center gap-3"
//           >
//             <div
//               aria-hidden="true"
//               className="
//                 relative
//                 grid
//                 size-10
//                 shrink-0
//                 place-items-center
//                 overflow-hidden
//                 rounded-[14px]
//                 bg-[#145c43]
//                 text-white
//                 shadow-[0_8px_20px_rgba(20,92,67,0.18)]
//               "
//             >
//               <span className="absolute h-5 w-1 rounded-full bg-white/90" />

//               <span className="absolute h-1 w-5 rounded-full bg-white/90" />
//             </div>

//             <div className="leading-none">
//               <p className="text-[15px] font-bold tracking-[-0.02em] text-slate-950">
//                 HealingCare
//               </p>

//               <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500">
//                 Homeopathy Clinic
//               </p>
//             </div>
//           </Link>

//           {/* ---------------------------------------
//               DESKTOP NAVIGATION
//           ---------------------------------------- */}
//           <nav
//             aria-label="Primary navigation"
//             className="hidden items-center gap-1 lg:flex"
//           >
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.to}
//                 to={item.to}
//                 className={({ isActive }) =>
//                   `
//                     rounded-full
//                     px-4
//                     py-2.5
//                     text-[13px]
//                     font-medium
//                     transition-all
//                     duration-200

//                     ${
//                       isActive
//                         ? "bg-white text-[#145c43] shadow-sm"
//                         : "text-slate-600 hover:bg-white/70 hover:text-slate-950"
//                     }
//                   `
//                 }
//               >
//                 {item.label}
//               </NavLink>
//             ))}
//           </nav>

//           {/* ---------------------------------------
//               DESKTOP ACTIONS
//           ---------------------------------------- */}
//           <div className="hidden items-center gap-3 lg:flex">
//             <a
//               href={whatsappUrl}
//               target="_blank"
//               rel="noreferrer"
//               aria-label="Chat with HealingCare on WhatsApp"
//               className="
//                 grid
//                 size-12
//                 place-items-center
//                 rounded-full
//                 border
//                 border-slate-900/10
//                 bg-white
//                 text-[#145c43]
//                 shadow-sm
//                 transition-all
//                 duration-200
//                 hover:-translate-y-0.5
//                 hover:shadow-md
//               "
//             >
//               <MessageCircle
//                 size={19}
//                 strokeWidth={1.8}
//               />
//             </a>

//             <Button to="/appointment">
//               Book Appointment
//             </Button>
//           </div>

//           {/* ---------------------------------------
//               MOBILE MENU BUTTON
//           ---------------------------------------- */}
//           <button
//             type="button"
//             aria-label={
//               menuOpen
//                 ? "Close navigation menu"
//                 : "Open navigation menu"
//             }
//             aria-expanded={menuOpen}
//             aria-controls="mobile-navigation"
//             onClick={toggleMenu}
//             className="
//               relative
//               z-[120]
//               grid
//               size-11
//               shrink-0
//               place-items-center
//               rounded-full
//               border
//               border-slate-900/10
//               bg-white
//               text-slate-800
//               shadow-sm
//               transition-all
//               duration-200
//               active:scale-95
//               lg:hidden
//             "
//           >
//             <span
//               className={`
//                 transition-transform
//                 duration-200
//                 ${
//                   menuOpen
//                     ? "rotate-90"
//                     : "rotate-0"
//                 }
//               `}
//             >
//               {menuOpen ? (
//                 <X size={20} strokeWidth={2} />
//               ) : (
//                 <Menu size={20} strokeWidth={2} />
//               )}
//             </span>
//           </button>
//         </div>
//       </Container>

//       {/* =========================================
//           MOBILE MENU
//       ========================================== */}

//       <div
//         id="mobile-navigation"
//         aria-hidden={!menuOpen}
//         className={`
//           absolute
//           inset-x-0
//           top-full
//           z-[110]
//           border-t
//           border-slate-900/8
//           bg-[#f8faf8]
//           shadow-[0_20px_45px_rgba(15,23,42,0.08)]
//           transition-all
//           duration-300
//           lg:hidden

//           ${
//             menuOpen
//               ? "visible translate-y-0 opacity-100"
//               : "invisible -translate-y-2 opacity-0"
//           }
//         `}
//       >
//         {/* Drawer */}
//         <div
//           className="
//             max-h-[calc(100svh-76px-env(safe-area-inset-top))]
//             overflow-y-auto
//             overscroll-contain
//           "
//         >
//           <Container>
//             <div className="flex min-h-[calc(100svh-76px-env(safe-area-inset-top))] flex-col py-5">
//               {/* Navigation links */}
//               <nav
//                 aria-label="Mobile navigation"
//                 className="flex flex-col gap-2"
//               >
//                 {navItems.map(
//                   (item, index) => (
//                     <NavLink
//                       key={item.to}
//                       to={item.to}
//                       onClick={closeMenu}
//                       style={{
//                         transitionDelay: menuOpen
//                           ? `${index * 35}ms`
//                           : "0ms",
//                       }}
//                       className={({
//                         isActive,
//                       }) =>
//                         `
//                           flex
//                           min-h-14
//                           items-center
//                           justify-between
//                           rounded-2xl
//                           px-5
//                           text-base
//                           font-medium
//                           transition-all
//                           duration-300

//                           ${
//                             menuOpen
//                               ? "translate-x-0 opacity-100"
//                               : "-translate-x-4 opacity-0"
//                           }

//                           ${
//                             isActive
//                               ? "bg-emerald-50 text-[#145c43]"
//                               : "text-slate-700 hover:bg-white hover:text-slate-950"
//                           }
//                         `
//                       }
//                     >
//                       <span>
//                         {item.label}
//                       </span>

//                       <span
//                         aria-hidden="true"
//                         className={`
//                           text-lg
//                           transition-transform
//                           duration-200
//                           ${
//                             menuOpen
//                               ? "translate-x-0 opacity-100"
//                               : "-translate-x-2 opacity-0"
//                           }
//                         `}
//                       >
//                         →
//                       </span>
//                     </NavLink>
//                   )
//                 )}
//               </nav>

//               {/* Mobile bottom content */}
//               <div
//                 className="
//                   mt-auto
//                   border-t
//                   border-slate-900/8
//                   pt-5
//                   pb-[calc(1rem+env(safe-area-inset-bottom))]
//                 "
//               >
//                 <div className="grid gap-3 sm:grid-cols-2">
//                   {/* Appointment */}
//                   <Button
//                     to="/appointment"
//                     onClick={closeMenu}
//                     className="w-full"
//                   >
//                     Book Appointment
//                   </Button>

//                   {/* WhatsApp */}
//                   <a
//                     href={whatsappUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     onClick={closeMenu}
//                     className="
//                       inline-flex
//                       min-h-12
//                       items-center
//                       justify-center
//                       gap-2
//                       rounded-full
//                       border
//                       border-slate-900/10
//                       bg-white
//                       px-5
//                       text-sm
//                       font-semibold
//                       text-slate-800
//                       shadow-sm
//                       transition-all
//                       duration-200
//                       hover:border-emerald-800/20
//                       hover:bg-emerald-50
//                       active:scale-[0.98]
//                     "
//                   >
//                     <MessageCircle
//                       size={17}
//                       strokeWidth={1.8}
//                     />

//                     WhatsApp
//                   </a>
//                 </div>

//                 <p className="mt-5 text-center text-[10px] uppercase tracking-[0.16em] text-slate-400">
//                   Thoughtful care · Personal attention
//                 </p>
//               </div>
//             </div>
//           </Container>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;





import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import Container from "../common/Container";
import Button from "../common/Button";

const navItems = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Treatments",
    to: "/treatments",
  },
  {
    label: "Doctor",
    to: "/doctor",
  },
  {
    label: "Locations",
    to: "/locations",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const whatsappUrl =
  "https://wa.me/918767907569?text=Hello%20HealingCare%2C%20I%20would%20like%20to%20book%20a%20consultation.";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  /*
   * Close mobile menu.
   *
   * Defined BEFORE the effects so there is no
   * "used before defined" problem.
   */
  const closeMenu = useCallback(() => {
    const activeElement = document.activeElement;

    if (
      mobileMenuRef.current &&
      activeElement &&
      mobileMenuRef.current.contains(activeElement)
    ) {
      menuButtonRef.current?.focus();
    }

    setMenuOpen(false);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  /*
   * Scroll shadow
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Prevent background page scrolling
   * while mobile navigation is open.
   */
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /*
   * Escape key closes mobile menu.
   */
  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, closeMenu]);

  /*
   * If user rotates/resizes to desktop,
   * close the mobile menu.
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [closeMenu]);

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-[100]
        pt-[env(safe-area-inset-top)]
        transition-all
        duration-300
        ${
          scrolled
            ? "border-b border-slate-900/8 bg-[#f8faf8]/95 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
            : "bg-[#f8faf8]/95 backdrop-blur-md"
        }
      `}
    >
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <Container>
        <div className="flex h-[76px] items-center justify-between">
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            to="/"
            onClick={closeMenu}
            aria-label="HealingCare Home"
            className="group flex min-h-11 items-center gap-3"
          >
            <div
              aria-hidden="true"
              className="
                relative
                grid
                size-10
                shrink-0
                place-items-center
                overflow-hidden
                rounded-[14px]
                bg-[#145c43]
                shadow-[0_8px_20px_rgba(20,92,67,0.18)]
                transition-transform
                duration-200
                group-hover:scale-[1.03]
              "
            >
              <span className="absolute h-5 w-1 rounded-full bg-white" />
              <span className="absolute h-1 w-5 rounded-full bg-white" />
            </div>

            <div className="leading-none">
              <p className="text-[15px] font-bold tracking-[-0.02em] text-slate-950">
                HealingCare
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Homeopathy Clinic
              </p>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAV
          ================================================== */}

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `
                    relative
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-full
                    px-4
                    py-2.5
                    text-[13px]
                    font-medium
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "bg-white text-[#145c43] shadow-sm"
                        : "text-slate-600 hover:bg-white/70 hover:text-slate-950"
                    }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    <span
                      aria-hidden="true"
                      className={`
                        absolute
                        bottom-1.5
                        left-1/2
                        h-0.5
                        -translate-x-1/2
                        rounded-full
                        bg-[#145c43]
                        transition-all
                        duration-200
                        ${
                          isActive
                            ? "w-3 opacity-100"
                            : "w-0 opacity-0"
                        }
                      `}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                rounded-full
                border
                border-slate-900/10
                bg-white
                px-5
                text-sm
                font-semibold
                text-[#145c43]
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-emerald-800/20
                hover:bg-emerald-50
                active:scale-95
              "
            >
              WhatsApp
            </a>

            <Button
              to="/appointment"
              showArrow={false}
            >
              Book Appointment
            </Button>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
            className="
              relative
              z-[130]
              grid
              size-11
              place-items-center
              rounded-full
              border
              border-slate-900/10
              bg-white
              text-slate-800
              shadow-sm
              transition-all
              duration-200
              hover:border-emerald-800/20
              hover:bg-emerald-50
              active:scale-95
              lg:hidden
            "
          >
            <span
              className={`
                transition-transform
                duration-200
                ${menuOpen ? "rotate-90" : "rotate-0"}
              `}
            >
              {menuOpen ? (
                <X size={20} strokeWidth={2} />
              ) : (
                <Menu size={20} strokeWidth={2} />
              )}
            </span>
          </button>
        </div>
      </Container>

      {/* =====================================================
          MOBILE BACKDROP
      ====================================================== */}

      {menuOpen && (
        <div
          aria-hidden="true"
          onClick={closeMenu}
          className="
            fixed
            inset-0
            top-[calc(76px+env(safe-area-inset-top))]
            z-[105]
            bg-slate-950/20
            backdrop-blur-[2px]
            lg:hidden
          "
        />
      )}

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        ref={mobileMenuRef}
        id="mobile-navigation"
        className={`
          absolute
          inset-x-0
          top-full
          z-[110]
          overflow-hidden
          border-t
          border-slate-900/8
          bg-[#f8faf8]
          shadow-[0_20px_45px_rgba(15,23,42,0.08)]
          transition-all
          duration-300
          lg:hidden
          ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-2 opacity-0"
          }
        `}
      >
        <div className="max-h-[calc(100svh-76px-env(safe-area-inset-top))] overflow-y-auto overscroll-contain">
          <Container>
            <div className="flex min-h-[calc(100svh-76px-env(safe-area-inset-top))] flex-col py-5">
              {/* =================================================
                  MOBILE LINKS
              ================================================== */}

              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-2"
              >
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    style={{
                      transitionDelay: menuOpen
                        ? `${index * 35}ms`
                        : "0ms",
                    }}
                    className={({ isActive }) =>
                      `
                        flex
                        min-h-14
                        items-center
                        justify-between
                        rounded-2xl
                        px-5
                        text-base
                        font-medium
                        transition-all
                        duration-300
                        ${
                          menuOpen
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-4 opacity-0"
                        }
                        ${
                          isActive
                            ? "bg-emerald-50 text-[#145c43] shadow-sm"
                            : "text-slate-700 hover:bg-white hover:text-slate-950"
                        }
                      `
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{item.label}</span>

                        {isActive && (
                          <span
                            aria-hidden="true"
                            className="size-1.5 rounded-full bg-[#145c43]"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* =================================================
                  MOBILE ACTIONS
              ================================================== */}

              <div className="mt-auto border-t border-slate-900/8 pt-5 pb-[calc(1rem+env(safe-area-inset-bottom))]">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Button
                    to="/appointment"
                    showArrow={false}
                    onClick={closeMenu}
                    className="w-full"
                  >
                    Book Appointment
                  </Button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="
                      inline-flex
                      min-h-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-900/10
                      bg-white
                      px-5
                      text-sm
                      font-semibold
                      text-slate-800
                      shadow-sm
                      transition-all
                      duration-200
                      hover:border-emerald-800/20
                      hover:bg-emerald-50
                      active:scale-[0.98]
                    "
                  >
                    WhatsApp
                  </a>
                </div>

                <p className="mt-5 text-center text-[10px] uppercase tracking-[0.16em] text-slate-400">
                  Thoughtful care · Personal attention
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}

export default Navbar;