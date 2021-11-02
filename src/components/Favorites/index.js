import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { cities } from "../../data";
import Options from "../Options";
import "./style.css";

const Favorites = () => {
  const history = useHistory();

  const cardRoute = (id) => {
    history.push(`/card/${id}`);
  };

  const favCities = cities.filter((city) => {
    return city.fav === true;
  });

  const [favCards, setFavCards] = useState(favCities);

  const searchCards = (e) => {
    const value = e.target.value.toLowerCase();
    if (value !== "") {
      setFavCards(
        favCards.filter((city) => {
          const cityName = city.name.toLowerCase();
          if (cityName.includes(value)) return city;
          else return null;
        })
      );
    } else {
      setFavCards(favCities);
    }
  };

  return (
    <>
      <Options searchCards={searchCards} />
      <div className="cardsWrapper">
        <div className="cards">
          {favCards.map((city) => {
            return (
              <div
                className="card"
                onClick={() => cardRoute(city.id)}
                key={city.id}
              >
                <h2>{city.name}</h2>
                <img src={city.img} alt={`${city.name} city`} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Favorites;
