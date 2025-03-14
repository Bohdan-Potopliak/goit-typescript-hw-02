import { useEffect } from "react";
import Modal from "react-modal";
import s from "../ImageModal/ImageModal.module.css";
import PropTypes from "prop-types";
Modal.setAppElement("#root");

const ImageModal = ({ isOpen, img, onClose }) => {
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);

  if (!img) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.modalContent}>
        <img
          src={img.urls.regular}
          alt={img.alt_description}
          className={s.modalImage}
        />
        <div className={s.modalInfo}>
          <p>
            <strong>Author:</strong> {img.user.name}
          </p>
          <p>
            <strong>Likes:</strong> {img.likes}
          </p>
          <p>
            <strong>Description:</strong>{" "}
            {img.alt_description || "Without description"}
          </p>
        </div>
        <button onClick={onClose} className={s.closeBtn}>
          X
        </button>
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  img: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
