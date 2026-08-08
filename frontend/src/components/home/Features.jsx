import { Container } from "../ui/Container";
import { motion } from "framer-motion";
import { Zap, BarChart, MessageSquareQuote } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant AI Summaries",
    description:
      "Get the gist of thousands of reviews in seconds. Our AI reads them all so you don't have to.",
  },
  {
    icon: BarChart,
    title: "Sentiment Analysis",
    description:
      "Understand the overall feeling towards an app with a clear breakdown of positive, neutral, and negative sentiment.",
  },
  {
    icon: MessageSquareQuote,
    title: "Key Pros & Cons",
    description:
      "Quickly identify the most common praises and complaints, extracted and summarized from user feedback.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need, nothing you don't.
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            ReviewLens provides powerful, easy-to-digest insights to help you make better decisions.
          </p>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} className="flex flex-col items-center text-center" variants={itemVariants}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300/10">
                <feature.icon className="h-6 w-6 text-blue-300" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold leading-7 text-white">{feature.title}</h3>
              <p className="mt-2 text-base leading-7 text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};