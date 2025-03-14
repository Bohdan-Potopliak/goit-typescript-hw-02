import s from "../ImageGallery/ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import PropTypes from "prop-types";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map((img) => (
        <li
          key={img.id}
          className={s.galleryItem}
          onClick={() => onImageClick(img)}
        >
          <ImageCard img={img} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
      }).isRequired,
      alt_description: PropTypes.string,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
