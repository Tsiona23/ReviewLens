export const SectionHeader = ({ id, title, description }) => {
  return (
    <div className="text-center mb-12">
      <h2 id={id} className="text-3xl font-bold text-blue-300">
        {title}
      </h2>
      <p className="mt-4 text-lg text-[#BDBDBD] max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};