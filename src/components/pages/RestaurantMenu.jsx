import { useEffect } from "react";
import style from "./RestaurantMenu.module.css";
const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645"
    );

    const json = await data.json();
    console.log(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };

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
