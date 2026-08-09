
import { useLocation, Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { motion } from "framer-motion";
import {
  Check,
  X,
  Sparkles,
  ArrowLeft,
  Star,
  ShieldCheck,
} from "lucide-react";

const SentimentBar = ({ label, value, colorClass }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-300">{label}</span>
        <span className="text-sm font-medium text-white">{value}%</span>
      </div>

      <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
        <div
          className={`h-full rounded-full ${colorClass}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export const Results = () => {
  const location = useLocation();

  // Real analysis returned by the backend
  const result = location.state?.result;

  // If the page is opened directly without analysis data
  if (!result) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-3">
            No analysis found
          </h1>

          <p className="text-gray-400 mb-6">
            Please enter an app URL from the homepage to start an analysis.
          </p>

          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-blue-300
              px-5
              py-3
              font-medium
              text-black
              transition
              hover:bg-blue-200
            "
          >
            <ArrowLeft size={18} />
            Analyze an App
          </Link>
        </div>
      </main>
    );
  }

  const { app, analysis, reviewStats } = result;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main className="min-h-screen bg-black text-white py-12">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Back */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-2
                text-gray-400
                hover:text-blue-300
                transition
              "
            >
              <ArrowLeft size={18} />
              Analyze another app
            </Link>
          </motion.div>

          {/* App Header */}
          <motion.div
            variants={itemVariants}
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              gap-6
              mb-12
              p-6
              border
              border-gray-800
              rounded-2xl
              bg-gray-950
            "
          >
            {app.icon && (
              <img
                src={app.icon}
                alt={`${app.title} icon`}
                className="w-24 h-24 rounded-3xl object-cover"
              />
            )}

            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                  {app.title}
                </h1>

                {analysis.recommendation?.verdict && (
                  <span
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      px-3
                      py-1
                      rounded-full
                      bg-blue-300/10
                      border
                      border-blue-300/20
                      text-blue-300
                      text-sm
                      font-medium
                    "
                  >
                    <ShieldCheck size={16} />
                    {analysis.recommendation.verdict}
                  </span>
                )}
              </div>

              <p className="text-lg text-gray-400 mt-1">
                {app.developer}
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-4 text-sm text-gray-400">
                {app.category && (
                  <span>{app.category}</span>
                )}

                {app.rating && (
                  <span className="flex items-center gap-1">
                    <Star
                      size={15}
                      className="text-blue-300"
                      fill="currentColor"
                    />
                    {app.rating}
                  </span>
                )}

                {reviewStats && (
                  <span>
                    {reviewStats.analyzed} reviews analyzed
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-8">

              {/* AI Summary */}
              <motion.div
                variants={itemVariants}
                className="
                  p-6
                  border
                  border-gray-800
                  rounded-2xl
                  bg-gray-950
                "
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="text-blue-300" />
                  AI Summary
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  {analysis.summary}
                </p>
              </motion.div>

              {/* Pros & Cons */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Pros */}
                <div
                  className="
                    p-6
                    border
                    border-green-400/20
                    rounded-2xl
                    bg-green-400/5
                  "
                >
                  <h3 className="text-xl font-bold text-green-400 mb-5">
                    Pros
                  </h3>

                  <ul className="space-y-4">
                    {analysis.pros?.map((pro, index) => (
                      <li
                        key={`${pro}-${index}`}
                        className="flex items-start gap-3"
                      >
                        <Check
                          className="
                            w-5
                            h-5
                            mt-1
                            text-green-400
                            shrink-0
                          "
                        />

                        <span className="text-gray-300">
                          {pro}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div
                  className="
                    p-6
                    border
                    border-red-400/20
                    rounded-2xl
                    bg-red-400/5
                  "
                >
                  <h3 className="text-xl font-bold text-red-400 mb-5">
                    Cons
                  </h3>

                  <ul className="space-y-4">
                    {analysis.cons?.map((con, index) => (
                      <li
                        key={`${con}-${index}`}
                        className="flex items-start gap-3"
                      >
                        <X
                          className="
                            w-5
                            h-5
                            mt-1
                            text-red-400
                            shrink-0
                          "
                        />

                        <span className="text-gray-300">
                          {con}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Final Recommendation */}
              {analysis.recommendation && (
                <motion.div
                  variants={itemVariants}
                  className="
                    p-8
                    border
                    border-blue-300/20
                    rounded-2xl
                    bg-blue-300/5
                  "
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-xl bg-blue-300/10">
                      <ShieldCheck
                        className="text-blue-300"
                        size={24}
                      />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold">
                        Should You Download It?
                      </h2>

                      <p className="text-blue-300 font-medium mt-1">
                        {analysis.recommendation.verdict}
                      </p>
                    </div>
                  </div>

                  {analysis.recommendation.bestFor?.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">
                        Best for
                      </h3>

                      <ul className="space-y-2">
                        {analysis.recommendation.bestFor.map(
                          (item, index) => (
                            <li
                              key={`${item}-${index}`}
                              className="text-gray-300"
                            >
                              • {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {analysis.recommendation.avoidIf?.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">
                        Avoid if
                      </h3>

                      <ul className="space-y-2">
                        {analysis.recommendation.avoidIf.map(
                          (item, index) => (
                            <li
                              key={`${item}-${index}`}
                              className="text-gray-300"
                            >
                              • {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  <div className="pt-5 border-t border-gray-800">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">
                        AI confidence
                      </span>

                      <span className="text-blue-300 font-bold">
                        {analysis.recommendation.confidence}%
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* RIGHT */}
            <div className="space-y-8">

              {/* Sentiment */}
              <motion.div
                variants={itemVariants}
                className="
                  p-6
                  border
                  border-gray-800
                  rounded-2xl
                  bg-gray-950
                "
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Sentiment
                </h2>

                <div className="space-y-5">
                  <SentimentBar
                    label="Positive"
                    value={analysis.sentiment?.positive || 0}
                    colorClass="bg-green-400"
                  />

                  <SentimentBar
                    label="Neutral"
                    value={analysis.sentiment?.neutral || 0}
                    colorClass="bg-blue-300"
                  />

                  <SentimentBar
                    label="Negative"
                    value={analysis.sentiment?.negative || 0}
                    colorClass="bg-red-400"
                  />
                </div>
              </motion.div>

              {/* Topics */}
              <motion.div
                variants={itemVariants}
                className="
                  p-6
                  border
                  border-gray-800
                  rounded-2xl
                  bg-gray-950
                "
              >
                <h2 className="text-2xl font-bold text-white mb-5">
                  Most Mentioned Topics
                </h2>

                <div className="flex flex-wrap gap-2">
                  {analysis.topics?.map((topic, index) => (
                    <span
                      key={`${topic}-${index}`}
                      className="
                        px-3
                        py-2
                        bg-blue-300/10
                        border
                        border-blue-300/20
                        text-blue-200
                        text-sm
                        rounded-full
                      "
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </main>
  );
};

