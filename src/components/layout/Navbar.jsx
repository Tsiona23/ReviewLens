import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "../ui/Container";


export const Navbar = () => {

  const [open, setOpen] = useState(false);


  const links = [
    {
      name:"Home",
      path:"/"
    },
    {
      name:"About",
      path:"/about"
    },
  ];


  return (

    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      backdrop-blur-xl
      bg-black/60
      border-b
      border-gray-900
      "
    >

      <Container>


        <nav
          className="
          flex
          h-20
          items-center
          justify-between
          "
        >


          {/* Logo */}

          <Link
            to="/"
            className="
            text-2xl
            font-bold
            text-white
            "
          >

            Review
            <span className="text-blue-300">
              Lens
            </span>

          </Link>



          {/* Desktop Links */}

          <div
            className="
            hidden
            md:flex
            items-center
            gap-8
            "
          >

            {links.map((link)=>(

              <Link
                key={link.name}
                to={link.path}
                className="
                text-gray-400
                hover:text-blue-300
                transition
                "
              >

                {link.name}

              </Link>

            ))}


          </div>



          {/* CTA */}

          <div className="hidden md:block">

            <Link
              to="/"
              className="
              rounded-full
              bg-white
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              hover:bg-blue-200
              transition
              "
            >

              Analyze Now

            </Link>


          </div>




          {/* Mobile Button */}

          <button
            className="
            md:hidden
            text-white
            "
            onClick={()=>setOpen(!open)}
          >

            {open ?
            <X size={26}/>
            :
            <Menu size={26}/>
            }


          </button>


        </nav>



        {/* Mobile Menu */}

        {open && (

          <div
            className="
            md:hidden
            pb-6
            space-y-4
            "
          >

            {links.map((link)=>(

              <Link
                key={link.name}
                to={link.path}
                onClick={()=>setOpen(false)}
                className="
                block
                text-gray-300
                hover:text-blue-300
                "
              >

                {link.name}

              </Link>

            ))}


          </div>

        )}


      </Container>


    </header>

  );

};