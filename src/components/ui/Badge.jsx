export const Badge = ({ children, status = 'neutral' }) => {
  const baseClasses = 'px-3 py-1 text-sm font-semibold rounded-full inline-block';
  const statusClasses = {
    positive: 'bg-green-100 text-green-800',
    negative: 'bg-red-100 text-red-800',
    neutral: 'bg-gray-100 text-gray-800',
  };

  return (
    <span className={`${baseClasses} ${statusClasses[status]}`}>
      {children}
    </span>
  );
};