import { useState } from "react";
import "../App.css";

const Deck = ({ handleCardClick, data }) => {
  const url =
    "https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_1280.jpg";

  return (
    <div>
      <h1 className="title-Parot">Parot Cards</h1>
      <div className="container">
        {data.map((card) => (
          <div key={card.id}>
            <img
              src={url}
              alt="card"
              className="card"
              onClick={() => handleCardClick(card)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deck;
