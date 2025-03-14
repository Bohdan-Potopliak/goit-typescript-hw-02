import { FC } from "react";
import s from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "../../types";

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
    return <p className={s.errorMessege}>{message}</p>;
};

export default ErrorMessage;
