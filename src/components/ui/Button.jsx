import { motion } from "framer-motion";


export default function Button({
  children,
  className = "",
  onClick,
}) {

  return (

    <motion.button

      whileHover={{
        scale: 1.03
      }}

      whileTap={{
        scale: 0.97
      }}

      onClick={onClick}

      className={`
        bg-white
        text-black
        font-semibold
        rounded-full
        px-8
        py-4
        transition
        duration-300
        hover:bg-gray-200
        ${className}
      `}
    >

      {children}

    </motion.button>

  );

}