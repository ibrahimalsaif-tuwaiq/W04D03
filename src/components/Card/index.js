import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const Card = () => {
  const { id } = useParams();
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

  const myItem = cities.find((city) => {
    return city.id === parseInt(id);
  });

  return (
    <div className="cityWrapper">
      <div className="city">
        <h1>{myItem.name}</h1>
        <img src={myItem.img} alt={`${myItem.name} city`} />
      </div>
    </div>
  );
};

export default Card;
