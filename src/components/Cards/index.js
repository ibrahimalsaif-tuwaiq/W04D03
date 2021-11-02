import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { cities } from "../../data";
import Options from "../Options";
import "./style.css";

const Cards = () => {
  const history = useHistory();
  const [cards, setCards] = useState(cities);

  const cardRoute = (id) => {
    history.push(`/card/${id}`);
  };

  const searchCards = (e) => {
    const value = e.target.value.toLowerCase();
    if (value !== "") {
      setCards(
        cards.filter((city) => {
          const cityName = city.name.toLowerCase();
          if (cityName.includes(value)) return city;
          else return null;
        })
      );
    } else {
      setCards(cities);
    }
  };

  return (
    <>
      <Options searchCards={searchCards} />
      <div className="cardsWrapper">
        <div className="cards">
          {cards.map((city) => {
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

export default Cards;
