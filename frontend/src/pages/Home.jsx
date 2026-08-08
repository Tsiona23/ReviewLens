import { Hero } from "../components/home/Hero";
import { Features } from "../components/home/Features";
import { HowItWorks } from "../components/home/HowItWorks";
import { PopularApps } from "../components/home/PopularApps";
import { CTASection } from "../components/home/CTASection";


export const Home = () => {
  return (
    <main className="bg-black text-white overflow-hidden">

      <Hero />

      <Features />

      <HowItWorks />

      <PopularApps />

      <CTASection />

    </main>
  );
};