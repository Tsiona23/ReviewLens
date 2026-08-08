import { Container } from "../ui/Container";
import { motion } from "framer-motion";
import { ClipboardPaste, BrainCircuit, BarChartBig } from "lucide-react";

const steps = [
  {
    icon: ClipboardPaste,
    title: "1. Paste a URL",
    description:
      "Copy the URL of any app from the Google Play Store or Apple App Store and paste it into our search bar.",
  },
  {
    icon: BrainCircuit,
    title: "2. AI-Powered Analysis",
    description:
      "Our AI gets to work, reading and processing thousands of reviews to identify key themes, sentiment, and user feedback.",
  },
  {
    icon: BarChartBig,
    title: "3. Get Your Insights",
    description:
      "Receive a comprehensive, easy-to-read report with a summary, pros & cons, and a full sentiment breakdown.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-32">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Get from URL to full analysis in three simple steps.
          </p>
        </div>

        <motion.div
          className="relative mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Dashed line connector for larger screens */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-6 hidden h-px w-full border-t-2 border-dashed border-gray-700 lg:block"
          />

          <div className="relative grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            {steps.map((step) => (
              <motion.div key={step.title} variants={itemVariants} className="flex flex-col items-center text-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-300 bg-black">
                  <step.icon className="h-6 w-6 text-blue-300" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-base text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};