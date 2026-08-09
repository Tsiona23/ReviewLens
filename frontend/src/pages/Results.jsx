import { useLocation, Navigate, Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { motion } from "framer-motion";
import { Check, X, Sparkles, ArrowLeft } from "lucide-react";

// A small component for rendering sentiment bars
const SentimentBar = ({ label, value, colorClass }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-gray-300">{label}</span>
      <span className="text-sm font-medium text-gray-400">{value}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div
        className={`${colorClass} h-2.5 rounded-full`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

export const Results = () => {
  const location = useLocation();
  const result = location.state?.result;

  // If a user navigates here directly without analysis data, redirect them home.
  if (!result) {
    return <Navigate to="/" replace />;
  }

  const { app, analysis } = result;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="bg-black text-white py-12 sm:py-16">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Back to Home Link */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
            >
              <ArrowLeft size={18} />
              Analyze another app
            </Link>
          </motion.div>

          {/* App Header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6 mb-12 p-6 border border-gray-800 rounded-2xl bg-gray-950"
          >
            <img
              src={app.icon}
              alt={`${app.title} icon`}
              className="w-24 h-24 rounded-3xl"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                {app.title}
              </h1>
              <p className="text-lg text-gray-400">{app.developer}</p>
            </div>
          </motion.div>

          {/* Main Grid for Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column (Main Analysis) */}
            <div className="lg:col-span-2 space-y-8">
              {/* AI Summary */}
              <motion.div
                variants={itemVariants}
                className="p-6 border border-gray-800 rounded-2xl bg-gray-950"
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="text-blue-300" /> AI Summary
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {analysis.summary}
                </p>
              </motion.div>

              {/* Pros and Cons */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Pros */}
                <div className="p-6 border border-green-400/20 rounded-2xl bg-green-400/5">
                  <h3 className="text-xl font-bold text-green-400 mb-4">
                    Pros
                  </h3>
                  <ul className="space-y-3">
                    {analysis.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-3">
                        <Check
                          className="w-5 h-5 mt-1 text-green-400 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-gray-300">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="p-6 border border-red-400/20 rounded-2xl bg-red-400/5">
                  <h3 className="text-xl font-bold text-red-400 mb-4">
                    Cons
                  </h3>
                  <ul className="space-y-3">
                    {analysis.cons.map((con) => (
                      <li key={con} className="flex items-start gap-3">
                        <X
                          className="w-5 h-5 mt-1 text-red-400 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-gray-300">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Column (Side Info) */}
            <div className="space-y-8">
              {/* Sentiment Analysis */}
              <motion.div
                variants={itemVariants}
                className="p-6 border border-gray-800 rounded-2xl bg-gray-950"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Sentiment
                </h2>
                <div className="space-y-4">
                  <SentimentBar
                    label="Positive"
                    value={analysis.sentiment.positive}
                    colorClass="bg-green-500"
                  />
                  <SentimentBar
                    label="Neutral"
                    value={analysis.sentiment.neutral}
                    colorClass="bg-blue-500"
                  />
                  <SentimentBar
                    label="Negative"
                    value={analysis.sentiment.negative}
                    colorClass="bg-red-500"
                  />
                </div>
              </motion.div>

              {/* Topics */}
              <motion.div
                variants={itemVariants}
                className="p-6 border border-gray-800 rounded-2xl bg-gray-950"
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  Common Topics
                </h2>
                <div className="flex flex-wrap gap-2">
                  {analysis.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* AI Verdict */}
          {analysis.recommendation && (
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 border border-blue-300/30 rounded-2xl bg-gray-950"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                AI Verdict
              </h2>
              <blockquote className="text-xl italic text-blue-200 border-l-4 border-blue-300 pl-4">
                "{analysis.recommendation.verdict}"
              </blockquote>
              <div className="mt-4 text-right text-sm text-blue-300">
                Confidence: {analysis.recommendation.confidence}%
              </div>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </main>
  );
};