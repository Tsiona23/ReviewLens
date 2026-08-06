import { motion } from 'framer-motion';

const defaultCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Card = ({ children, className = '', variants = defaultCardVariants, ...props }) => {
  return (
    <motion.div
      variants={variants}
      className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};