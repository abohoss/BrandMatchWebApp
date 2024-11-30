import Quotation from "../assets/icons/quotation.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const fadeInDownVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="!!bg-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Our Clients <span className="text-dark-red">Testimonials</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-x-6 gap-y-6 text-center sm:mt-12 lg:mt-20 lg:max-w-full lg:grid-cols-3 xl:gap-x-12"
        >
          <motion.div
            variants={fadeInDownVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="overflow-hidden rounded-md !bg-white shadow">
              <div className="px-8 py-12">
                <div className="relative mx-auto h-24 w-24">
                  <img
                    loading="lazy"
                    className="relative mx-auto h-24 w-24 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                    alt=""
                  />
                  <div className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-dark-red">
                    <img
                      loading="lazy"
                      src={Quotation}
                      alt="quotation mark"
                      width="15"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg">
                    “BrandMatch took the stress out of building my personal
                    brand. Their team handled everything, allowing me to focus
                    on my career transition.”
                  </p>
                </blockquote>
                <p className="mt-9 text-base font-semibold">Alex R.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInDownVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="overflow-hidden rounded-md !bg-white shadow">
              <div className="px-8 py-12">
                <div className="relative mx-auto h-24 w-24">
                  <img
                    loading="lazy"
                    className="relative mx-auto h-24 w-24 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg"
                    alt=""
                  />
                  <div className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-dark-red">
                    <img
                      loading="lazy"
                      src={Quotation}
                      alt="quotation mark"
                      width="15"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg">
                    “The partnership and funding support were game-changers.
                    BrandMatch helped me turn my burnout into a successful
                    personal brand.”
                  </p>
                </blockquote>
                <p className="mt-9 text-base font-semibold">Jamie K.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInDownVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="overflow-hidden rounded-md !bg-white shadow">
              <div className="px-8 py-12">
                <div className="relative mx-auto h-24 w-24">
                  <img
                    loading="lazy"
                    className="relative mx-auto h-24 w-24 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg"
                    alt=""
                  />
                  <div className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-dark-red">
                    <img
                      loading="lazy"
                      src={Quotation}
                      alt="quotation mark"
                      width="15"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg">
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat”
                  </p>
                </blockquote>
                <p className="mt-9 text-base font-semibold">Kristin Watson</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
