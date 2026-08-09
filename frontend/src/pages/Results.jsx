
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
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">{label}</span>

        <span className="text-sm font-medium text-white">
          {value}%
        </span>
      </div>

      <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8 }}
          className={`h-full rounded-full ${colorClass}`}
        />
      </div>
    </div>
  );
};

export const Results = () => {
  const location = useLocation();

  // Real analysis returned from backend
  const result = location.state?.result;

  // If user opens /results directly
  if (!result) {
    return (
      <main className="min-h-screen bg-black text-white py-24">
        <Container>
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">
              No analysis found
            </h1>

            <p className="text-gray-400 mb-6">
              Please enter an app URL from the homepage
              to start an analysis.
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
        </Container>
      </main>
    );
  }

  const { app, analysis, reviewStats } = result;

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

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

  const sentiment = analysis?.sentiment || {};

  return (
    <main className="min-h-screen bg-black text-white py-12">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* ========================= */}
          {/* BACK LINK */}
          {/* ========================= */}

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                text-gray-400
                hover:text-blue-300
                transition
              "
            >
              <ArrowLeft size={16} />
              Analyze another app
            </Link>
          </motion.div>

          {/* ========================= */}
          {/* APP HEADER */}
          {/* ========================= */}

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
            {/* App Icon */}

            {app?.icon && (
              <img
                src={app.icon}
                alt={`${app.title} icon`}
                className="
                  w-24
                  h-24
                  rounded-3xl
                  object-cover
                  border
                  border-gray-800
                "
              />
            )}

            {/* App Information */}

            <div className="text-center sm:text-left flex-1">
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  gap-3
                "
              >
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                  {app?.title || "Unknown App"}
                </h1>

                {analysis?.recommendation?.verdict && (
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
                {app?.developer || "Unknown developer"}
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  justify-center
                  sm:justify-start
                  gap-4
                  mt-4
                  text-sm
                  text-gray-400
                "
              >
                {app?.category && (
                  <span>
                    {app.category}
                  </span>
                )}

                {app?.rating !== undefined && (
                  <span className="flex items-center gap-1">
                    <Star
                      size={15}
                      className="text-blue-300"
                      fill="currentColor"
                    />

                    {Number(app.rating).toFixed(1)}
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

          {/* ========================= */}
          {/* MAIN GRID */}
          {/* ========================= */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-3
              gap-8
            "
          >
            {/* ========================= */}
            {/* LEFT COLUMN */}
            {/* ========================= */}

            <div className="lg:col-span-2 space-y-8">

              {/* ========================= */}
              {/* AI SUMMARY */}
              {/* ========================= */}

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
                <h2
                  className="
                    text-2xl
                    font-bold
                    text-white
                    mb-4
                    flex
                    items-center
                    gap-2
                  "
                >
                  <Sparkles className="text-blue-300" />

                  AI Summary
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  {analysis?.summary ||
                    "No summary available."}
                </p>
              </motion.div>

              {/* ========================= */}
              {/* PROS & CONS */}
              {/* ========================= */}

              <motion.div
                variants={itemVariants}
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-8
                "
              >
                {/* PROS */}

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
                    {analysis?.pros?.length > 0 ? (
                      analysis.pros.map((pro, index) => (
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
                      ))
                    ) : (
                      <li className="text-gray-500">
                        No pros available.
                      </li>
                    )}
                  </ul>
                </div>

                {/* CONS */}

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
                    {analysis?.cons?.length > 0 ? (
                      analysis.cons.map((con, index) => (
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
                      ))
                    ) : (
                      <li className="text-gray-500">
                        No cons available.
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>

              {/* ========================= */}
              {/* RECOMMENDATION */}
              {/* ========================= */}

              {analysis?.recommendation && (
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

                  {/* Best For */}

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

                  {/* Avoid If */}

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

                  {/* Confidence */}

                  {analysis.recommendation.confidence !==
                    undefined && (
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
                  )}
                </motion.div>
              )}
            </div>

            {/* ========================= */}
            {/* RIGHT COLUMN */}
            {/* ========================= */}

            <div className="space-y-8">

              {/* ========================= */}
              {/* SENTIMENT */}
              {/* ========================= */}

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
                    value={Number(sentiment.positive || 0)}
                    colorClass="bg-green-400"
                  />

                  <SentimentBar
                    label="Neutral"
                    value={Number(sentiment.neutral || 0)}
                    colorClass="bg-blue-300"
                  />

                  <SentimentBar
                    label="Negative"
                    value={Number(sentiment.negative || 0)}
                    colorClass="bg-red-400"
                  />
                </div>
              </motion.div>

              {/* ========================= */}
              {/* TOPICS */}
              {/* ========================= */}

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
                  {analysis?.topics?.length > 0 ? (
                    analysis.topics.map((topic, index) => (
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
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">
                      No topics available.
                    </p>
                  )}
                </div>
              </motion.div>

              {/* ========================= */}
              {/* REVIEW STATS */}
              {/* ========================= */}

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
                <h2 className="text-xl font-bold text-white mb-5">
                  Review Data
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Reviews available
                    </span>

                    <span className="font-semibold text-white">
                      {reviewStats?.totalAvailable || 0}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Reviews analyzed
                    </span>

                    <span className="font-semibold text-blue-300">
                      {reviewStats?.analyzed || 0}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ========================= */}
          {/* FOOTER NOTE */}
          {/* ========================= */}

          <motion.div
            variants={itemVariants}
            className="mt-10 text-center text-sm text-gray-600"
          >
            ReviewLens generated this analysis from
            real app reviews.
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
};


