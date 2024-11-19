import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const fadeInDownVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section
      ref={ref}
      className="hero relative mb-16 flex flex-col items-center gap-2"
    >
      <motion.div
        variants={fadeInDownVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1
          style={{ fontSize: "12vw", lineHeight: "1" }}
          className="self-stretch truncate px-4"
        >
          <span className="block text-right text-dark-red">Maximize</span>
          <span className="block text-left">Your Brand&apos;s</span>
          <span className="block text-right">Potential</span>
        </h1>
      </motion.div>
      <motion.div
        variants={fadeInDownVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="max-w-md text-center">Your partner in market success</p>
      </motion.div>
      <motion.div
        variants={fadeInDownVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 2 }}
      >
        <a
          href="https://drive.google.com/uc?export=download&id=1EXGIZc1IBTgZR3lwx2UjHkGo8rXskgIL"
          className=" items-center justify-center rounded-full border-2 border-bright-red bg-bright-red px-5 py-2.5 text-base font-semibold text-white/100 no-underline transition-all duration-200 hocus:bg-white hocus:text-bright-red lg:inline-flex"
          role="button"
          download
        >
          Learn More
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
