export const SectionHeader = ({ id, title, description }) => {
  return (
    <div className="text-center mb-12">
      <h2 id={id} className="text-2xl md:text-3xl font-semibold text-blue-300">
        {title}
      </h2>
      <p className="mt-4 text-base text-gray-400 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};