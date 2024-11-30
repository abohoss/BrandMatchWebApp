import PropTypes from "prop-types";
import { motion } from "framer-motion";

const CTABtn = ({ text = "Start Now" }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <a
        href="#"
        className="inline-flex items-center justify-center rounded-full border-2 border-bright-red bg-bright-red px-5 py-2.5 font-['Montserrat'] text-base font-semibold text-white/100 no-underline transition-all duration-200 hocus:bg-white hocus:text-bright-red"
        role="button"
      >
        {text}
      </a>
    </motion.div>
  );
};

CTABtn.propTypes = {
  text: PropTypes.string,
};

export default CTABtn;
