import { useEffect } from "react";
import style from "./RestaurantMenu.module.css";
const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {};

  return (
    <div className={style["menu-contaier"]}>
      <h1>Name of the Restaurant:</h1>
      <h2>Menus:</h2>
      <ul>
        <li>Biryani</li>
        <li>Biryani</li>
        <li>Biryani</li>
        <li>Biryani</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
