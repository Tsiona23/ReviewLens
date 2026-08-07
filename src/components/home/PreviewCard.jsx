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
          <p className="text-sm uppercase tracking-[0.24em] text-blue-300">Live Preview</p>
          <h2 className="text-3xl font-bold text-blue-300">ChatGPT Card</h2>
        </div>

        <Card className="p-8 bg-black/70 border border-gray-900 shadow-sm">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-gray-800 bg-black/80 px-3 py-2 text-xs uppercase tracking-[0.28em] text-blue-300">
                  AI SUMMARY
                </div>
                <h2 className="mt-4 text-2xl font-bold text-blue-300">{previewData.name}</h2>
                <p className="mt-2 text-sm text-blue-300">{previewData.developer}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-right md:grid-cols-2">
                <div className="rounded-3xl border border-gray-900 bg-black/80 p-4">
                  <p className="text-3xl font-semibold text-blue-300">{previewData.rating}★</p>
                  <p className="mt-1 text-sm text-blue-300">Rating</p>
                </div>
                <div className="rounded-3xl border border-gray-900 bg-black/80 p-4">
                  <p className="text-3xl font-semibold text-blue-300">{previewData.confidence}%</p>
                  <p className="mt-1 text-sm text-blue-300">Confidence</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-3 text-blue-300">AI Summary</h3>
              <p className="text-black leading-7">{previewData.summary}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="font-semibold text-blue-300 mb-4">Pros</h3>
                <div className="space-y-3">
                  {previewData.pros.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check size={18} className="text-green-400" />
                      <span className="text-black">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-4">Cons</h3>
                <div className="space-y-3">
                  {previewData.cons.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <X size={18} className="text-red-400" />
                      <span className="text-black">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
              <Card className="text-center bg-black/80 border border-gray-900">
                <p className="text-3xl font-bold text-blue-300">{previewData.sentiment.positive}%</p>
                <p className="mt-1 text-sm text-blue-300">Positive</p>
              </Card>
              <Card className="text-center bg-black/80 border border-gray-900">
                <p className="text-3xl font-bold text-blue-300">{previewData.sentiment.neutral}%</p>
                <p className="mt-1 text-sm text-blue-300">Neutral</p>
              </Card>
              <Card className="text-center bg-black/80 border border-gray-900">
                <p className="text-3xl font-bold text-blue-300">{previewData.sentiment.negative}%</p>
                <p className="mt-1 text-sm text-blue-300">Negative</p>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}
