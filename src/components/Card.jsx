import { useState } from "react";

const Card = ({ cards }) => {
  return (
    <div>
      <div className="display-container">
        {cards.map((card, index) => (
          <ul key={index}>
            <li>
              <div className="card-container">
                <div className="card-label">
                  {index === 0 ? "Past" : index === 1 ? "Present" : "Future"}
                </div>
                <img src={card.img} alt="card" className="card-img" />
                <div className="card-info">
                  <div className="card-details">
                    <div className="animal-name">{card.animalName}</div>
                    <div>{card.description}</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Card;
