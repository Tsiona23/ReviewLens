import { Container } from "../ui/Container";
import { FeatureCard } from "./FeatureCard";
import { SectionHeader } from "./SectionHeader";

import { features } from "../../data/features";


export const Features = () => {

  return (

    <section className="relative py-28 border-t border-gray-900 overflow-hidden">

      {/* Glow */}
      <div className="absolute right-0 top-20 w-100 h-62.5 bg-blue-300/5 blur-[120px] rounded-full" />


      <Container>

        <SectionHeader
          title="Powerful AI Review Insights"
          description="Understand what users love, dislike, and expect from any application."
        />


        <div className="
          mt-16
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-4
        ">

          {features.map((feature)=>(

            <FeatureCard
              key={feature.id}
              feature={feature}
            />

          ))}

        </div>


      </Container>


    </section>

  );

};