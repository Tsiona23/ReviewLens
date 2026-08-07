import { ArrowRight } from "lucide-react";


export const StepCard = ({step,index}) => {


  return (

    <div
      className="
      relative
      rounded-2xl
      border
      border-gray-800
      bg-gray-950/70
      p-8
      hover:border-blue-300/40
      transition
      "
    >


      <div
        className="
        text-5xl
        font-bold
        text-blue-300/20
        "
      >
        0{index+1}
      </div>



      <h3 className="
      mt-6
      text-2xl
      font-semibold
      text-white
      ">

        {step.title}

      </h3>



      <p className="
      mt-3
      text-gray-400
      leading-6
      ">

        {step.description}

      </p>



      {index !== 2 && (

        <ArrowRight
          className="
          hidden
          lg:block
          absolute
          -right-7
          top-1/2
          text-blue-300
          "
        />

      )}


    </div>

  );

};