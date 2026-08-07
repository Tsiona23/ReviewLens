import { Container } from "../ui/Container";
import { StepCard } from "./StepCard";
import { SectionHeader } from "./SectionHeader";

import { steps } from "../../data/steps";

export const HowItWorks = () => {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="relative overflow-hidden border-t border-gray-900 py-28"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-62.5 bg-blue-300/5 blur-[120px] rounded-full pointer-events-none" />


      <Container>

        <div className="relative">

          <SectionHeader
            id="how-it-works-heading"
            title="How ReviewLens Works"
            description="Three simple steps to understand any app before you download it."
          />


          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {steps.map((step, index) => (

              <StepCard
                key={step.id}
                step={step}
                index={index}
              />

            ))}

          </div>


        </div>

      </Container>

    </section>
  );
};