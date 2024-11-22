import Definition from "./Definition";
import Services from "./ServicesResponsive/Services";

import { useRef } from "react";
import { useScreenSize } from "../../Hooks/useScreenSize";
import { useScroll } from "framer-motion";
import StartNow from "../StartNow";

const SurviveCareerBurnout = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["100vh start", "end"],
  });

  const screenSize = useScreenSize();

  return (
    <>
      {screenSize == "xs" || screenSize == "sm" ? (
        <section className="from-secondary-dark to-secondary-bright inline-flex flex-col overflow-hidden rounded-[50px] bg-gradient-to-b">
          <Definition />
          <Services scrollYProgress={scrollYProgress} />
          <div className="inline-flex flex-col items-center justify-center px-4 py-10">
            <StartNow />
          </div>
        </section>
      ) : (
        <div ref={targetRef} className="flex h-[1000vh] w-full flex-col">
          <div className="flex-1" aria-hidden="true"></div>
          <section
            className="from-secondary-dark to-secondary-bright sticky bottom-0 left-0 overflow-hidden rounded-[50px] bg-gradient-to-b"
            style={{ position: "-webkit-sticky" }}
          >
            <Definition />
            <Services scrollYProgress={scrollYProgress} />
          </section>
        </div>
      )}
    </>
  );
};

export default SurviveCareerBurnout;
