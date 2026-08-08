import { Container } from "../ui/Container";
import { GitFork } from "lucide-react";


export const Footer = () => {


  return (

    <footer
      className="
      border-t
      border-gray-900
      py-12
      "
    >

      <Container>


        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          gap-8
          "
        >


          <div>

            <h2
              className="
              text-2xl
              font-bold
              text-blue-300
              "
            >

               <span className="text-2xl text-blue-300">◐</span>
            <span>ReviewLens</span>


            </h2>


            <p
              className="
              mt-3
              max-w-sm
              text-gray-400
              "
            >

              AI-powered app review analysis that helps
              users understand apps faster.

            </p>


          </div>




          <a
            href="https://github.com/Tsiona23/ReviewLens"
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-2
            text-gray-400
            hover:text-blue-300
            transition
            "
          >

           <GitFork size={20}/>

            GitHub

          </a>


        </div>



        <div
          className="
          mt-10
          pt-6
          border-t
          border-gray-900
          text-sm
          text-gray-500
          "
        >

          © {new Date().getFullYear()} ReviewLens. All rights reserved.

        </div>


      </Container>


    </footer>

  );

};