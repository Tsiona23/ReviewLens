import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';

export const SummaryCard = ({ summary }) => {
  return (
    <Card>
      <SectionTitle>AI Summary</SectionTitle>
      <p className="text-gray-600 leading-relaxed">{summary}</p>
    </Card>
  );
};