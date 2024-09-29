import PropTypes from "prop-types";
import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";
import "../styles/heroo.css";

const Hero = ({ isIntroComplete }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isIntroComplete && scope.current) {
      animate(
        "div",
        { opacity: [0, 1], y: [-40, 0] },
        { duration: 1, delay: stagger(0.5) },
      );
    }
  }, [scope, animate, isIntroComplete]);

  return (
    <section
      ref={scope}
      className="hero relative mb-16 flex flex-col items-center gap-2"
      data-scroll-section
    >
      <div>
        <h1
          style={{ fontSize: "12vw", lineHeight: "1" }}
          className="self-stretch truncate px-4"
        >
          <span className="block text-right text-dark-red">Maximize</span>
          <span className="block text-left">Your Brand&apos;s</span>
          <span className="block text-right">Potential</span>
        </h1>
      </div>
      <div>
        <p className="max-w-md text-center">Your partner in market success</p>
      </div>
      <div>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-full border-2 border-bright-red bg-bright-red px-5 py-2.5 text-base font-semibold text-white/100 no-underline transition-all duration-200 hocus:bg-white hocus:text-bright-red"
          role="button"
        >
          Start Now
        </a>
      </div>
    </section>
  );
};

Hero.propTypes = {
  isIntroComplete: PropTypes.bool,
};

export default Hero;
