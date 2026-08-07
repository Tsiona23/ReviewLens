import {
  Sparkles,
  BarChart3,
  MessageSquareText,
  Lightbulb
} from "lucide-react";


const icons = {
  sparkles: Sparkles,
  chart: BarChart3,
  reviews: MessageSquareText,
  insights: Lightbulb,
};


export const FeatureCard = ({feature}) => {


  const Icon = icons[feature.icon] || Sparkles;


  return (

    <div
      className="
      group
      relative
      rounded-2xl
      border
      border-gray-800
      bg-gray-950/70
      p-6
      hover:border-blue-300/40
      transition-all
      duration-300
      "
    >

      <div
        className="
        w-12
        h-12
        flex
        items-center
        justify-center
        rounded-xl
        bg-blue-300/10
        text-blue-300
        mb-6
        group-hover:scale-110
        transition
        "
      >

        <Icon size={24}/>

      </div>



      <h3 className="text-xl font-semibold text-white mb-3">

        {feature.title}

      </h3>



      <p className="text-gray-400 leading-6">

        {feature.description}

      </p>


      {/* Hover line */}
      <div
        className="
        absolute
        bottom-0
        left-0
        right-0
        h-px
        bg-blue-300/50
        opacity-0
        group-hover:opacity-100
        transition
        "
      />

    </div>

  );

};