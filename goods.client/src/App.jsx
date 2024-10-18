import MyNavbar from "./Components/MyNavbar";
import Myfooter from "./Components/Myfooter";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import HowToStart from "./Components/HowToStart";
import KeyFeatures from "./Components/KeyFeatures";
import SuppliersPartnersMarque from "./Components/Marquee/SuppliersPartnersMarquee";
import Testimonials from "./Components/Testimonials";
import Challenges from "./Components/Challenges";
import BackToTopBtn from "./Components/BackToTopBtn";
import Intro from "./Components/Intro";
import ServicesSection from "./Components/ServicesSection";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useState } from "react";

const App = () => {
  const ref = useRef(null);
  const [isIntro, setIsIntro] = useState(true);

  // const leftValues = ["0", "1/4", "1/3", "1/2", "2/3", "3/4"];
  const [leftValues, setLeftValues] = useState([
    "0",
    "25",
    "33.3",
    "50",
    "66.6",
    "75",
  ]);

  const options = {
    smooth: true,
    lerp: 0.06,
    multiplier: 1,
    mobile: {
      breakpoint: 0,
      smooth: true,
    },
    tablet: {
      breakpoint: 0,
      smooth: true,
    },
  };

  return (
    <LocomotiveScrollProvider
      options={options}
      containerRef={ref}
      watch={[leftValues]}
    >
      <div data-scroll-container ref={ref}>
        <MyNavbar isIntroComplete={!isIntro} />
        <BackToTopBtn />
        <main>
          <Hero isIntroComplete={!isIntro} />
          <Intro isIntro={isIntro} setIsIntro={setIsIntro} />
          
          <ServicesSection />
          <Challenges />
          <KeyFeatures />
          <SuppliersPartnersMarque />
          <AboutUs />
          <Testimonials />
          <HowToStart />
     
        </main>
        <Myfooter />
      </div>
    </LocomotiveScrollProvider>

  );
};

export default App;
