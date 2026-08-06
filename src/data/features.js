import { BarChart, BrainCircuit, ThumbsUp, Zap } from 'lucide-react';

export const features = [
  {
    id: 'sentiment-analysis',
    icon: BarChart,
    title: 'Sentiment Analysis',
    description:
      'Understand the overall emotional tone of reviews with a clear positive, neutral, and negative breakdown.',
  },
  {
    id: 'ai-summary',
    icon: BrainCircuit,
    title: 'AI-Powered Summary',
    description: 'Get a concise, AI-generated summary of thousands of reviews, highlighting the most important points.',
  },
  {
    id: 'pros-cons',
    icon: ThumbsUp,
    title: 'Pros & Cons',
    description: 'Quickly see the most frequently mentioned positive and negative aspects of the app.',
  },
  {
    id: 'key-topics',
    icon: Zap,
    title: 'Key Topics',
    description: 'Discover the key themes and topics that users are talking about in their reviews.',
  },
];