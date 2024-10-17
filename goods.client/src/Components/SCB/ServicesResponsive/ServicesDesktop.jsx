import StartNow from "../../StartNow";

import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState, useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  MotionValue,
  useTransform,
  useAnimate,
  useInView,
  m,
  LazyMotion,
  domAnimation,
} from "framer-motion";

const ServicesDesktop = ({ scrollYProgress, services }) => {
  const [scope, animate] = useAnimate();
  const scrollProgressTransformed = useTransform(
    scrollYProgress,
    [0, 1],
    [0, (services.length - 1) * 100],
  );

  const [isChangeText, setIsChangeText] = useState(false);
  const imageIdx = useRef(null);
  useMotionValueEvent(scrollProgressTransformed, "change", (latestValue) => {
    // Animate Images
    imageIdx.current = parseInt(latestValue / 100) + 1;
    const offset = 100 - (latestValue % 100);
    if (imageIdx.current < services.length) {
      animate(`#serviceImg${imageIdx.current}`, {
        clipPath: `polygon(0% ${offset}%, 100% ${offset}%, 100% 100%, 0% 100%)`,
      });

      // Trigger text animation
      if (offset < 50 && !isChangeText) {
        setIsChangeText(true);
      } else if (offset > 50 && isChangeText) {
        setIsChangeText(false);
      }
    }
  });
  // Animate Text
  useEffect(() => {
    let textAnimations;
    if (isChangeText) {
      textAnimations = [
        [`#text${imageIdx.current - 1} p`, { opacity: 0 }],
        [
          `#text${imageIdx.current - 1} h4`,
          { opacity: 0, y: -40 },
          { at: "<" },
        ],
        [`#text${imageIdx.current} p`, { opacity: 1 }],
        [`#text${imageIdx.current} h4`, { opacity: 1, y: 0 }, { at: "<" }],
      ];
    } else {
      textAnimations = [
        [`#text${imageIdx.current} p`, { opacity: 0 }],
        [`#text${imageIdx.current} h4`, { opacity: 0, y: 40 }, { at: "<" }],
        [`#text${imageIdx.current - 1} p`, { opacity: 1 }],
        [`#text${imageIdx.current - 1} h4`, { opacity: 1, y: 0 }, { at: "<" }],
      ];
    }
    animate(textAnimations);
  }, [isChangeText, animate]);

  const isInView = useInView(scope, { amount: 1 });
  useEffect(() => {
    if (isInView && imageIdx.current < 4) {
      animate([
        [`#text0 p`, { opacity: 1 }],
        [`#text0 h4`, { opacity: 1, y: 0 }, { at: "<" }],
      ]);
    }
  }, [isInView, animate]);

  return (
    <LazyMotion features={domAnimation}>
      <div
        ref={scope}
        id="services"
        className="flex h-screen w-full items-center justify-between"
      >
        <div className="relative mx-6 mb-24 mt-6 flex w-1/2 flex-col items-start justify-end gap-6 self-stretch">
          <h3 className="absolute left-0 top-0 font-['Montserrat'] text-7xl font-bold leading-[72px] text-white">
            Services.
          </h3>
          <div className="relative w-full">
            {services.map(({ title, description }, index) => (
              <div
                id={`text${index}`}
                key={index}
                className="absolute bottom-0 left-0"
              >
                <m.h4
                  className="w-1/2 font-['Montserrat'] text-5xl font-semibold leading-[48px] text-white"
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                >
                  {title}
                </m.h4>
                <m.p
                  className="font-['Montserrat'] text-3xl font-semibold leading-9 text-gray-500"
                  initial={{ opacity: 0 }}
                >
                  {description}
                </m.p>
              </div>
            ))}
          </div>
          <div className="flex h-11 flex-col items-start justify-center gap-2 self-stretch">
            <StartNow />
          </div>
        </div>
        <div className="relative h-screen w-1/2">
          {services.map(({ image }, index) => {
            const offset = index ? 100 : 0;

            return (
              <motion.img
                id={`serviceImg${index}`}
                className="absolute right-0 top-0 h-screen w-full rounded-xl object-cover"
                src={image}
                key={index}
                initial={{
                  clipPath: `polygon(0% ${offset}%, 100% ${offset}%, 100% 100%, 0% 100%)`,
                }}
              />
            );
          })}
          ;
        </div>
      </div>
    </LazyMotion>
  );
};

ServicesDesktop.propTypes = {
  scrollYProgress: PropTypes.instanceOf(MotionValue).isRequired,
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ServicesDesktop;
