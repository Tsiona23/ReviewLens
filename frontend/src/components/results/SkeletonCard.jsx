
export const SkeletonCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm animate-pulse">
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-6"></div>
      <div className="space-y-3">
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
      </div>
    </div>
  );
};