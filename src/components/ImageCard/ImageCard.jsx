import s from "../ImageCard/ImageCard.module.css";
import PropTypes from "prop-types";

const ImageCard = ({ img }) => {
  return (
    <div className={s.imgWrapper}>
      <img src={img.urls.small} alt={img.alt_description} className={s.img} />
    </div>
  );
};

ImageCard.propTypes = {
  img: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
};

export default ImageCard;
