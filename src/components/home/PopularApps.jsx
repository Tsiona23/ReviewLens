import { Container } from '../ui/Container';
import { AppCard } from './AppCard';
import { popularApps } from '../../data/popularApps.js';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const PopularApps = () => {
  return (
    <section aria-labelledby="popular-apps-heading" className="py-20 bg-black">
      <Container>
        <h2 id="popular-apps-heading" className="text-3xl font-bold text-center text-white mb-12">
          Popular Apps
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6"
        >
          {popularApps.map((app) => (
            <AppCard key={app.name} name={app.name} icon={app.icon} url={app.url} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};