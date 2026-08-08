import { Container } from "../ui/Container";
import { ArrowRight } from "lucide-react";


export const CTASection = () => {


  return (

    <section className="
    relative
    py-28
    border-t
    border-gray-900
    overflow-hidden
    ">


      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2
        top-20
        w-125
        h-75
        bg-blue-300/10
        blur-[120px]
        rounded-full
        "
      />



      <Container>


        <div
          className="
          relative
          rounded-3xl
          border
          border-blue-300/20
          bg-linear-to-br
          from-blue-300/10
          via-gray-950
          to-black
          p-10
          md:p-16
          text-center
          "
        >


          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
            "
          >

            Ready to understand your users?

          </h2>



          <p
            className="
            mt-5
            max-w-2xl
            mx-auto
            text-lg
            text-gray-400
            "
          >

            Paste an app URL and let ReviewLens transform thousands
            of reviews into meaningful insights.

          </p>



          <a
            href="#app-url-input"
            className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-blue-300
            px-8
            py-4
            font-semibold
            text-black
            hover:bg-blue-200
            hover:scale-105
            transition
            "
          >
            Analyze Now

            <ArrowRight size={18}/>

          </a>


        </div>


      </Container>


    </section>

  );

};