import React, { useState, useEffect } from "react";

const Card = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const storedIndex = Number(localStorage.getItem("currentCardIndex"));
    if (!isNaN(storedIndex) && storedIndex >= 0 && storedIndex < cards.length) {
      setCurrentCardIndex(storedIndex);
    }
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("currentCardIndex", currentCardIndex.toString());
  }, [currentCardIndex]);

  const handleNextClick = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  return (
    <div>
      <div className="display-container">
        {currentCardIndex < cards.length && (
          <ul>
            <li>
              <div className="card-container">
                <div className="card-label">
                  {currentCardIndex === 0
                    ? "Past"
                    : currentCardIndex === 1
                    ? "Present"
                    : "Future"}
                </div>
                <img
                  src={cards[currentCardIndex].img}
                  alt="card"
                  className="card-img"
                />
                <div className="card-info">
                  <div className="card-details">
                    <div className="animal-name">
                      {cards[currentCardIndex].animalName}
                    </div>
                    <div>{cards[currentCardIndex].description}</div>
                    {currentCardIndex < cards.length - 1 && (
                      <button onClick={handleNextClick}>NEXT</button>
                    )}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
