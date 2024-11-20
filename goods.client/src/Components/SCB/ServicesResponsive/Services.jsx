import { useScreenSize } from "../../../Hooks/useScreenSize";
import ServicesDesktop from "./ServicesDesktop";
import ServicesMobile from "./ServicesMobile";

import Partnership from "../../../assets/images/Services/partnership.webp";
import Crowdfunding from "../../../assets/images/Services/crowdfunding.webp";
import Expert from "../../../assets/images/Services/Expert.webp";
import Experience from "../../../assets/images/Services/experience.webp";

import PropTypes from "prop-types";
import { MotionValue } from "framer-motion";

const services = [
  {
    title: "Partnership Matching",
    description:
      "Connect with partners who complement your vision and enhance your brand, fostering collaborative growth.",
    image: Partnership,
  },
  {
    title: "Crowdfunding Assistance",
    description:
      "Secure the necessary funds for your branding project through our community-backed crowdfunding platform.",
    image: Crowdfunding,
  },
  {
    title: "Expert-Driven Process",
    description:
      "Benefit from the expertise of industry professionals who ensure your brand stands out in the market.",
    image: Expert,
  },
  {
    title: "Stress-Free Experience",
    description:
      "Focus on what matters most to you while we manage the entire branding process, from concept to execution.",
    image: Experience,
  },
];

const Services = ({ scrollYProgress }) => {
  const screenSize = useScreenSize();

  return (
    <>
      {screenSize == "xs" || screenSize == "sm" ? (
        <ServicesMobile services={services} />
      ) : (
        <ServicesDesktop
          scrollYProgress={scrollYProgress}
          services={services}
        />
      )}
    </>
  );
};

Services.propTypes = {
  scrollYProgress: PropTypes.instanceOf(MotionValue).isRequired,
};

export default Services;
