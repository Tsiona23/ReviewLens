import { Star, ArrowUpRight } from "lucide-react";


export const AppCard = ({app}) => {


  return (

    <div
      className="
      group
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


      <div className="
      flex
      items-center
      gap-4
      ">


        <img
          src={app.image}
          alt={app.name}
          className="
          w-14
          h-14
          rounded-xl
          object-cover
          "
        />


        <div>

          <h3 className="
          text-lg
          font-semibold
          text-white
          ">

            {app.name}

          </h3>


          <div className="
          flex
          items-center
          gap-1
          text-sm
          text-yellow-400
          ">

            <Star size={15} fill="currentColor"/>

            {app.rating}

          </div>


        </div>


      </div>



      <p className="
      mt-5
      text-sm
      text-gray-400
      ">

        {app.reviews} reviews analyzed

      </p>



      <button
        className="
        mt-6
        w-full
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-blue-300
        py-3
        text-sm
        font-semibold
        text-black
        hover:bg-blue-200
        transition
        "
      >

        Analyze App

        <ArrowUpRight size={16}/>

      </button>


    </div>

  );

};