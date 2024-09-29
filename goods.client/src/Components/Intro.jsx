import { useEffect, useState } from "react";
import { useAnimate, motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import AgdadnaAd from "../assets/videos/agdadna ad.mp4";

const Intro = () => {
  const { scroll } = useLocomotiveScroll();
  const [scope, animate] = useAnimate();
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    const introTimeline = [
      [
        "div#slogans",
        { y: ["33%", "0%", "-33%", "-66%", "-100%"] },
        {
          duration: 8,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
        },
      ],
      [
        "video",
        { scale: 0.9 },
        {
          duration: 1,
          ease: "easeIn",
        },
      ],
    ];

    if (scope.current && scroll) {
      scroll.stop();
      animate(introTimeline).then(() => {
        scroll.start();
        setIsIntro(false);
      });
    }
  }, [scope, animate, scroll]);

  return (
    <motion.div
      className="left-0 top-0 z-40 flex h-screen w-screen items-center justify-center"
      layout
      style={{ position: isIntro ? "absolute" : "relative" }}
      transition={{
        layout: {
          duration: 2,
          ease: "easeIn",
        },
      }}
      ref={scope}
      data-scroll-section
    >
      <video
        loop
        autoPlay
        muted
        playsInline
        className="absolute left-0 top-0 h-auto min-h-full w-auto min-w-full rounded-3xl object-cover"
      >
        <source src={AgdadnaAd} />
      </video>
      <div className="z-50 h-14 overflow-hidden lg:h-10">
        <div id="slogans" className="flex flex-col text-center text-white">
          <p>
            1 A Holistic Solution Offering Comprehensive Sales, Marketing, and
            Logistics Services Tailored to Your Business
          </p>
          <p>
            2 A Holistic Solution Offering Comprehensive Sales, Marketing, and
            Logistics Services Tailored to Your Business
          </p>
          <p>
            3 A Holistic Solution Offering Comprehensive Sales, Marketing, and
            Logistics Services Tailored to Your Business
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
