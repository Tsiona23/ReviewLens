import { motion } from "framer-motion";

export const Button = ({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.03 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`
        bg-blue-300
        text-gray-950
        font-semibold
        rounded-xl
        px-6
        py-3
        transition
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-blue-300/50
        hover:enabled:bg-blue-400
        disabled:opacity-60
        disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};