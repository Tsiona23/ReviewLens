import { Check, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Card } from "../ui/Card";

const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const statItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const PreviewCard = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.6,
      }}
      className=""
    >
      <Card
        role="region"
        aria-labelledby="preview-card-heading"
        className="relative overflow-hidden border border-gray-800 bg-gray-950/80 p-6 shadow-xl"
      >
        {/* Glow */}
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-300/10 blur-[100px]" />

        <div className="relative flex flex-col gap-8">

          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-blue-300">
                <Sparkles size={14} aria-hidden="true" />
                AI SUMMARY
              </div>

              <h2
                id="preview-card-heading"
                className="mt-5 text-3xl font-bold text-white"
              >
                {data.name}
              </h2>

              <p className="mt-2 text-gray-400">
                {data.developer}
              </p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={statsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div variants={statItemVariants}>
                <div className="rounded-2xl border border-gray-800 bg-black/50 p-5 text-center">
                  <p
                    className="text-3xl font-bold text-blue-300"
                    aria-label={`${data.rating} stars`}
                  >
                    {data.rating}
                    <span aria-hidden="true">★</span>
                  </p>

                  <p className="mt-1 text-sm text-gray-400" aria-hidden="true">
                    Rating
                  </p>
                </div>
              </motion.div>

              <motion.div variants={statItemVariants}>
                <div className="rounded-2xl border border-gray-800 bg-black/50 p-5 text-center">
                  <p
                    className="text-3xl font-bold text-blue-300"
                    aria-label={`${data.confidence} percent confidence`}
                  >
                    {data.confidence}%
                  </p>

                  <p className="mt-1 text-sm text-gray-400" aria-hidden="true">
                    Confidence
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* AI Summary */}
          <div className="rounded-2xl border border-gray-800 bg-black/40 p-6">
            <h3 className="mb-3 font-semibold text-blue-300">
              AI Summary
            </h3>

            <p className="leading-7 text-gray-300">
              {data.summary}
            </p>
          </div>

          {/* Pros and Cons */}
          <div className="grid gap-8 md:grid-cols-2">

            {/* Pros */}
            <div>
              <h3 className="mb-4 font-semibold text-blue-300">
                Pros
              </h3>

              <ul className="space-y-3">
                {data.pros.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-full bg-green-400/10 p-1">
                      <Check
                        size={16}
                        className="text-green-400"
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div>
              <h3 className="mb-4 font-semibold text-blue-300">
                Cons
              </h3>

              <ul className="space-y-3">
                {data.cons.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-full bg-red-400/10 p-1">
                      <X
                        size={16}
                        className="text-red-400"
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sentiment */}
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
            variants={statsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div variants={statItemVariants}>
              <Card className="border border-gray-800 bg-black/50 p-5 text-center">
                <p
                  className="text-3xl font-bold text-green-400"
                  aria-label={`${data.sentiment.positive} percent positive`}
                >
                  {data.sentiment.positive}%
                </p>

                <p className="mt-2 text-sm text-gray-400" aria-hidden="true">
                  Positive
                </p>
              </Card>
            </motion.div>

            <motion.div variants={statItemVariants}>
              <Card className="border border-gray-800 bg-black/50 p-5 text-center">
                <p
                  className="text-3xl font-bold text-blue-300"
                  aria-label={`${data.sentiment.neutral} percent neutral`}
                >
                  {data.sentiment.neutral}%
                </p>

                <p className="mt-2 text-sm text-gray-400" aria-hidden="true">
                  Neutral
                </p>
              </Card>
            </motion.div>

            <motion.div variants={statItemVariants}>
              <Card className="border border-gray-800 bg-black/50 p-5 text-center">
                <p
                  className="text-3xl font-bold text-red-400"
                  aria-label={`${data.sentiment.negative} percent negative`}
                >
                  {data.sentiment.negative}%
                </p>

                <p className="mt-2 text-sm text-gray-400" aria-hidden="true">
                  Negative
                </p>
              </Card>
            </motion.div>
          </motion.div>

          {/* Verdict */}
          {data.verdict && (
            <div className="rounded-2xl border border-blue-300/20 bg-blue-300/5 p-6">
              <h3 className="mb-4 font-semibold text-blue-300">
                AI Verdict
              </h3>

              <p className="text-xl font-bold text-white">
                {data.verdict.verdict}
              </p>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-1 text-sm font-medium text-gray-400">
                    Best For
                  </p>

                  <p className="text-sm leading-6 text-gray-300">
                    {data.verdict.bestFor}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-sm font-medium text-gray-400">
                    Avoid If
                  </p>

                  <p className="text-sm leading-6 text-gray-300">
                    {data.verdict.avoidIf}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <span className="text-sm text-gray-400">
                  Verdict confidence:
                </span>{" "}
                <span className="font-semibold text-blue-300">
                  {data.verdict.confidence}%
                </span>
              </div>
            </div>
          )}

        </div>
      </Card>
    </motion.div>
  );
};