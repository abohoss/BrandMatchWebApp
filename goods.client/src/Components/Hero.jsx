// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import MyNavbar from "./MyNavbar";
import { useScreenSize } from "../Hooks/useScreenSize";
import Warehouse from "../assets/images/Hero/warehouse.webp";
import CTABtn from "./atoms/CTABtn";

const Hero = () => {
  // const { ref, inView } = useInView({
  //   triggerOnce: true, // Trigger the animation only once
  //   threshold: 0.2, // Trigger when 20% of the component is visible
  // });

  // const fadeInDownVariants = {
  //   hidden: { opacity: 0, y: -40 },
  //   visible: { opacity: 1, y: 0 },
  // };
  const screenSize = useScreenSize();
  const circularText = "Your partner in m arket success .";

  return (
    <div className="relative">
      <header className="absolute inset-x-0 top-0 z-10 w-full">
        <MyNavbar />
      </header>

      <section className="overflow-hidden">
        <div className="flex flex-col lg:min-h-[800px] lg:flex-row lg:items-stretch">
          <div className="relative flex w-full items-center justify-center lg:order-2 lg:w-7/12">
            <div className="relative px-4 pb-16 pt-24 text-center sm:px-6 md:px-24 lg:py-24 lg:text-left 2xl:px-32">
              <h1 className="text-4xl font-bold sm:text-6xl xl:text-8xl">
                Maximize
                <br />
                your brand&apos;s Potential
              </h1>
              <p className="mt-8 text-xl">
                A holistic solution offering comprehensive sales, marketing, and
                logistics services tailored to your business
              </p>

              <div className="mx-auto mt-8 max-w-xl p-2 lg:mx-0 lg:mt-12">
                <CTABtn />
              </div>
              <a
                href="/assets/documents/BrandmatchProfile.pdf"
                download="Brandmatch Profile.pdf"
                target="_blank"
                rel="noreferrer"
                className="hover-link mt-5 inline-block cursor-pointer text-base font-semibold text-bright-red no-underline transition-all duration-200 hover:text-bright-red"
              >
                <button>Download Brandmatch Profile</button>
              </a>
            </div>

            <div className="absolute -bottom-16 right-0 z-10 m-0 flex h-32 w-32 items-center justify-center rounded-full p-0 md:h-40 md:w-40 lg:-left-20 lg:top-24">
              <p className="m-0 h-full w-full select-none p-0 text-base font-semibold !text-black md:text-lg">
                {circularText.split("").map((character, index) => (
                  <span
                    key={index}
                    style={{
                      transform: `rotate(${index * (360 / circularText.length)}deg)`,
                      transformOrigin: `0px ${["xs", "sm"].includes(screenSize) ? 64 : 80}px`,
                    }}
                    className="absolute left-1/2"
                  >
                    {character}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="relative h-96 w-full overflow-hidden lg:order-1 lg:h-screen lg:w-5/12">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={Warehouse}
                alt=""
              />
            </div>

            <div className="via-transparent to-transparent absolute inset-0 bg-gradient-to-t !from-black"></div>

            <div className="absolute bottom-0 left-0">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center">
                  <svg
                    className="h-10 w-10 text-bright-red"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h2 className="ml-2.5 text-7xl font-bold !text-white">
                    2000+
                  </h2>
                </div>
                <p className="mt-1.5 max-w-xs text-xl !text-white">
                  Sales Channels are offered by Brandmatch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
