import { motion } from "framer-motion";


export default function Card({
  children,
  className=""
}) {


return (

<motion.div

whileHover={{
  y:-5
}}

transition={{
 duration:0.2
}}

className={`
 bg-[#181818]
 border
 border-[#2A2A2A]
 rounded-3xl
 p-6
 ${className}
`}
>

{children}

</motion.div>

);


}