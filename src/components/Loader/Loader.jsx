import { InfinitySpin } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loaderWrapper}>
      <InfinitySpin width="200" color="black" />
    </div>
  );
};

export default Loader;
