import s from "../LoadMoreBtn/LoadMoreBtn.module.css";
import PropTypes from "prop-types";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className={s.loadMoreBtn}>
      Load more
    </button>
  );
};

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
