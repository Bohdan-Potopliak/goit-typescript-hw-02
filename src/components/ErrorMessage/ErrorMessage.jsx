import s from "./ErrorMessage.module.css";
import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  return <p className={s.errorMessege}>{message}</p>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
