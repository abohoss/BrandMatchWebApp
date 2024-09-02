const Hero = () => {
  return (
    <section className="relative mb-16 flex flex-col items-center gap-2">
      <h1
        style={{ "font-size": "12vw", "line-height": "1" }}
        className="block self-stretch px-4"
      >
        <span className="block text-right text-dark-red">Maximize</span>
        <span className="block text-left">Your Brand&apos;s</span>
        <span className="block text-right">Potential</span>
      </h1>
      <p className="max-w-md text-center">
        A Holistic Solution Offering Comprehensive Sales, Marketing, and
        Logistics Services Tailored to Your Business
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center rounded-full border-2 border-bright-red bg-bright-red px-5 py-2.5 text-base font-semibold text-white/100 no-underline transition-all duration-200 hocus:bg-white hocus:text-bright-red"
        role="button"
      >
        Start Now
      </a>
    </section>
  );
};

export default Hero;
