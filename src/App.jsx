import React, { useState } from "react";
import "./App.css";
import Deck from "./components/Deck";
import Card from "./components/Card";
import CardsData from "./CardsData";

const App = () => {
  const [data, setData] = useState(CardsData);
  const [cards, setCards] = useState([]);

  const shuffleData = (data) => {
    const shuffledData = [...data];
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    return shuffledData;
  };

  const handleCardClick = (card) => {
    if (cards.some((c) => c.id === card.id) || cards.length > 2) {
      return;
    }

    const newCards = [...cards, card];
    setCards(newCards);
  };

  const newStart = () => {
    setCards([]);
    setData(shuffleData(data));
  };

  const shuffledData = shuffleData(data);

  return (
    <div>
      <Deck handleCardClick={handleCardClick} data={shuffledData} />
      <Card cards={cards} />
      <button onClick={newStart}>
        {cards.length === 0 ? "Click To Start" : "New Reading"}
      </button>
    </div>
  );
};

export default App;
