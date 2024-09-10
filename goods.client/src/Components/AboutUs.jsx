import "../styles/aboutUs.css";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react'

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger the animation only once
    threshold: 0.2,     // Trigger when 20% of the component is visible
  });

  const fadeInDownVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24" id="about">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Why Choose Us</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-900">Explore the common questions and answers about BrandMatch</p>
          </div>

          <div ref={ref} className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <motion.div
              variants={fadeInDownVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-bright-red rounded-full">
                  <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold text-gray-900">Who are you?</p>
                  <p className="mt-4 text-base text-gray-800">BrandMatch is a highly regarded provider of integrated marketing, sales, and logistics services.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInDownVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-bright-red rounded-full">
                  <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold text-gray-900">How can you help me?</p>
                  <p className="mt-4 text-base text-gray-800">We help you overcome career burnout by creating a powerful personal brand for you. Find partners, fund your brand, and let us handle the rest.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInDownVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-bright-red rounded-full">
                  <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold text-gray-900">How do you provide support?</p>
                  <p className="mt-4 text-base text-gray-800">We assist businesses at all stages, from market entry to sustaining presence and unlocking growth opportunities.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInDownVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 2 }}
            >
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-bright-red rounded-full">
                  <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold text-gray-900">What should I do now?</p>
                  <p className="mt-4 text-base text-gray-800"> Just get in touch! <a href="#footer" className="text-blue-500 transition duration-300 ease-in-out hover:text-blue-700">Contact us</a> today to learn more about how BrandMatch can help you grow. </p>
                </div>
              </div>
            </motion.div>
          </div>


        </div>
      </section>
    </>

  )
}

export default AboutUs