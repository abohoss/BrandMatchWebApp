import MyNavbar from "./Components/MyNavbar";
import Myfooter from "./Components/Myfooter";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import HowToStart from "./Components/HowToStart";
import KeyFeatures from "./Components/KeyFeatures";
import SuppliersPartnersMarque from "./Components/Marquee/SuppliersPartnersMarquee";
import Testimonials from "./Components/Testimonials";
import Challenges from "./Components/challenges";
import Services from "./Components/Services";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

const App = () => {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <div data-scroll-container ref={ref}>
        <MyNavbar />
        <main>
          <Hero />
          <Services />
          <KeyFeatures />
          <SuppliersPartnersMarque />
          <AboutUs />
          <Testimonials />
          <HowToStart />
          <Challenges />
        </main>
        <Myfooter />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default App;
