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
        <section className="inline-flex flex-col overflow-hidden rounded-[50px] bg-gradient-to-b from-[#610007] to-[#160001]">
          <Definition />
          <Services scrollYProgress={scrollYProgress} />
          <div className="inline-flex flex-col items-center justify-center px-4 py-10">
            <StartNow />
          </div>
        </section>
      ) : (
        <div ref={targetRef} className="flex h-[500vh] w-full flex-col">
          <div className="flex-1" aria-hidden="true"></div>
          <section
            className="sticky bottom-0 left-0 overflow-hidden rounded-[50px] bg-gradient-to-b from-[#610007] to-[#160001]"
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