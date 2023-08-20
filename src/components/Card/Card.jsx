/* eslint-disable react/prop-types */
import style from "./Card.module.css";
import { CARD_IMAGE } from "../../utils/Constant";
const Card = ({ cardData }) => {
  // console.log(cardData);
  return (
    <div className={style["resturant-constainer"]}>
      {cardData?.map((card) => (
        <div className={style["resturant-card"]} key={card?.info?.id}>
          <div className={style["card"]}>
            <img
              src={CARD_IMAGE + card?.info?.cloudinaryImageId}
              alt={card?.info?.name}
            />

            <div className={style["card-details"]}>
              <h2>{card?.info?.name}</h2>
              <p>{card?.info?.cuisines?.join(", ")}</p>
              <div className={style["food-rating"]}>
                <span
                  className={
                    +card?.info?.avgRating >= 4 ? "good ratings" : "avg ratings"
                  }
                >
                  <i className={"fas fa-star"} />
                  <p>{card?.info?.avgRating}</p>
                </span>
                <p>{card?.info?.locality + ", " + card?.info?.areaName}</p>
                <p>{card?.info?.costForTwo}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
