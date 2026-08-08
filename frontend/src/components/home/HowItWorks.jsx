import { Container } from "../ui/Container";
import { StepCard } from "./StepCard";
import { SectionHeader } from "./SectionHeader";

import { steps } from "../../data/steps";


export const HowItWorks = () => {


  return (

    <section
      className="
      relative
      py-28
      border-t
      border-gray-900
      overflow-hidden
      "
    >


      <div
        className="
        absolute
        left-1/2
        top-20
        -translate-x-1/2
        w-125
        h-62.5
        bg-blue-300/5
        blur-[120px]
        rounded-full
        "
      />



      <Container>


        <SectionHeader
          title="How ReviewLens Works"
          description="Three simple steps to understand any app before you download it."
        />



        <div
          className="
          relative
          mt-16
          grid
          gap-8
          md:grid-cols-3
          "
        >

          {steps.map((step,index)=>(

            <StepCard
              key={step.id}
              step={step}
              index={index}
            />

          ))}


        </div>


      </Container>


    </section>

  );

};