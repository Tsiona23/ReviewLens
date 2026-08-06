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
      <section className="py-20 border-t border-gray-900">
        <Container>
          <div className="rounded-4xl border border-gray-800 bg-white/5 p-10 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-blue-300">Ready to analyze your next app?</p>
            <h2 className="mt-4 text-4xl font-bold text-white">Paste a URL and get instant insights.</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              ReviewLens turns thousands of app reviews into clear pros, cons, sentiment, and recommendations.
            </p>
            <a
              href="#app-url-input"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Analyze Now
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};