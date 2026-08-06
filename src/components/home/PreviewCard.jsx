import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

import { previewData } from "../../data/preview";

export const PreviewCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.6,
      }}
      className="mt-16"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex flex-col gap-2 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.24em] text-gray-400">Live Preview</p>
          <h2 className="text-3xl font-bold">ChatGPT Card</h2>
        </div>
        <Card className="p-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h2 className="text-2xl font-bold">
              {previewData.name}
            </h2>

            <p className="text-[#BDBDBD]">
              {previewData.developer}
            </p>
          </div>

          <div className="text-right">
            <p className="text-lg font-semibold">
              ⭐ {previewData.rating}
            </p>

            <Badge>
              {previewData.verdict}
            </Badge>
          </div>

        </div>

        <div className="mt-8">

          <h3 className="font-semibold mb-3">
            AI Summary
          </h3>

          <p className="text-[#BDBDBD] leading-7">
            {previewData.summary}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div>

            <h3 className="font-semibold mb-4">
              Pros
            </h3>

            <div className="space-y-3">

              {previewData.pros.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <Check size={18} />

                  <span>{item}</span>
                </div>
              ))}

            </div>

          </div>

          <div>

            <h3 className="font-semibold mb-4">
              Cons
            </h3>

            <div className="space-y-3">

              {previewData.cons.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <X size={18} />

                  <span>{item}</span>
                </div>
              ))}

            </div>

          </div>

        </div>

        <div className="grid grid-cols-3 gap-4 mt-10">

          <Card className="text-center">
            <p className="text-3xl font-bold">
              {previewData.sentiment.positive}%
            </p>

            <p className="text-[#BDBDBD]">
              Positive
            </p>
          </Card>

          <Card className="text-center">
            <p className="text-3xl font-bold">
              {previewData.sentiment.neutral}%
            </p>

            <p className="text-[#BDBDBD]">
              Neutral
            </p>
          </Card>

          <Card className="text-center">
            <p className="text-3xl font-bold">
              {previewData.sentiment.negative}%
            </p>

            <p className="text-[#BDBDBD]">
              Negative
            </p>
          </Card>

        </div>

      </Card>
    </motion.div>
  );
}