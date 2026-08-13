import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Card } from "../ui/Card";

const previewSections = [
  {
    title: "App Overview",
    description:
      "App information, store details, rating and review statistics",
  },
  {
    title: "AI Summary",
    description:
      "A concise overview of what users are saying",
  },
  {
    title: "Sentiment Analysis",
    description:
      "Positive, neutral and negative sentiment insights",
  },
  {
    title: "Key Topics",
    description:
      "Recurring themes and issues found in user feedback",
  },
  {
    title: "AI Recommendation",
    description:
      "Actionable insights based on user feedback",
  },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    x: -8,
  },

  visible: (index) => ({
    opacity: 1,
    x: 0,

    transition: {
      delay: 0.4 + index * 0.08,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export const PreviewCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="w-full"
    >
      <Card
        role="region"
        aria-labelledby="preview-card-heading"
        className="
          relative
          mx-auto
          w-full
          max-w-sm
          overflow-hidden
          rounded-2xl
          border
          border-gray-800
          bg-[#09090b]
          p-0
          shadow-2xl
        "
      >
        {/* Ambient Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-56
            w-56
            rounded-full
            bg-blue-300/10
            blur-[90px]
          "
          aria-hidden="true"
        />

        {/* ========================= */}
        {/* TERMINAL TITLE BAR */}
        {/* ========================= */}

        <div
          className="
            relative
            flex
            h-10
            items-center
            border-b
            border-gray-800
            bg-gray-950
            px-3
          "
        >
          {/* macOS Controls */}

          <div className="flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full bg-red-400"
              aria-label="Close"
            />

            <span
              className="h-2.5 w-2.5 rounded-full bg-yellow-400"
              aria-label="Minimize"
            />

            <span
              className="h-2.5 w-2.5 rounded-full bg-green-400"
              aria-label="Maximize"
            />
          </div>

          {/* Terminal Title */}

          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              whitespace-nowrap
              font-mono
              text-[10px]
              text-gray-500
            "
          >
            reviewlens — results
          </div>
        </div>

        {/* ========================= */}
        {/* TERMINAL CONTENT */}
        {/* ========================= */}

        <div
          className="
            relative
            p-3
            font-mono
            sm:p-4
          "
        >
          {/* Command */}

          <div className="flex items-center gap-2 text-xs">
            <span className="text-blue-300">$</span>

            <span className="text-gray-200">
              reviewlens analyze
            </span>

            <span
              className="
                h-3
                w-0.5
                animate-pulse
                bg-blue-300
              "
              aria-hidden="true"
            />
          </div>

          {/* Status Messages */}

          <div className="mt-3 space-y-1.5 text-[11px]">
            <div className="flex items-center gap-2 text-gray-500">
              <Check
                size={12}
                className="text-green-400"
                aria-hidden="true"
              />

              <span>Reviews analyzed</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Check
                size={12}
                className="text-green-400"
                aria-hidden="true"
              />

              <span>Sentiment insights generated</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Check
                size={12}
                className="text-green-400"
                aria-hidden="true"
              />

              <span>AI summary generated</span>
            </div>
          </div>

          {/* Divider */}

          <div className="my-4 h-px w-full bg-gray-800" />

          {/* Results Header */}

          <div className="mb-3 flex items-center gap-2">
            <Sparkles
              size={13}
              className="text-blue-300"
              aria-hidden="true"
            />

            <h2
              id="preview-card-heading"
              className="
                text-xs
                font-semibold
                tracking-wider
                text-blue-300
              "
            >
              RESULTS
            </h2>
          </div>

          {/* Results Sections */}

          <div className="space-y-1.5">
            {previewSections.map((section, index) => (
              <motion.div
                key={section.title}
                custom={index}
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="
                  group
                  rounded-lg
                  border
                  border-gray-800/80
                  bg-black/30
                  px-2.5
                  py-2
                  transition-colors
                  hover:border-blue-300/20
                  hover:bg-blue-300/3
                "
              >
                <div className="flex items-start gap-2.5">
                  {/* Terminal Indicator */}

                  <span
                    className="
                      mt-0.5
                      shrink-0
                      text-blue-300
                    "
                    aria-hidden="true"
                  >
                    ▸
                  </span>

                  <div className="min-w-0">
                    <h3
                      className="
                        text-[11px]
                        font-semibold
                        text-gray-200
                      "
                    >
                      {section.title}
                    </h3>

                    <p
                      className="
                        mt-0.5
                        text-[10px]
                        leading-4
                        text-gray-500
                      "
                    >
                      {section.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal Footer */}

          <div
            className="
              mt-3
              flex
              items-center
              gap-1.5
              text-[10px]
              text-gray-500
            "
          >
            <span className="text-blue-300">$</span>

            <span>_</span>

            <span
              className="
                h-2.5
                w-0.5
                animate-pulse
                bg-gray-500
              "
              aria-hidden="true"
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};