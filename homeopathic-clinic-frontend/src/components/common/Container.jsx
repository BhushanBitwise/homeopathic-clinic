function Container({ children, className = "" }) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-[1440px]
        px-5
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12
        2xl:px-14
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container;