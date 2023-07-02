import React, { useState } from "react";
import "./App.css";
import Deck from "./components/Deck";
import Card from "./components/Card";
import CardsData from "./CardsData";
function App() {
  const [data, setData] = useState(CardsData);
  const [cards, setCards] = useState([]);

  function handleCardClick(card) {
    if (cards.some((c) => c.id === card.id)) {
      return;
    }

    const newCards = [...cards, card];

    if (newCards.length > 3) {
      setCards([]);
      setData(data);
    } else {
      setCards(newCards);
    }
  }

  function newStart() {
    const resetData = [];
    setCards(resetData);
    const shuffledData = [...data];
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
      setData(shuffledData);
    }
  }
  return (
    <div>
      <Deck handleCardClick={handleCardClick} data={data} />
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
                    <div>{card.animalName}</div>
                    <div>{card.description}</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        ))}
        <button onClick={newStart}>
          {cards.length == 0 ? "Pic 3 Cards Above" : "New Reading"}
        </button>
      </div>
    </div>
  );
}

export default App;
