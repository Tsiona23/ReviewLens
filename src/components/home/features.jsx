import { Container } from "../ui/Container";
import { FeatureCard } from "./FeatureCard";
import { SectionHeader } from "./SectionHeader";

import { features } from "../../data/features.js";

export const Features = () => {
  return (
    <section aria-labelledby="features-heading" className="py-28">
      <Container>
        <SectionHeader
          id="features-heading"
          title="Everything you need to decide faster"
          description="ReviewLens transforms thousands of reviews into clear insights, helping you choose apps with confidence."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};