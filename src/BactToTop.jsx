import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowButton(window.scrollY > 300);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      showButton && (
        <motion.button
          className="back-to-top bg-dark rounded-5 text-light p-2"
          onClick={scrollToTop} // Scrolls once per click
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}


        >
          <FaArrowUp size={40} />
        </motion.button>
      )
    );
  };
  
  export default BackToTop;
  