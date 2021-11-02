import React from "react";
import { useHistory } from "react-router-dom";
import { cities } from '../../data'
import "./style.css";

const Cards = () => {
  const history = useHistory();

  const cardRoute = (id) => {
    history.push(`/card/${id}`);
  };

  return (
    <div className="cardsWrapper">
      <div className="cards">
        {cities.map((city) => {
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

export default Cards;
