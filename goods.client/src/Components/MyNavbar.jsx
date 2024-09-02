import LogoNameRed from "../assets/images/LogoNameRed.svg";

const MyNavbar = () => {
  return (
    <nav className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between lg:h-20">
        <div className="flex-shrink-0">
          <a href="#" className="flex">
            <img
              className="h-8 w-auto"
              src={LogoNameRed}
              alt="Brandmatch logo"
            />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex rounded-md p-2 text-black transition-all duration-200 hover:bg-gray-100 focus:bg-gray-100 lg:hidden"
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
            ></path>
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
            ></path>
          </svg>
        </button>

        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
          <a
            href="#about"
            className="text-base text-black no-underline transition-all duration-200 hover:text-opacity-80"
          >
            About
          </a>

          <a
            href="#services"
            className="text-base text-black no-underline transition-all duration-200 hover:text-opacity-80"
          >
            Services
          </a>

          <a
            href="#howTo"
            className="text-base text-black no-underline transition-all duration-200 hover:text-opacity-80"
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
    </nav>
  );
};

export default MyNavbar;
