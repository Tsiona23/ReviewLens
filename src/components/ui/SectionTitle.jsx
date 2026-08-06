export const SectionTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`text-lg font-semibold text-gray-800 mb-4 ${className}`}>
      {children}
    </h3>
  );
};