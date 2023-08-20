import Card from "../Card/Card";
import Shimmer from "../Card/Shimmer";
// import DATA from "../../utils/LOCAL_DATA";
import style from "./MainContainer.module.css";
import { useEffect, useState } from "react";

const MainContaier = () => {
  const [list, setList] = useState();
  const [filterRes, setFilterRes] = useState();
  const [searchText, setSearchText] = useState("");
  // const [listOfRestaurant, setListOfRestaurant] = useState(DATA)
  console.log("first");
  useEffect(() => {
    // console.log("Use Effect Function");
    fetchData();
  }, []);

  const fetchData = async () => {
    // We can get lattitude and longitude of the use to show the custome data.
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
    setList(
      json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
    setFilterRes(
      json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
  };

  const filterHandler = () => {
    const filterCard = list.filter((card) => +card.info.avgRating >= 4);
    // console.log("After click");
    setFilterRes(filterCard);
  };
  console.log(list);

  const changeHandler = (event) => {
    setSearchText(event.target.value);
  };

  const searchHandler = () => {
    console.log(searchText);
    const filteredRestaurant = list.filter((res) => {
      // We can also search for cuisines
      // console.log(res?.info?.name);
      // return res?.info?.name === searchText;
      return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilterRes(filteredRestaurant);
    setSearchText("");
  };
  if (!list) {
    // Here we can display shimmer UI to the user for better UX.
    return <Shimmer />;
  }

  return (
    <div className={style["main-container"]}>
      <div className={style["search-container"]}>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={changeHandler}
        />
        <button onClick={searchHandler}>Search Food</button>
        <button onClick={filterHandler}>Filter Top Rated Food</button>
      </div>
      <Card cardData={filterRes} />
    </div>
  );
};

export default MainContaier;
