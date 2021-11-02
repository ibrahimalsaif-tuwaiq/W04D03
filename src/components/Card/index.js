import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { cities } from "../../data";
import "./style.css";

const Card = () => {
  const { id } = useParams();

  const myItem = cities.find((city) => {
    return city.id === parseInt(id);
  });

  const [favButton, setFavButton] = useState(myItem.fav);

  const favorites = () => {
    if (myItem.fav === true) {
      myItem.fav = false;
      setFavButton(false);
    } else {
      myItem.fav = true;
      setFavButton(true);
    }
  };

  return (
    <div className="cityWrapper">
      <div className="city">
        <h1>{myItem.name}</h1>
        <img src={myItem.img} alt={`${myItem.name} city`} />
        <button className="addToFav" onClick={favorites}>
          {favButton ? "Remove From Favorites" : "Add To Favorites"}
        </button>
      </div>
    </div>
  );
};

export default Card;
