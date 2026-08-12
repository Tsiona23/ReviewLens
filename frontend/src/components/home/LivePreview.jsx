import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { Check, X, ShieldCheck, Sparkles } from "lucide-react";

// Mock data for the preview
const previewData = {
  app: {
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/c6/99/3b/c6993b38-35a6-6977-8493-e1a70c363325/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp", // Example: Notion icon
    title: "Sample App: Notion",
    developer: "Notion Labs, Inc.",
  },
  analysis: {
    summary:
      "Users love the flexibility and power for organizing work and life, but some find the mobile experience can be slow and occasionally buggy, especially on older devices.",
    pros: [
      "Highly customizable",
      "Great for collaboration",
      "Syncs across all devices",
    ],
    cons: [
      "Mobile app can be slow",
      "Offline mode is limited",
      "Steep learning curve",
    ],
    sentiment: { positive: 82, neutral: 11, negative: 7 },
    recommendation: {
      verdict: "Recommended",
    },
  },
};

// Reusable component for sentiment bars
const SentimentBar = ({ label, value, colorClass }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-400">{label}</span>
      <span className="text-sm font-medium text-white">{value}%</span>
    </div>
    <div className="h-2 overflow-hidden rounded-full bg-gray-800">
      <div
        style={{ width: `${value}%` }}
        className={`h-full rounded-full ${colorClass}`}
      />
    </div>
  </div>
);

export const LivePreview = () => {
  const { app, analysis } = previewData;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="preview" className="bg-black py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See It in Action
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Here's a live preview of what an analysis looks like.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-12 rounded-3xl border-2 border-blue-300/20 bg-gray-950/50 p-4 shadow-2xl shadow-blue-300/10 backdrop-blur-lg sm:p-6 lg:p-8"
        >
          {/* App Header */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left"
          >
            <img
              src={app.icon}
              alt={`${app.title} icon`}
              className="h-20 w-20 shrink-0 rounded-3xl border border-gray-800 object-cover"
            />
            <div className="min-w-0 flex-1">
              <h3 className="text-2xl font-bold text-white">{app.title}</h3>
              <p className="text-gray-400">{app.developer}</p>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {/* Left Column: Summary & Pros/Cons */}
            <div className="space-y-6 lg:col-span-2">
              <motion.div variants={itemVariants}>
                <Card>
                  <h4 className="mb-3 flex items-center gap-2 text-xl font-semibold text-white">
                    <Sparkles className="text-blue-300" /> AI Summary
                  </h4>
                  <p className="leading-relaxed text-gray-300">{analysis.summary}</p>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="border-green-400/20 bg-green-400/5">
                  <h4 className="mb-4 text-lg font-bold text-green-400">Pros</h4>
                  <ul className="space-y-3">
                    {analysis.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="mt-1 h-5 w-5 shrink-0 text-green-400" />
                        <span className="text-gray-300">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card className="border-red-400/20 bg-red-400/5">
                  <h4 className="mb-4 text-lg font-bold text-red-400">Cons</h4>
                  <ul className="space-y-3">
                    {analysis.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <X className="mt-1 h-5 w-5 shrink-0 text-red-400" />
                        <span className="text-gray-300">{con}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>

            {/* Right Column: Sentiment & Verdict */}
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <Card>
                  <h4 className="mb-5 text-xl font-semibold text-white">AI Verdict</h4>
                  <div className="flex flex-col items-center gap-3 rounded-xl border border-blue-300/20 bg-blue-300/10 p-4 text-center">
                    <ShieldCheck className="h-8 w-8 text-blue-300" />
                    <p className="text-2xl font-bold text-white">{analysis.recommendation.verdict}</p>
                  </div>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card>
                  <h4 className="mb-5 text-xl font-semibold text-white">Sentiment</h4>
                  <div className="space-y-5">
                    <SentimentBar label="Positive" value={analysis.sentiment.positive} colorClass="bg-green-400" />
                    <SentimentBar label="Neutral" value={analysis.sentiment.neutral} colorClass="bg-blue-300" />
                    <SentimentBar label="Negative" value={analysis.sentiment.negative} colorClass="bg-red-400" />
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};