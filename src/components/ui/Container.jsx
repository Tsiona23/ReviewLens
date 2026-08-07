export function Container({ children, className = "" }) {
  return (
    <div
      className={`
        max-w-7xl
        mx-auto
        px-6
        md:px-8
        lg:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}