import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

export const StepCard = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.15,
        duration: 0.5,
      }}
      viewport={{ once: true }}
    >
      <Card className="h-full p-8 bg-transparent border-gray-800 text-blue-300">
        <div className="text-5xl font-bold text-gray-700 mb-4">{step.stepNumber}</div>
        <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
        <p className="text-blue-300leading-7">{step.description}</p>
      </Card>
    </motion.div>
  );
};