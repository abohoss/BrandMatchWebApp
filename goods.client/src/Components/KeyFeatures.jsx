import "../styles/keyFeatures.css";
import Design from "../assets/icons/features/design.svg";
import Handshake from "../assets/icons/features/handshake.svg";
import Crowdfunding from "../assets/icons/features/crowdfunding.svg";
import Process from "../assets/icons/features/process.svg";
import Experience from "../assets/icons/features/experience.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const KeyFeatures = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.4, // Trigger when 20% of the component is visible
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
      icon: null,
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam ullam sunt perferendis,",
    },
  ];

  return (
    <section
      ref={ref}
      className="m-8 flex flex-col items-center"
      data-scroll-section
    >
      <h2>Key Features</h2>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div id="featuresBG" className="m-8">
          <div className="grid max-w-7xl grid-cols-2 gap-0.5 sm:grid-cols-3">
            {features.map((feature, index) => (
              <div
                className="flex flex-col items-center gap-2 bg-white p-8"
                key={index}
              >
                <img
                  src={feature.icon}
                  alt={`${feature.icon == null ? null : feature.icon.split("/").pop()} icon`}
                  width="75"
                  // height="10"
                  className="mb-4"
                />
                <h3 className="text-center">{feature.title}</h3>
                <p className="text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default KeyFeatures;
