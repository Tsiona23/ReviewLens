import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';

export const ProsConsCard = ({ title, items, type }) => {
  const Icon = type === 'pros' ? ThumbsUp : ThumbsDown;
  const iconColor = type === 'pros' ? 'text-green-500' : 'text-red-500';

  return (
    <Card>
      <SectionTitle>{title}</SectionTitle>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={`${item}-${index}`} className="flex items-start">
            <Icon className={`w-5 h-5 mr-3 mt-1 shrink-0 ${iconColor}`} />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};