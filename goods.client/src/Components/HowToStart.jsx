import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HowToStart() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section id="howTo" className="py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            How does it work?
          </h2>
        </div>

        <div ref={ref} className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 top-2 hidden md:block md:px-20 lg:px-28 xl:px-44">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt="Picture of dotted Track"
              loading="lazy"
              aria-hidden
            />
          </div>

          <div className="relative grid grid-cols-1 gap-x-12 gap-y-12 text-center md:grid-cols-3">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-secondary-dark !bg-white shadow-md shadow-secondary-dark">
                  <span className="text-xl font-semibold text-secondary-dark">
                    1
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-dark-red md:mt-10">
                  Sign Up
                </h3>
                <p className="mt-4 text-base">
                  Join our community and share your vision and goals.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 1 }}
            >
              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-secondary-dark !bg-white shadow-md shadow-secondary-dark">
                  <span className="text-xl font-semibold text-secondary-dark">
                    2
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-dark-red md:mt-10">
                  Get Matched
                </h3>
                <p className="mt-4 text-base">
                  We connect you with suitable partners and funding options.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-secondary-dark !bg-white shadow-md shadow-secondary-dark">
                  <span className="text-xl font-semibold text-secondary-dark">
                    3
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-dark-red md:mt-10">
                  We Create & Launch
                </h3>
                <p className="mt-4 text-base">
                  Our experts design and develop your personal brand and you
                  receive a fully-realized brand, ready to make an impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 2 }}
          >
            <a href="https://example.com" className="inline-block">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border-2 border-bright-red bg-bright-red px-5 py-2.5 text-base font-semibold text-white/100 no-underline transition-all duration-200 hocus:!bg-white hocus:text-bright-red"
              >
                Start Now
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HowToStart;
