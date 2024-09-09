import MyNavbar from "./Components/MyNavbar";
import Myfooter from "./Components/Myfooter";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import HowToStart from "./Components/HowToStart";
import KeyFeatures from "./Components/KeyFeatures";
import SuppliersPartnersMarque from "./Components/Marquee/SuppliersPartnersMarquee";
import Testimonials from "./Components/Testimonials";
import Challenges from "./Components/challenges";
const App = () => {
  return (
    <>
      <MyNavbar />
      <Hero />
      <KeyFeatures />
      <SuppliersPartnersMarque />
      <AboutUs />
      <Testimonials />
      <HowToStart />
      <Challenges />
      <Myfooter />
    </>
  );
};

export default App;
