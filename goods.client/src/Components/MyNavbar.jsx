import LogoNameRed from "../assets/images/LogoNameRed.svg";
import LogoRed from "../assets/images/LogoRed.svg";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import "../styles/nav.css";
import { useState, useEffect, useCallback } from "react";
const MyNavbar = () => {
  const { scroll } = useLocomotiveScroll();
  const [windowHeight, setWindowHeight] = useState('100vh');
  const [showNavbar, setShowNavbar] = useState(false)
  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
    document.body.style.width = '100%';
    document.body.style.position = 'fixed';

    // Store the current scroll position
    document.body.style.top = `-${window.scrollY}px`;

    if (scroll) {
      scroll.stop();
    }
  }, [scroll]);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
    document.body.style.height = '';
    document.body.style.width = '';
    document.body.style.position = '';

    // Restore the scroll position
    const scrollY = document.body.style.top;
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    if (scroll) {
      scroll.start();
    }
  }, [scroll]);

  useEffect(() => {
    if (showNavbar) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [showNavbar, lockScroll, unlockScroll]);

  const handleClick = (e) => {
    const target = document.querySelector(`#${e.target.name}`);
    scroll.scrollTo(target);
  };

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

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(`${window.innerHeight}px`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showNavbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [showNavbar]);


  return (
    <div className="relative">
      <nav className=" mx-auto px-4 sm:px-6 lg:px-8 " data-scroll-section>
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
      </nav >
      {showNavbar && (

        <div className={`nav-elements  ${showNavbar && 'active'}  `}
          style={{ height: windowHeight }}>

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
      )}
    </div>
  );
};

export default MyNavbar;


// import React, { useState, useEffect } from 'react';
// import { Menu } from 'lucide-react';

// const MyNavbar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [windowHeight, setWindowHeight] = useState('100vh');

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowHeight(`${window.innerHeight}px`);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="relative">
//       <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold">My Website</h1>
//         <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
//           <Menu size={24} />
//         </button>
//       </nav>

//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-gray-800 text-white p-4 z-50 overflow-y-auto"
//           style={{ height: windowHeight }}
//         >
//           <button
//             onClick={() => setIsSidebarOpen(false)}
//             className="absolute top-4 right-4 text-xl"
//           >
//             ✕
//           </button>
//           <ul className="mt-12">
//             <li className="mb-4">Home</li>
//             <li className="mb-4">About</li>
//             <li className="mb-4">Services</li>
//             <li className="mb-4">Contact</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyNavbar;
