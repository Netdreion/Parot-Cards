import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <header>Parrot Cards</header>
      <h1>free Tarot Reading</h1>
      <h3>The most fun reading you will ever get</h3>
      <p>
        Welcome to Parrot Tarot Cards, the best place to get a free Tarot
        reading!
      </p>
      <button onClick={() => navigate("RenderPage")}>Start</button>
    </div>
  );
};

export default WelcomePage;
