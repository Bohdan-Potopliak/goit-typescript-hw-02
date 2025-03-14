import { FC } from "react";
import s from "../LoadMoreBtn/LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "../../types";

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
    return (
        <button onClick={onLoadMore} className={s.loadMoreBtn}>
            Load more
        </button>
    );
};

export default LoadMoreBtn;
