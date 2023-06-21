import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

import { fetchToursData } from "./utils/Apis/ToursApi";
import "./App.css";

const App = () => {
  const [tourData, setTourData] = useState([]);

  const [readMore, setReadmore] = useState([]);

  useEffect(() => {
    getToursData();
  }, []);

  async function getToursData() {
    const data = await fetchToursData();
    setTourData(data);
  }

  function readeMoreHandler(id) {
    setReadmore((prevValues) => [...prevValues, id]);
  }

  function readLessHandler(id) {
    // debugger;
    setReadmore((prevValue) => {
      prevValue.splice(readMore.indexOf(id), 1);
      return [...prevValue];
    });
  }

  function deleteItemHandler(id) {
    setTourData((preValues) => {
      preValues.splice(
        tourData.findIndex((i) => i.id === id),
        1
      );
      return [...preValues];
    });
  }

  return (
    <>
      <div className="container">
        <div className="title flex center">
          <h1>Our Tours</h1>
          <div className="underline"></div>
        </div>
        <div className="cards flex wrap">
          {tourData.map((data) => (
            <div className="card" key={data.id}>
              <div className="image-wappper">
                <div className="tour-price">${data.price}</div>
                <img className="tour-image" src={data.image} alt="image" />
              </div>
              <div className="tour-details">
                <div className="tour-name flex center">{data.name}</div>
                <div className="tour-details">
                  {readMore.includes(data.id) ? (
                    <>
                      <p>
                        {data.info}
                        <button
                          className="read-button"
                          onClick={() => {
                            readLessHandler(data.id);
                          }}
                        >
                          Read Less
                        </button>
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        {data.info.slice(0, 200)}...
                        <button
                          className="read-button"
                          onClick={() => {
                            readeMoreHandler(data.id);
                          }}
                        >
                          Read more
                        </button>
                      </p>
                    </>
                  )}
                </div>
                <div className="button">
                  <button
                    className="del-btn"
                    onClick={() => {
                      deleteItemHandler(data.id);
                    }}
                  >
                    Not intrested
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
