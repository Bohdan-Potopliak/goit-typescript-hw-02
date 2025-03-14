import { FC } from "react";
import s from "../ImageCard/ImageCard.module.css";
import { ImageCardProps } from "../../types";

const ImageCard: FC<ImageCardProps> = ({ img }) => {
    return (
        <div className={s.imgWrapper}>
            <img src={img.urls.small} alt={img.alt_description} className={s.img} />
        </div>
    );
};

export default ImageCard;
