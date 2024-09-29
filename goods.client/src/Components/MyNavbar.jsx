import PropTypes from "prop-types";
import { useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { LazyMotion, domAnimation, m } from "framer-motion";
import "../styles/nav.css";
import LogoNameRed from "../assets/images/LogoNameRed.svg";
import LogoRed from "../assets/images/LogoRed.svg";

const MyNavbar = ({ isIntroComplete }) => {
  const { scroll } = useLocomotiveScroll();

  const handleClick = (e) => {
    const target = document.querySelector(`#${e.target.name}`);
    scroll.scrollTo(target);
  };
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    const button = document.getElementById("menuButton");
    button.classList.toggle("open");
  };

  return (
    <nav className="mx-auto px-4 sm:px-6 lg:px-8" data-scroll-section>
      <LazyMotion features={domAnimation} strict>
        <m.div
          className="flex h-16 items-center justify-between lg:h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isIntroComplete ? 1 : 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <div className="flex-shrink-0">
            <a href="#" className="flex">
              <img
                className="h-8 w-auto"
                src={window.innerWidth >= 640 ? LogoNameRed : LogoRed}
                alt="Brandmatch logo"
              />
            </a>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar} id="menuButton">
            {/* Burger Icon */}
            <img
              src="assets/images/burger-menu-svgrepo-com.svg"
              alt=""
              className="menu-burger block h-6 w-6 transition-transform duration-300"
            />
            {/* X Icon */}
            <img
              src="assets/images/close-svgrepo-com.svg"
              alt=""
              className="x-icon block h-6 w-6 transition-transform duration-300"
            />
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <a
              onClick={handleClick}
              name="services"
              className="hover-link cursor-pointer text-base text-black no-underline transition-all duration-200 hover:text-opacity-80"
            >
              Services
            </a>
            <a
              onClick={handleClick}
              name="about"
              className="hover-link cursor-pointer text-base text-black no-underline transition-all duration-200 hover:text-opacity-80"
            >
              About
            </a>
            <a
              onClick={handleClick}
              name="howTo"
              className="hover-link cursor-pointer text-base text-black no-underline transition-all duration-200 hover:text-opacity-80"
            >
              How to start
            </a>
          </div>
          <a
            href="#"
            className="hidden items-center justify-center rounded-full border-2 border-bright-red bg-bright-red px-5 py-2.5 text-base font-semibold text-white/100 no-underline transition-all duration-200 hocus:bg-white hocus:text-bright-red lg:inline-flex"
            role="button"
          >
            Start Now
          </a>
        </m.div>
        {/* Collapsible Menu for mobile */}
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul className=" " id="navList">
            <li>
              <a
                onClick={handleClick}
                name="services"
                className="block w-full px-2 py-2 text-left text-black no-underline transition-all duration-200 hover:text-opacity-80"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                name="about"
                className="block w-full px-2 py-2 text-left text-black no-underline transition-all duration-200 hover:text-opacity-80"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                name="howTo"
                className="block w-full px-2 py-2 text-left text-black no-underline transition-all duration-200 hover:text-opacity-80"
              >
                How to start
              </a>
            </li>
          </ul>
        </div>
      </LazyMotion>
    </nav>
  );
};

MyNavbar.propTypes = {
  isIntroComplete: PropTypes.bool,
};

export default MyNavbar;
