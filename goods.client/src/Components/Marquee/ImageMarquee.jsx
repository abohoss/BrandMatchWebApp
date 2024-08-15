import PropTypes from "prop-types"
import Marquee from "react-fast-marquee"

const ImageMarquee = ({ images }) => {
  return (
    <Marquee pauseOnHover={true} speed={25}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${image} logo`}
          height={"50 vh"}
          style={{ margin: "16px 5vw" }}
        />
      ))}
    </Marquee>
  )
}

ImageMarquee.propTypes = {
  images: PropTypes.arrayOf(PropTypes.any),
}

export default ImageMarquee
