import { Container } from "../ui/Container";
import { SearchBar } from "./SearchBar";
import { LivePreview } from "./LivePreview";
import { motion } from "framer-motion";


export const Hero = () => {
  return (
    <section className="relative pt-12 md:pt-16 pb-16 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-150 h-75 bg-blue-300/10 blur-[120px] rounded-full" aria-hidden="true" />


      <Container>

        <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">


          {/* Left */}
          <motion.div
            initial={{opacity:0,y:30}}
            animate={{opacity:1,y:0}}
            transition={{duration:.6}}
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-300/20 bg-blue-300/10 text-blue-300 text-sm mb-6">

              <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse"/>

              AI Powered Review Analysis

            </div>


            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">

              Understand any app
              <span className="text-blue-300">
                {" "}in seconds.
              </span>

            </h1>


            <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">

              ReviewLens uses AI to analyze thousands of app reviews and
              transform them into clear summaries, sentiment insights,
              pros, cons, and recommendations.

            </p>


            <div className="mt-8">

              <SearchBar />

            </div>


          </motion.div>



          {/* Preview */}
          <motion.div
            initial={{opacity:0,scale:.95}}
            animate={{opacity:1,scale:1}}
            transition={{duration:.7}}
          >

            <LivePreview />

          </motion.div>


        </div>

      </Container>

    </section>
  );
};