import { createRoot } from "react-dom/client";

import { useEffect, useState, useRef } from "react";

import fetchRandom from "./utils/Apis/ImageApi";

import "./App.css";

const App = () => {
  const [imagesData, setImagesData] = useState([]);

  const loadedImages = useRef(0);
  const totalImages = useRef(0);

  useEffect(() => {
    setImageData(5);
  }, []);

  window.addEventListener("scroll", (e) => {
    let windowsY = window.scrollY;
    let innerHeight = window.innerHeight;
    let bodyHeight = document.body.offsetHeight;
    let fetchPoint = 1000;

    if (
      windowsY + innerHeight >= bodyHeight - fetchPoint && (loadedImages.current === totalImages.current)
    ) {
      loadedImages.current = 0;
      setImageData()
    }
  });

  async function setImageData(set = 5) {
    const newImageData = await fetchRandom(set);
    totalImages.current = newImageData.length;
    setImagesData((prevImageData) => [...prevImageData, ...newImageData]);
  }

  function imageLoader() {
    loadedImages.current += 1;
  }

  return (
    <>
      <div className="container flex center column">
        <h1>Infinity scroll</h1>

        <div className="image-wrapper">
          {imagesData.map((image,i) => (
            <div key={i} className="image">
              <a href={image.links.html} target="_blank">
                <img
                  onLoad={imageLoader}
                  src={image.urls.regular}
                  alt={image.alt_description}
                  title={image.alt_description}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
