import { Check, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Card } from "../ui/Card";

export const PreviewCard = ({ data }) => {
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

      <Card
        role="region"
        aria-labelledby="preview-card-heading"
        className="relative overflow-hidden p-8 bg-gray-950/80 border border-gray-800 shadow-xl"
      >
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-300/10 blur-[100px] rounded-full" />


        <div className="relative flex flex-col gap-10">


          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-blue-300">

                <Sparkles size={14} aria-hidden="true" />

                AI SUMMARY

              </div>


              <h2 id="preview-card-heading" className="mt-5 text-3xl font-bold text-white">
                {data.name}
              </h2>


              <p className="mt-2 text-gray-400">
                {data.developer}
              </p>

            </div>



            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-gray-800 bg-black/50 p-5 text-center">

                <p className="text-3xl font-bold text-blue-300" aria-label={`${data.rating} stars`}>
                  {data.rating}
                  <span aria-hidden="true">★</span>
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Rating
                </p>

              </div>


              <div className="rounded-2xl border border-gray-800 bg-black/50 p-5 text-center">

                <p className="text-3xl font-bold text-blue-300">
                  {data.confidence}%
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Confidence
                </p>

              </div>

            </div>

          </div>



          {/* AI Summary */}
          <div className="rounded-2xl border border-gray-800 bg-black/40 p-6">

            <h3 className="mb-3 font-semibold text-blue-300">
              AI Summary
            </h3>


            <p className="text-gray-300 leading-7">
              {data.summary}
            </p>

          </div>



          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-8">


            {/* Pros */}
            <div>

              <h3 className="mb-4 font-semibold text-blue-300">
                Pros
              </h3>


              <ul className="space-y-3">

                {data.pros.map((item)=>(
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div className="p-1 rounded-full bg-green-400/10">
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

                {data.cons.map((item)=>(
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div className="p-1 rounded-full bg-red-400/10">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">


            <Card className="text-center bg-black/50 border border-gray-800 p-5">

              <p className="text-3xl font-bold text-green-400">
                {data.sentiment.positive}%
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Positive
              </p>

            </Card>



            <Card className="text-center bg-black/50 border border-gray-800 p-5">

              <p className="text-3xl font-bold text-blue-300">
                {data.sentiment.neutral}%
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Neutral
              </p>

            </Card>



            <Card className="text-center bg-black/50 border border-gray-800 p-5">

              <p className="text-3xl font-bold text-red-400">
                {data.sentiment.negative}%
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Negative
              </p>

            </Card>


          </div>


        </div>

      </Card>

    </motion.div>
  );
};