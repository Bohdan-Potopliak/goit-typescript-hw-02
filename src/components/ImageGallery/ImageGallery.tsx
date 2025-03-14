import s from "../ImageGallery/ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { FC } from "react";
import { ImageGalleryProps } from "../../types";

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
    return (
        <ul className={s.gallery}>
            {images.map((img) => (
                <li key={img.id} className={s.galleryItem} onClick={() => onImageClick(img)}>
                    <ImageCard img={img} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;
