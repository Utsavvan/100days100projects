import { createRoot } from "react-dom/client";
import { useState } from "react";

import "./App.css";

import { photosData } from "./utils/config";

const App = () => {
  const imageSizes = [1, 2, 3, 5];

  const [imageSize, setImageSize] = useState(0);

  const [updatedData, setUpdatedData] = useState(photosData);

  function sizeHandler(size) {
    setImageSize(size);
  }

  function newestHandler() {
    const newsortedData = photosData.sort(function (a, b) {
      return new Date(b.published) - new Date(a.published);
    });
    console.log(
      "🚀 ~ file: App.js:23 ~ newsortedData ~ newsortedData:",
      newsortedData
    );
    setUpdatedData([...newsortedData]);
  }

  function oldestHandler() {
    const oldsortedData = photosData.sort(function (a, b) {
      return new Date(a.published) - new Date(b.published);
    });
    setUpdatedData([...oldsortedData]);
  }

  function ascHandler() {
    const ascData = photosData.sort(function (a, b) {
      console.log("🚀 ~ file: App.js:40 ~ ascData ~ a.title:", a.title);
      return a.title.localeCompare(b.title);
    });
    setUpdatedData([...ascData]);
  }

  function descHandler() {
    const descData = photosData.sort(function (a, b) {
      return b.title.localeCompare(a.title);
    });
    setUpdatedData([...descData]);
  }

  return (
    <>
      <div className="container">
        <div className="title flex">
          <h1>PUBLIC FEED </h1>
          <span>from Flickr, Yandex</span>
        </div>
        <div className="filterbuttons">
          <div className="sizer-btns">
            {imageSizes.map((imageSize, i) => (
              <>
                <button onClick={() => sizeHandler(imageSize)}>
                  {imageSize}X
                </button>
              </>
            ))}
          </div>
          <div className="other-btns">
            <button onClick={oldestHandler}>oldest</button>
            <button onClick={newestHandler}>newest</button>
            <button onClick={ascHandler}>title asc</button>
            <button onClick={descHandler}>title desc</button>
          </div>
        </div>
        <div className="images flex wrap">
          {updatedData.map((imageData) => (
            <>
              <div className="image ">
                <img src={imageData.media.m} alt="" />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
