import "../styles/keyFeatures.css";
import Design from "../assets/icons/features/design.svg";
import Handshake from "../assets/icons/features/handshake.svg";
import Crowdfunding from "../assets/icons/features/crowdfunding.svg";
import Process from "../assets/icons/features/process.svg";
import Experience from "../assets/icons/features/experience.svg";
import Burnout from "../assets/icons/features/burndown-svgrepo-com.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const KeyFeatures = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 20% of the component is visible
  });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  const features = [
    {
      icon: Design,
      title: "Branding Solutions",
      description:
        "We handle everything from logo design and social media strategy to content creation and marketing.",
    },
    {
      icon: Handshake,
      title: "Partnership Matching",
      description:
        "Connect with partners who complement your vision and enhance your brand, fostering collaborative growth.",
    },
    {
      icon: Crowdfunding,
      title: "Crowdfunding Assistance",
      description:
        "Secure the necessary funds for your branding project through our community-backed crowdfunding platform.",
    },
    {
      icon: Process,
      title: "Expert-Driven Process",
      description:
        "Benefit from the expertise of industry professionals who ensure your brand stands out in the market.",
    },
    {
      icon: Experience,
      title: "Stress-Free Experience",
      description:
        "Focus on what matters most to you while we manage the entire branding process, from concept to execution.",
    },
    {
      icon: Burnout,
      title: "Survive career burnout",
      description:
        "We help you overcome career burnout by creating a powerful personal brand for you. ",
    },

  ];

  return (
    <section

      className="mx-auto flex max-w-7xl flex-col items-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
      data-scroll-section
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Key Features
        </h2>
      </div>

      <div id="featuresBG" className="m-8 sm:mt-12 lg:mt-20">
        <div ref={ref} className="grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {features.map((feature, index) => (

            <div
              className=" bg-white "
              key={index}

            >
              <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 1, delay: 0.5 + (index / 2) }}
                className="flex flex-col items-center gap-2 p-6"
              >
              <img
                src={feature.icon}

                alt={`${feature.icon == null ? null : feature.icon.split("/").pop()} icon`}
                width="75"
                className="mb-4"
              />

                <h3 className="text-center ">{feature.title}</h3>
                <p className="text-center">{feature.description}</p>
              </motion.div>
            </div>

          ))}
        </div>
      </div>


    </section >
  );
};

export default KeyFeatures;
