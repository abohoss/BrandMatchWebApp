import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";

const ImageMarquee = ({ images, direction }) => {
  return (
    <Marquee pauseOnClick={true} speed={100} direction={direction}>
      {images.map((image, index) => (
        <div key={index} className="m-1 rounded border border-black/50 p-4">
          <img
            src={image}
            alt={`${image} logo`}
            className="h-8 md:h-16"
            draggable="false"
            loading="lazy"
          />
        </div>
      ))}
    </Marquee>
  );
};

ImageMarquee.propTypes = {
  images: PropTypes.arrayOf(PropTypes.any),
  direction: PropTypes.string,
};

export default ImageMarquee;
