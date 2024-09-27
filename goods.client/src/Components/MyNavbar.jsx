import LogoNameRed from "../assets/images/LogoNameRed.svg";
import LogoRed from "../assets/images/LogoRed.svg";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import "../styles/nav.css";
import { useState } from "react";
const MyNavbar = () => {
  const { scroll } = useLocomotiveScroll();

  const handleClick = (e) => {
    const target = document.querySelector(`#${e.target.name}`);
    scroll.scrollTo(target);
  };
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
    const button = document.getElementById('menuButton');
    button.classList.toggle("open");
  }
  const handleClickMobile = (e) => {
    handleShowNavbar();
    const target = document.querySelector(`#${e.target.name}`);
    scroll.scrollTo(target);
  };

  return (
    <nav className="mx-auto px-4 sm:px-6 lg:px-8 " data-scroll-section>
      <div className="flex h-16 items-center justify-between lg:h-20">
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
          <img src="assets/images/burger-menu-svgrepo-com.svg" alt="" className="menu-burger block h-6 w-6 transition-transform duration-300 " />
          {/* X Icon */}
          <img src="assets/images/close-svgrepo-com.svg" alt="" className="x-icon block h-6 w-6 transition-transform duration-300" />

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
      </div>

      {/* Collapsible Menu for mobile ya 3am mark */}
      <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul className=" " id="navList">
          <li>
            <a
              onClick={handleClickMobile}
              name="services"
              className="block w-full px-2 py-2 text-left text-black no-underline transition-all duration-200 hover:text-opacity-80"
            >
              Services
            </a>
          </li>
          <li>
            <a
              onClick={handleClickMobile}
              name="about"
              className="block w-full px-2 py-2 text-left text-black no-underline transition-all duration-200 hover:text-opacity-80"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={handleClickMobile}
              name="howTo"
              className="block w-full px-2 py-2 text-left text-black no-underline transition-all duration-200 hover:text-opacity-80"
            >
              How to start
            </a>
          </li>
        </ul>
      </div>
    </nav >
  );
};

export default MyNavbar;



