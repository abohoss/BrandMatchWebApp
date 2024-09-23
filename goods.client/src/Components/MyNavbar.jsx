import LogoNameRed from "../assets/images/LogoNameRed.svg";
import LogoRed from "../assets/images/LogoRed.svg";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import "../styles/footer.css";

const MyNavbar = () => {
  const { scroll } = useLocomotiveScroll();

  const handleClick = (e) => {
    const target = document.querySelector(`#${e.target.name}`);
    scroll.scrollTo(target);
  };

  return (
    <nav className="mx-auto px-4 sm:px-6 lg:px-8" data-scroll-section>
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

        <div className="lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 
            text-black transition-all duration-200 hover:bg-gray-100focus:outline-none focus:ring-0"
            onClick={() => {
              const navList = document.getElementById("navList");
              const button = document.getElementById("menuButton");
              navList.classList.toggle("hidden");
              button.classList.toggle("open");
              if (navList.classList.contains("hidden")) {
                // If hidden, reset the styles to hide smoothly
                setTimeout(() => {
                  navList.classList.add("opacity-0", "transform", "-translate-y-5");
                }, 10);
              } else {
                // Show with smooth transition
                navList.classList.remove("opacity-0", "transform", "-translate-y-5");
              }

            }}
            id="menuButton"
          >
            {/* Burger Icon */}
            <img src="src/assets/icons/burger-menu-svgrepo-com.svg" alt="" className="menu-icon block h-6 w-6 transition-transform duration-300 " />

            {/* X Icon */}
            <img src="src/assets/icons/close-svgrepo-com.svg" alt="" className="x-icon block h-6 w-6 transition-transform duration-300" />
          </button>


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
      <div className="" >
        <ul className="hidden transition-all duration-900 ease-in-out opacity-0 transform -translate-y-5" id="navList">
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
    </nav >
  );
};

export default MyNavbar;
