import { motion } from 'framer-motion';
import { SummaryCard } from './SummaryCard';
import { SentimentChart } from './SentimentChart';
import { ProsConsCard } from './ProsConsCard';
import { TopicsCard } from './TopicsCard';
import { RecommendationCard } from './RecommendationCard';

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

export const DashboardGrid = ({ analysis }) => {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-6 mt-8 md:grid-cols-2"
    >
      <SummaryCard summary={analysis.summary} />
      <SentimentChart data={analysis.sentiment} />
      <ProsConsCard title="Pros" items={analysis.pros} type="pros" />
      <ProsConsCard title="Cons" items={analysis.cons} type="cons" />
      <TopicsCard topics={analysis.topics} />
      <RecommendationCard
        recommendation={analysis.recommendation}
        confidence={analysis.confidence}
      />
    </motion.div>
  );
};