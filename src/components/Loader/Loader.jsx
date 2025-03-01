// import { RotatingLines } from "react-loader-spinner";
import { ClipLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => (
   <div className={s.loader}> {/* Застосування стилю з CSS модуля */}
    <ClipLoader color="#00BFFF" size={50} />
  </div>
);




// const Loader = () => (
//   <div className={s.loader}>
    // <RotatingLines
    //   strokeColor="blue"
    //   strokeWidth="5"
    //   animationDuration="0.75"
    //   width="50"
    //   visible={true}
    // />
//   </div>
// );

export default Loader;





