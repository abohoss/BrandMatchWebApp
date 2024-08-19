import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HowToStart() {
    const { ref, inView } = useInView({
        triggerOnce: true,  // Trigger the animation only once
        threshold: 0.2,     // Trigger when 20% of the component is visible
    });

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <section id='howTo' class="py-10 bg-white sm:py-16 lg:py-24">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>

                </div>

                <div ref={ref} class="relative mt-12 lg:mt-20">
                    <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                    </div>

                    <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <motion.div
                            variants={fadeInUpVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <div>
                                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <span class="text-xl font-semibold text-gray-700"> 1 </span>
                                </div>
                                <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Sign Up</h3>
                                <p class="mt-4 text-base text-gray-600">: Join our community and share your vision and goals.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUpVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <div>
                                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <span class="text-xl font-semibold text-gray-700"> 2 </span>
                                </div>
                                <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Get Matched</h3>
                                <p class="mt-4 text-base text-gray-600">We connect you with suitable partners and funding options.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUpVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <div>
                                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <span class="text-xl font-semibold text-gray-700"> 3 </span>
                                </div>
                                <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">We Create & Launch</h3>
                                <p class="mt-4 text-base text-gray-600">Our experts design and develop your personal brand and you receive a fully-realized brand, ready to make an impact.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div class="max-w-2xl mx-auto text-center">
                    <motion.div
                        variants={fadeInUpVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ duration: 1, delay: 2 }}
                    >
                        <a href="https://example.com" className="inline-block">
                            <button type="button" class="btn btn-danger btn-lg">Start Now</button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default HowToStart;

