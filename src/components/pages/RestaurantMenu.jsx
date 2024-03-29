import React, { useEffect, useState } from "react";
import style from "./RestaurantMenu.module.css";
import Shimmer from "../Card/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/Constant";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { restId } = useParams();

  console.log(restId);

  useEffect(() => {
    fetchMenu();
  }, []);
  // 246443
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restId);

    const json = await data.json();
    setMenu(json.data.cards);
  };

  if (!menu) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = menu[0].card.card.info;

  // data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card

  const menuItems =
    menu[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;

  const carouselItems =
    menu[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel;

  // console.log(
  //   menu[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories
  // );

  return (
    <div className={style["menu-contaier"]}>
      <h1>
        {name}: {cuisines}
      </h1>
      <p>{costForTwoMessage}</p>
      <h2>Menus:</h2>
      <ul>
        {menuItems ? (
          menuItems.map((item) => {
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} - Rs. &nbsp;
                {item.card.info.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </li>
            );
          })
        ) : (
          <ul>
            {carouselItems.map((item) => (
              <li key={item.bannerId}>{item.title}</li>
            ))}
          </ul>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
