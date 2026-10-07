function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-2xl text-center"
      : "max-w-2xl";

  return (
    <div className={alignment}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;