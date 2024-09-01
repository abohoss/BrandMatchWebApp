import MyNavbar from "./Components/MyNavbar";
import Myfooter from "./Components/Myfooter";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import HowToStart from "./Components/HowToStart";
import KeyFeatures from "./Components/KeyFeatures";
import SuppliersPartnersMarque from "./Components/Marquee/SuppliersPartnersMarquee";

const App = () => {
  return (
    <>
      <MyNavbar />
      <Hero />
      <KeyFeatures />
      <SuppliersPartnersMarque />
      <AboutUs />
      <HowToStart />
      <Myfooter />
    </>
  );
};

export default App;
