import { useEffect, FC } from "react";
import { ImageModalProps } from "../../types";
import Modal from "react-modal";
import s from "../ImageModal/ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal: FC<ImageModalProps> = ({ isOpen, img, onClose }) => {
    useEffect(() => {
        const handleEscKey = (e: KeyboardEvent) => {
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
        <Modal isOpen={isOpen} onRequestClose={onClose} className={s.modal} overlayClassName={s.overlay}>
            <div className={s.modalContent}>
                <img src={img.urls.regular} alt={img.alt_description || "Image"} className={s.modalImage} />
                <div className={s.modalInfo}>
                    <p>
                        <strong>Author:</strong> {img.user?.name || "Unknown"}
                    </p>
                    <p>
                        <strong>Likes:</strong> {img.likes}
                    </p>
                    <p>
                        <strong>Description:</strong> {img.alt_description || "Without description"}
                    </p>
                </div>
                <button onClick={onClose} className={s.closeBtn} aria-label="Close modal">
                    X
                </button>
            </div>
        </Modal>
    );
};

export default ImageModal;
