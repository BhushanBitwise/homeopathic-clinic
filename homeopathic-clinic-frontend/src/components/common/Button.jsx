// import { ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";

// function Button({
//   children,
//   to,
//   href,
//   variant = "primary",
//   className = "",
//   type = "button",
//   onClick,
//   showArrow = true,
// }) {
//   const base =
//     "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-[-0.01em] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/30 focus-visible:ring-offset-2";

//   const variants = {
//     primary:
//       "bg-[#145c43] text-white shadow-[0_8px_24px_rgba(20,92,67,0.18)] hover:-translate-y-0.5 hover:bg-[#104d39] hover:shadow-[0_12px_30px_rgba(20,92,67,0.24)]",

//     secondary:
//       "border border-slate-900/10 bg-white text-slate-900 shadow-sm hover:-translate-y-0.5 hover:border-emerald-800/20 hover:bg-emerald-50",

//     ghost:
//       "text-slate-700 hover:bg-white hover:text-emerald-800",
//   };

//   const classes = `${base} ${variants[variant]} ${className}`;

//   const content = (
//     <>
//       {children}

//       {showArrow && (
//         <ArrowUpRight
//           size={17}
//           strokeWidth={2}
//           className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//         />
//       )}
//     </>
//   );

//   if (to) {
//     return (
//       <Link
//         to={to}
//         className={classes}
//       >
//         {content}
//       </Link>
//     );
//   }

//   if (href) {
//     return (
//       <a
//         href={href}
//         target="_blank"
//         rel="noreferrer"
//         className={classes}
//       >
//         {content}
//       </a>
//     );
//   }

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={classes}
//     >
//       {content}
//     </button>
//   );
// }

// export default Button;


import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  showArrow = true,
  disabled = false,
}) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-[-0.01em] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-[#145c43] text-white shadow-[0_8px_24px_rgba(20,92,67,0.18)] hover:-translate-y-0.5 hover:bg-[#104d39] hover:shadow-[0_12px_30px_rgba(20,92,67,0.24)]",

    secondary:
      "border border-slate-900/10 bg-white text-slate-900 shadow-sm hover:-translate-y-0.5 hover:border-emerald-800/20 hover:bg-emerald-50",

    ghost:
      "text-slate-700 hover:bg-white hover:text-emerald-800",

    light:
      "bg-white !text-[#12372a] shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)]",
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      <span>{children}</span>

      {showArrow && (
        <ArrowUpRight
          size={17}
          strokeWidth={2}
          aria-hidden="true"
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        aria-disabled={disabled}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default Button;