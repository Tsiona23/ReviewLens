import { motion } from "framer-motion";
import { Card } from "../ui/Card";

export const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.12,
        duration: 0.5,
      }}
      viewport={{ once: true }}
    >
      <Card className="h-full p-8">

        <div className="w-12 h-12 rounded-2xl bg-[#111111] border border-[#2A2A2A] flex items-center justify-center mb-6">
          <Icon size={22} />
        </div>

        <h3 className="text-xl font-semibold mb-3">
          {feature.title}
        </h3>

        <p className="text-[#BDBDBD] leading-7">
          {feature.description}
        </p>

      </Card>
    </motion.div>
  );
};