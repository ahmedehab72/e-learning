import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const FloatingButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.a
      onClick={scrollToTop}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
      }}
      className="fixed w-14 h-20 justify-center items-center  bottom-6 right-6 z-50 !bg-transparent !border-none !focus:outline-none !focus:ring-0 cursor-pointer"
    >
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="p-4 h-14 w-14 shadow-lg bg-gradient-to-r from-red-400 to-black text-white hover:shadow-2xl rounded-full "
      >
        <ArrowUp className="w-6 h-6" />
      </motion.div>
    </motion.a>
  );
};

export default FloatingButton;
