import PropTypes from "prop-types";

const CTABtn = ({ text = "Start Now" }) => {
  return (
    <div>
      <a
        href="#"
        className="inline-flex items-center justify-center rounded-full border-2 border-bright-red bg-bright-red px-5 py-2.5 font-['Montserrat'] text-base font-semibold text-white/100 no-underline transition-all duration-200 hocus:bg-white hocus:text-bright-red"
        role="button"
      >
        {text}
      </a>
    </div>
  );
};

CTABtn.propTypes = {
  text: PropTypes.string,
};

export default CTABtn;
