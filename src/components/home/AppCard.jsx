import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const AppCard = ({ name, icon, url }) => {
  return (
    <motion.div variants={itemVariants}>
      <Link to={url} className="block h-full">
        <div
          className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-lg text-center h-full transition-colors hover:bg-gray-800"
        >
          <img src={icon} alt={`${name} logo`} className="w-16 h-16 mb-3 rounded-2xl shadow-lg" />
          <span className="font-medium text-white text-sm">{name}</span>
        </div>
      </Link>
    </motion.div>
  );
};