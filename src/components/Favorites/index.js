import React from "react";
import { useHistory } from "react-router-dom";
import { cities } from "../../data";
import "./style.css";

const Favorites = () => {
  const history = useHistory();

  const cardRoute = (id) => {
    history.push(`/card/${id}`);
  };

  const favCities = cities.filter((city) => {
    return city.fav === true;
  });

  return (
    <div className="cardsWrapper">
      <div className="cards">
        {favCities.map((city) => {
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
  );
};

export default Favorites;
