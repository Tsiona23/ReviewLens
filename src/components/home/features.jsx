import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import FeatureCard from "./FeatureCard";

import { features } from "../../data/features";

export default function Features() {
  return (
    <section className="py-28">

      <Container>

        <SectionTitle
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
}