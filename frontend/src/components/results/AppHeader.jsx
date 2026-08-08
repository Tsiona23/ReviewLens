import { Star } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const AppHeader = ({ appName, publisher, rating, verdict, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{appName}</h1>
        <p className="text-lg text-gray-500">{publisher}</p>
      </div>
      <div className="flex items-center gap-4 mt-4 sm:mt-0">
        <div className="flex items-center gap-1 text-lg">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="font-bold">{rating}</span>
        </div>
        <Badge status={verdict === 'Worth Downloading' ? 'positive' : 'negative'}>
          {verdict}
        </Badge>
      </div>
    </div>
  );
};