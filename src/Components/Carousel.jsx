import { useState } from "react";
import { carouselData } from "../data";

export default function Carousel() {
  const [index, setIndex] = useState(0);

  function handleRightClick() {
    setIndex(index + 1);
  }

  function handleLeftClick() {
    setIndex(index - 1);
  }

  let active = carouselData[index];
  return (
    <section className="carousel">
      <h2>Carousel</h2>
      <div className="carousel-container">
        <button onClick={handleLeftClick}>Left</button>
        <div className="c-left">
          <img src={active.url} alt={active.name} className="carousel-img" />
          <h3>{active.name}</h3>
        </div>
        <button onClick={handleRightClick}>Right</button>
      </div>
    </section>
  );
}
