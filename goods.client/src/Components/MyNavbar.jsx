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
            className="inline-flex items-center justify-center rounded-md p-2 text-black transition-all duration-200 hover:bg-gray-100 focus:bg-gray-100"
            onClick={() =>
              document.getElementById("navList").classList.toggle("hidden")
            }
          >
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>

            <svg
              className="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
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
      <div className="hidden lg:hidden" id="navList">
        <ul className="space-y-4">
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
    </nav>
  );
};

export default MyNavbar;
