import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

import "./App.css";

import { RandomUserApi } from "./utils/RandomUser";

const App = () => {
  const [userData, setUseData] = useState([]);

  const [userInfo, setUserInfo] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const data = await RandomUserApi();
    setUseData(data);
    setUserInfo({
        title: `My name is`,
        description: data[0]?.name.first,
      });
    return data;
  }

  async function getRandomUser() {
    const data = await getUserData();
    setUserInfo({
      title: `My name is`,
      description: data[0]?.name.first,
    });
  }

  function handleMouseOver(prop) {
    if (prop === "name") {
      setUserInfo({
        title: `My name is`,
        description: userData[0]?.name.first,
      });
    } else if (prop === "email") {
      setUserInfo({
        title: `My email is`,
        description: userData[0]?.email,
      });
    } else if (prop === "age") {
      setUserInfo({
        title: `My age is`,
        description: userData[0]?.dob?.age,
      });
    } else if (prop === "street") {
      setUserInfo({
        title: `My street is`,
        description: `${userData[0]?.location?.street.number} ${userData[0]?.location?.street.name}`,
      });
    } else if (prop === "phone") {
      setUserInfo({
        title: `My phone is`,
        description: userData[0]?.phone,
      });
    } else if (prop === "password") {
      setUserInfo({
        title: `My password is`,
        description: userData[0]?.login?.password,
      });
    }
  }

  return (
    <>
      <main>
        <div className="main"></div>
        <div className="container">
          <div className="card">
            <span className="card-img container">
              <img src={`${userData[0]?.picture?.large}`} alt="image" />
            </span>
            <span className="info-title container">
              <h3>{userInfo.title}</h3>
            </span>
            <span className="info-description container">
              <p>{userInfo.description}</p>
            </span>
            <div className="info-list container container">
              <ul>
                <li>
                  <button
                    onMouseOver={() => {
                      handleMouseOver("name");
                    }}
                  >
                    Name
                  </button>
                </li>
                <li>
                  <button
                    onMouseOver={() => {
                      handleMouseOver("email");
                    }}
                  >
                    Email
                  </button>
                </li>
                <li>
                  <button
                    onMouseOver={() => {
                      handleMouseOver("age");
                    }}
                  >
                    Age
                  </button>
                </li>
                <li>
                  <button
                    onMouseOver={() => {
                      handleMouseOver("street");
                    }}
                  >
                    Street
                  </button>
                </li>
                <li>
                  <button
                    onMouseOver={() => {
                      handleMouseOver("phone");
                    }}
                  >
                    Phone
                  </button>
                </li>
                <li>
                  <button
                    onMouseOver={() => {
                      handleMouseOver("password");
                    }}
                  >
                    Password
                  </button>
                </li>
              </ul>
            </div>
            <span className="generate-user container">
              <button className="generate-user-btn" onClick={getRandomUser}>
                RANDOM USER
              </button>
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
