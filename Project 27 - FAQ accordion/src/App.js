import { createRoot } from "react-dom/client";
import { useState } from "react";
import { questions } from "./utils/config";

import "./App.css";

const Accordion = ({ question, visibleAccordion, setVisibleAccordion }) => (
  <div className="card">
    <div className="question">
      <b>{question.title}</b>
      <button
      className='icons'
        onClick={() => {
          if (visibleAccordion === question.id) {
            setVisibleAccordion(0);
          } else {
            setVisibleAccordion(question.id);
          }
        }}
      >
        {visibleAccordion === question.id ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}
      </button>
    </div>
    {visibleAccordion === question.id && (
      <div className="info">
        <p>{question.info}</p>
      </div>
    )}
  </div>
);

const App = () => {
  const [visibleAccordion, setVisibleAccordion] = useState(1);

  return (
    <>
      <div className="container">
        <h1 className="flex center">Project 27: FAQ/Accordion</h1>
        <div className="accordion">
          <div className="accordion-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div>
            {
              <div className="accordion-cards">
                {questions.map((question) => (
                  <Accordion
                    question={question}
                    visibleAccordion={visibleAccordion}
                    setVisibleAccordion={setVisibleAccordion}
                  />
                ))}
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
