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
        text-black
        font-semibold
        rounded-full
        transition
        duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-gray-500
        hover:enabled:bg-gray-200
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