import React, { useEffect, useState } from "react";
import "./App.css";
import Deck from "./components/Deck";
import Card from "./components/Card";
import CardsData from "./CardsData";

function App() {
  const [data, setData] = useState(CardsData);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    shuffleData();
  }, []);

  function shuffleData() {
    const shuffledData = [...data];
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    setData(shuffledData);
  }

  function handleCardClick(card) {
    if (cards.some((c) => c.id === card.id)) {
      return;
    }
    if (cards.length > 2) {
      return;
    }

    const newCards = [...cards, card];

    setCards(newCards);
  }

  function newStart() {
    const resetData = [];
    setCards(resetData);
    shuffleData();
  }

  return (
    <div>
      <Deck handleCardClick={handleCardClick} data={data} />
      <Card cards={cards} />
      <button onClick={newStart}>
        {cards.length === 0 ? "Click To Start" : "New Reading"}
      </button>
    </div>
  );
}

export default App;
