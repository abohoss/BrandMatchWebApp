import { useState } from "react";
import { useLenis } from "lenis/react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    if (latestValue >= 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const fadeInDownVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const handleClick = () => {
    lenis.scrollTo("top");
  };

  return (
    <motion.button
      className="fixed bottom-5 right-5 z-10 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-md shadow-bright-red"
      onClick={handleClick}
      variants={fadeInDownVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 1 }}
    >
      <svg className="w-3" viewBox="0 0 384 512">
        <path
          className="fill-bright-red"
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        ></path>
      </svg>
    </motion.button>
  );
};

export default BackToTopBtn;
