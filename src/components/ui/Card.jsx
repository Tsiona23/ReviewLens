import { motion } from 'framer-motion';

const defaultCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Card = ({ children, className = '', variants = defaultCardVariants, ...props }) => {
  return (
    <motion.div
      variants={variants}
      className={`bg-gray-950/80 border border-gray-800 rounded-2xl p-6 shadow-xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};