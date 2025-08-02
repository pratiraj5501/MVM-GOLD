import { motion } from "framer-motion";
import { FaGem } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <motion.div
        className="text-gold text-6xl"
        animate={{ rotateY: 360 }} 
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      >
        <FaGem className="text-sky-100"/>
      </motion.div>
    </div>
  );
};

export default Loader;
