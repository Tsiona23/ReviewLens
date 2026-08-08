import 'react';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';
import { Chip } from '../ui/Chip';

export const TopicsCard = ({ topics }) => {
  return (
    <Card>
      <SectionTitle>Key Topics</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Chip key={topic}>{topic}</Chip>
        ))}
      </div>
    </Card>
  );
};