import MyNavbar from "./Components/MyNavbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Challenges from "./Components/Challenges";
import SurviveCareerBurnout from "./Components/SCB/SurviveCareerBurnout";
import SuppliersPartnersMarque from "./Components/Marquee/SuppliersPartnersMarquee";
import AboutUs from "./Components/AboutUs";
import Testimonials from "./Components/Testimonials";
import HowToStart from "./Components/HowToStart";
import Myfooter from "./Components/Myfooter";
import BackToTopBtn from "./Components/BackToTopBtn";

import { ReactLenis } from "lenis/react";

const App = () => {
  return (
    <ReactLenis root>
      <div>
        <MyNavbar />
        <BackToTopBtn />
        <main>
          <Hero />
          <Services />
          <Challenges />
          <SurviveCareerBurnout />
          <SuppliersPartnersMarque />
          <AboutUs />
          <Testimonials />
          <HowToStart />
        </main>
        <Myfooter />
      </div>
    </ReactLenis>
  );
};

export default App;
