import PropTypes from "prop-types";

const Service = ({ no, name, description, category, leftValue }) => {
  return (
    <div
      className={`absolute w-1/2 p-4 md:w-1/4`}
      style={{ left: `${leftValue}%` }}
    >
      <span className="mb-4 block text-xs" aria-hidden="true">
        0{no}
      </span>
      <h3 className="text-lg lg:text-xl">{name}</h3>
      <hr></hr>
      <p className="text-justify text-sm lg:text-base">{description}</p>
      <p
        className="inline rounded-full border px-1 py-1 text-xs"
        aria-hidden="true"
      >
        {category}
      </p>
    </div>
  );
};

Service.propTypes = {
  no: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  leftValue: PropTypes.string,
};

export default Service;
