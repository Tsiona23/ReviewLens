import { Hero } from "../components/home/Hero";
import { Features } from "../components/home/Features.jsx";
import { HowItWorks } from "../components/home/HowItWorks";
import { PopularApps } from "../components/home/PopularApps";
import { Container } from "../components/ui/Container";

export const Home = () => {
  return (
    <>
      <Hero />

      <Features />

      <HowItWorks />

      <PopularApps />

      {/* CTA Section */}
      <section className="relative py-24 border-t border-gray-900 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-125 h-75 bg-blue-300/10 blur-[120px] rounded-full" />

        <Container>
          <div className="relative rounded-3xl border border-blue-300/20 bg-linear-to-br from-blue-300/10 via-gray-950 to-black p-10 md:p-14 text-center overflow-hidden">

            <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-blue-300/50 to-transparent" />

            <p className="text-sm uppercase tracking-[0.32em] text-blue-300">
              Ready to analyze your next app?
            </p>

            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white">
              Paste a URL and get{" "}
              <span className="text-blue-300">
                instant insights.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
              ReviewLens transforms thousands of app reviews into clear
              summaries, sentiment analysis, pros, cons, and actionable
              recommendations.
            </p>


            <a
              href="#app-url-input"
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-blue-300
                px-8
                py-4
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-blue-200
                hover:scale-105
              "
            >
              Analyze Now
            </a>

          </div>
        </Container>

      </section>
    </>
  );
};