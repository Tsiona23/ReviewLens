import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';

export const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center min-h-screen bg-black text-white"
    >
      <Container className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">This page doesn't exist.</p>
        <Link to="/" className="text-white bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg text-lg transition-colors">Back Home</Link>
      </Container>
    </motion.div>
  );
};