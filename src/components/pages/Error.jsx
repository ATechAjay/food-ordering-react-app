import style from "./Error.module.css";
// This hook provided by React route  dom library.
import { useRouteError } from "react-router-dom";

const Error = () => {
  let err = useRouteError();
  console.log(err);
  return (
    <div className={style["error-container"]}>
      <h1>❌Something Went Wrong❌</h1>
      <h2>{err.error.message}</h2>
      <p>{err.statusText} 😖</p>
    </div>
  );
};

export default Error;
