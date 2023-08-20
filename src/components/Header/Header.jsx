import { useState } from "react";
import image from "../../Assets/logo.png";

import style from "./Header.module.css";
const Header = function () {
  const [btn, setBtn] = useState("Login");
  // let btName = "Login";

  const clickHandler = () => {
    // let btName = "Logout";
    // console.log(btName);
    // return btName;
    btn === "Login" ? setBtn("Logout") : setBtn("Login");
  };

  console.log(btn);
  return (
    <nav className={style.header}>
      <div className={style["logo-container"]}>
        <a href="#">
          <img src={image} alt="food express" width={"60px"} />
        </a>
      </div>

      <ul className={style.navbar}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <button className={style["login-btn"]} onClick={clickHandler}>
          {btn}
        </button>
      </ul>
    </nav>
  );
};
export default Header;
