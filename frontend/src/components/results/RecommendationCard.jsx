import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';
import { ConfidenceRing } from './ConfidenceRing';
import { Badge } from '../ui/Badge';

export const RecommendationCard = ({ recommendation, confidence }) => {
  return (
    <Card>
      <SectionTitle>Our Recommendation</SectionTitle>
      <div className="flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
        <div>
          <h4 className="text-sm text-gray-500 uppercase font-semibold mb-2">Verdict</h4>
          <Badge status={recommendation === 'Worth Downloading' ? 'positive' : 'negative'}>
            {recommendation}
          </Badge>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 uppercase font-semibold mb-2">Confidence</h4>
          <ConfidenceRing confidence={confidence} />
        </div>
      </div>
    </Card>
  );
};