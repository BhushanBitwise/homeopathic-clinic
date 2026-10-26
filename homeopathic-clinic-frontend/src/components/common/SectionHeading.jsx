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
        <div
          className={`flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#145c43] ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="w-7 h-[2px] bg-[#145c43]" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="font-serif text-3xl font-bold leading-[1.18] tracking-[-0.03em] text-[#112117] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#2f3f35] sm:text-lg font-normal">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;