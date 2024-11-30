import PropTypes from "prop-types";

const ServicesMobile = ({ services }) => {
  return (
    <div className="inline-flex flex-col items-center justify-center gap-16 py-10">
      {services.map((service, index) => (
        <div
          className="inline-flex flex-col items-center justify-center gap-6 px-4"
          key={index}
        >
          <img
            src={service.image}
            loading="lazy"
            className="aspect-square rounded-xl object-cover"
          />
          <div className="self-stretch font-['Montserrat'] text-3xl font-medium leading-9 !text-white">
            {service.title}
          </div>
          <div className="self-stretch font-['Montserrat'] text-lg font-normal leading-7 !text-white">
            {service.description}
          </div>
        </div>
      ))}
    </div>
  );
};

ServicesMobile.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ServicesMobile;
