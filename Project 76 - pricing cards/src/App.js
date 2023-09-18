import { createRoot } from "react-dom/client";

import { useState } from "react";

import "./App.css";

import pricingData from "./utils/config";

const App = () => {
  const [checked, setChecked] = useState(true);

  function handleSwitch() {
    setChecked((checked) => {
      return !checked;
    });
  }

  return (
    <>
      <div className="container flex center column">
        <div className="heading">
          <h1>Start today. Boost up your services!</h1>
          <p>
            Join 6,000+ developers & designers using Devias to power modern web
            projects.
          </p>
        </div>
        <div className="pricingcheck flex">
          <div
            class={`switch flex ${checked ? "checked" : ""}`}
            onClick={handleSwitch}
          >
            <div className="dot flex " />
          </div>
          <p>Yearly Payment</p>
          <div className="discount-tag flex center">25% OFF</div>
        </div>
        <div className="pricing-cards flex">
          {pricingData.map((pricingData) => {
            return (
              <>
                <div className="pricing-card">
                  <div className="logo">
                    <svg
                      fill="none"
                      height="33"
                      viewBox="0 0 24 33"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7898 0.492981L23.0191 5.55771C23.2324 5.67468 23.4097 5.84498 23.5332 6.05102C23.6567 6.25713 23.7218 6.49154 23.7218 6.73031C23.7218 6.96907 23.6567 7.20348 23.5332 7.4096C23.4097 7.61564 23.2324 7.78594 23.0191 7.9029L13.7899 12.9679C13.2008 13.2911 12.5366 13.4609 11.861 13.4609C11.1852 13.4609 10.521 13.2911 9.93202 12.9679L0.702682 7.9029C0.489532 7.78594 0.312084 7.61564 0.188587 7.4096C0.0650921 7.20348 -9.53674e-06 6.96907 -9.53674e-06 6.73031C-9.53674e-06 6.49154 0.0650921 6.25713 0.188587 6.05102C0.312084 5.84498 0.489532 5.67468 0.702682 5.55771L9.93202 0.492981C10.521 0.169739 11.1852 -5.72205e-06 11.861 -5.72205e-06C12.5366 -5.72205e-06 13.2008 0.169739 13.7898 0.492981Z"
                        fill="#6366F1"
                      ></path>
                    </svg>

                    <div className="pricing-info">
                      <p>
                        {pricingData.currency}
                        {pricingData.price}
                        <span>/mo</span>
                      </p>
                    </div>

                    <div className="pricing-name">
                      <b>{pricingData.name}</b>
                      <p>{pricingData.description}</p>
                    </div>

                    <div className="pricing-list">
                      <ul>
                        {pricingData.features.map((feature) => {
                          return (
                            <>
                              <li>{feature}</li>
                            </>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="button">
                      <button>{pricingData.cta}</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
