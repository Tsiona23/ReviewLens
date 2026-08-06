import { Container } from "../ui/Container";
import { StepCard } from "./StepCard";
import { SectionHeader } from "./SectionHeader";

import { steps } from "../../data/steps";

export const HowItWorks = () => {
  return (
    <section aria-labelledby="how-it-works-heading" className="border-t border-[#2A2A2A]/50 py-28">
      <Container>
        <SectionHeader
          id="how-it-works-heading"
          title="How ReviewLens Works"
          description="Three simple steps to understand any app before you download it."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};