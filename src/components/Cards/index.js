import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const Cards = () => {
  const history = useHistory();
  const cities = [
    {
      id: 1,
      name: "New York",
      img: "https://i.insider.com/5d0150e06fc9200b5a05f042?width=1000&format=jpeg&auto=webp",
    },
    {
      id: 2,
      name: "Tokyo",
      img: "https://lp-cms-production.imgix.net/2021-02/Tokyo%20Main.jpg",
    },
    {
      id: 3,
      name: "Riyadh",
      img: "https://cdn.britannica.com/79/96379-050-FDCFF8D3/landmark-tower-Markaz-al-Mamlakah-Saudi-Arabia-Riyadh.jpg",
    },
  ];

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
