"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import useScrollVisibility from "@/lib/Funtions";
import { scrollToTop } from "@/lib/Funtions";
import { fadeInOut } from "@/lib/Funtions";

const ScrollToTopButton = () => {
  const isVisible = useScrollVisibility(300);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeInOut}
          transition={{ duration: 0.5 }}
          className="fixed bottom-10 right-10 z-50"
        >
          <div
            data-tooltip-id="inicio"
            data-tooltip-content="Inicio"
            data-tooltip-place="left"
          >
            <motion.button
              className="bg-gray-700 rounded-full p-3"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
            >
              <FaArrowUp size={20} color="white" />
              <Tooltip
                id="inicio"
                style={{ backgroundColor: "rgb(55, 65, 81)", color: "#fff" }}
              />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
