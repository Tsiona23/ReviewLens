export const Badge = ({ children, status = 'neutral' }) => {
  const baseClasses = 'inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium';

  let statusSpecificClasses;
  switch (status) {
    case 'positive':
      statusSpecificClasses = 'bg-green-400/10 text-green-400 border border-green-400/20';
      break;
    case 'negative':
      statusSpecificClasses = 'bg-red-400/10 text-red-400 border border-red-400/20';
      break;
    case 'neutral': // Default for general badges, AI Summary, Confidence, etc.
    default:
      statusSpecificClasses = 'bg-blue-300/10 text-blue-300 border border-blue-300/20';
      break;
  }

  return (
    <span className={`${baseClasses} ${statusSpecificClasses}`}>
      {children}
    </span>
  );
};