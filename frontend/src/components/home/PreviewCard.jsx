import { Check, X, Sparkles, Star, BarChart3 } from "lucide-react";
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
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const PreviewCard = ({ data }) => {
  if (!data) {
    return null;
  }

  /*
   * Your real backend response has this structure:
   *
   * {
   *   app: {...},
   *   reviewStats: {...},
   *   analysis: {...}
   * }
   */

  const app = data.app || {};
  const analysis = data.analysis || {};
  const reviewStats = data.reviewStats || {};

  const sentiment = analysis.sentiment || {};

  const recommendation = analysis.recommendation || {};

  const positive = Number(sentiment.positive || 0);
  const neutral = Number(sentiment.neutral || 0);
  const negative = Number(sentiment.negative || 0);

  const analyzedReviews = reviewStats.analyzed || 0;

  const rating = app.rating
    ? Number(app.rating).toFixed(1)
    : "—";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.6,
      }}
    >
      <Card
        role="region"
        aria-labelledby="preview-card-heading"
        className="
          relative
          overflow-hidden
          border
          border-gray-800
          bg-gray-950/80
          p-3
          shadow-xl
        "
      >
        {/* Glow */}
        <div
          className="
            absolute
            -right-20
            -top-20
            h-60
            w-60
            rounded-full
            bg-blue-300/10
            blur-[100px]
          "
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-4">

          {/* ========================= */}
          {/* HEADER */}
          {/* ========================= */}

          <div
            className="
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              {/* Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-300/20
                  bg-blue-300/10
                  px-3
                  py-1
                  text-xs
                  uppercase
                  tracking-widest
                  text-blue-300
                "
              >
                <Sparkles size={14} aria-hidden="true" />
                LIVE AI ANALYSIS
              </div>

              {/* App name */}

              <h2
                id="preview-card-heading"
                className="mt-3 text-lg font-bold text-white"
              >
                {app.title || "Analyzed App"}
              </h2>

              {/* Developer */}

              <p className="mt-1 text-xs text-gray-400">
                {app.developer || "Unknown developer"}
              </p>

              {/* Reviews */}

              {analyzedReviews > 0 && (
                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                  <BarChart3 size={14} />

                  {analyzedReviews} real reviews analyzed
                </div>
              )}
            </div>

            {/* ========================= */}
            {/* STATS */}
            {/* ========================= */}

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={statsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.5,
              }}
            >
              {/* Rating */}

              <motion.div variants={statItemVariants}>
                <div
                  className="
                    rounded-lg
                    border
                    border-gray-800
                    bg-black/50
                    p-3
                    text-center
                  "
                >
                  <p
                    className="
                      flex
                      items-center
                      justify-center
                      gap-1
                      text-lg
                      font-bold
                      text-blue-300
                    "
                    aria-label={`${rating} stars`}
                  >
                    <Star
                      size={16}
                      fill="currentColor"
                      aria-hidden="true"
                    />

                    {rating}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-gray-400
                    "
                  >
                    Rating
                  </p>
                </div>
              </motion.div>

              {/* Confidence */}

              <motion.div variants={statItemVariants}>
                <div
                  className="
                    rounded-lg
                    border
                    border-gray-800
                    bg-black/50
                    p-3
                    text-center
                  "
                >
                  <p
                    className="
                      text-lg
                      font-bold
                      text-blue-300
                    "
                  >
                    {recommendation.confidence ?? "—"}%
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-gray-400
                    "
                  >
                    AI Confidence
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ========================= */}
          {/* AI SUMMARY */}
          {/* ========================= */}

          <div
            className="
              rounded-lg
              border
              border-gray-800
              bg-black/40
              p-4
            "
          >
            <h3
              className="
                mb-3
                flex
                items-center
                gap-2
                font-semibold
                text-blue-300
              "
            >
              <Sparkles size={16} />

              AI Summary
            </h3>

            <p
              className="
                text-sm
                leading-6
                text-gray-300
              "
            >
              {analysis.summary ||
                "Analyze an app to generate a real AI-powered summary from its reviews."}
            </p>
          </div>

          {/* ========================= */}
          {/* PROS & CONS */}
          {/* ========================= */}

          <div className="grid gap-6 md:grid-cols-2">

            {/* PROS */}

            <div>
              <h3
                className="
                  mb-4
                  font-semibold
                  text-green-400
                "
              >
                Pros
              </h3>

              <ul className="space-y-3">
                {analysis.pros?.length > 0 ? (
                  analysis.pros.map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="
                        flex
                        items-start
                        gap-2
                      "
                    >
                      <div
                        className="
                          rounded-full
                          bg-green-400/10
                          p-1
                        "
                      >
                        <Check
                          size={14}
                          className="text-green-400"
                          aria-hidden="true"
                        />
                      </div>

                      <span
                        className="
                          text-sm
                          text-gray-300
                        "
                      >
                        {item}
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-500">
                    No pros available.
                  </li>
                )}
              </ul>
            </div>

            {/* CONS */}

            <div>
              <h3
                className="
                  mb-4
                  font-semibold
                  text-red-400
                "
              >
                Cons
              </h3>

              <ul className="space-y-3">
                {analysis.cons?.length > 0 ? (
                  analysis.cons.map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="
                        flex
                        items-start
                        gap-2
                      "
                    >
                      <div
                        className="
                          rounded-full
                          bg-red-400/10
                          p-1
                        "
                      >
                        <X
                          size={14}
                          className="text-red-400"
                          aria-hidden="true"
                        />
                      </div>

                      <span
                        className="
                          text-sm
                          text-gray-300
                        "
                      >
                        {item}
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-500">
                    No cons available.
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* ========================= */}
          {/* SENTIMENT */}
          {/* ========================= */}

          <div>
            <div
              className="
                mb-3
                flex
                items-center
                justify-between
              "
            >
              <h3 className="font-semibold text-white">
                Review Sentiment
              </h3>

              <span className="text-xs text-gray-500">
                Based on {analyzedReviews} reviews
              </span>
            </div>

            <motion.div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-3
              "
              variants={statsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.5,
              }}
            >
              {/* Positive */}

              <motion.div variants={statItemVariants}>
                <Card
                  className="
                    border
                    border-gray-800
                    bg-black/50
                    p-3
                    text-center
                  "
                >
                  <p
                    className="
                      text-lg
                      font-bold
                      text-green-400
                    "
                  >
                    {positive}%
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-gray-400
                    "
                  >
                    Positive
                  </p>
                </Card>
              </motion.div>

              {/* Neutral */}

              <motion.div variants={statItemVariants}>
                <Card
                  className="
                    border
                    border-gray-800
                    bg-black/50
                    p-3
                    text-center
                  "
                >
                  <p
                    className="
                      text-lg
                      font-bold
                      text-blue-300
                    "
                  >
                    {neutral}%
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-gray-400
                    "
                  >
                    Neutral
                  </p>
                </Card>
              </motion.div>

              {/* Negative */}

              <motion.div variants={statItemVariants}>
                <Card
                  className="
                    border
                    border-gray-800
                    bg-black/50
                    p-3
                    text-center
                  "
                >
                  <p
                    className="
                      text-lg
                      font-bold
                      text-red-400
                    "
                  >
                    {negative}%
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-gray-400
                    "
                  >
                    Negative
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* ========================= */}
          {/* VERDICT */}
          {/* ========================= */}

          {recommendation.verdict && (
            <div
              className="
                rounded-lg
                border
                border-blue-300/20
                bg-blue-300/5
                p-4
              "
            >
              <h3
                className="
                  mb-3
                  font-semibold
                  text-blue-300
                "
              >
                AI Verdict
              </h3>

              <p
                className="
                  text-lg
                  font-bold
                  text-white
                "
              >
                {recommendation.verdict}
              </p>

              {/* Best For */}

              {recommendation.bestFor?.length > 0 && (
                <div className="mt-4">
                  <p
                    className="
                      mb-1
                      text-sm
                      font-medium
                      text-gray-400
                    "
                  >
                    Best For
                  </p>

                  <ul className="space-y-1">
                    {recommendation.bestFor.map(
                      (item, index) => (
                        <li
                          key={`${item}-${index}`}
                          className="
                            text-sm
                            leading-6
                            text-gray-300
                          "
                        >
                          • {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {/* Avoid If */}

              {recommendation.avoidIf?.length > 0 && (
                <div className="mt-4">
                  <p
                    className="
                      mb-1
                      text-sm
                      font-medium
                      text-gray-400
                    "
                  >
                    Avoid If
                  </p>

                  <ul className="space-y-1">
                    {recommendation.avoidIf.map(
                      (item, index) => (
                        <li
                          key={`${item}-${index}`}
                          className="
                            text-sm
                            leading-6
                            text-gray-300
                          "
                        >
                          • {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {/* Confidence */}

              {recommendation.confidence !== undefined && (
                <div className="mt-4">
                  <span className="text-sm text-gray-400">
                    Verdict confidence:
                  </span>{" "}
                  <span className="font-semibold text-blue-300">
                    {recommendation.confidence}%
                  </span>
                </div>
              )}
            </div>
          )}

          {/* ========================= */}
          {/* REAL DATA INDICATOR */}
          {/* ========================= */}

          {analyzedReviews > 0 && (
            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                border-t
                border-gray-800
                pt-4
                text-center
                text-xs
                text-gray-500
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-green-400
                "
              />

              Analysis generated from real app reviews
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};