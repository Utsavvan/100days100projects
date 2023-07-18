import { createRoot } from "react-dom/client";
import { useState } from "react";

import "./App.css";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

const App = () => {
  const [imageIndex, setImageIndex] = useState(0);

  function onLeftClick() {
    setImageIndex((prev) => (prev <= 0 ? 0 : prev - 1));
  }

  function onRightClick() {
    setImageIndex((prev) =>
      prev >= images.length - 1 ? images.length - 1 : prev + 1
    );
  }

  return (
    <>
      <div className="container flex center">
        <div className="carousel flex">
          <span className="arrow left flex">
            <i
              className="fa-regular fa-solid fa-less-than"
              onClick={onLeftClick}
            ></i>
          </span>
          <div className="images-wrapper">
            <img className="carousel-image" src={images[imageIndex]} alt="" />
          </div>
          <span className="arrow rigth flex">
            <i
              className="fa-regular fa-solid fa-greater-than"
              onClick={onRightClick}
            ></i>
          </span>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
