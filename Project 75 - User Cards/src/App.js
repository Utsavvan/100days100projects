import { createRoot } from "react-dom/client";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="container flex center">
        <div className="user-cards flex center wrap">
          {Array(6)
            .fill(0)
            .map(() => (
              <div className="user-card">
                <div className="box-image">
                  <img
                    src="https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_1.jpg"
                    alt=""
                  />
                </div>
                <div className="user-details flex center column">
                  <div className="user-creds flex center column">
                    <div className="user-image ">
                      <img
                        src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="position flex center column">
                      <b className="emp emp-name">Jayvion Simon</b>
                      <p className="emp emp-designation">HR Manager</p>
                    </div>
                    <div className="social-handles flex center">
                      <i className="fa-brands fa-facebook"></i>
                      <i className="fa-brands fa-instagram"></i>
                      <i className="fa-brands fa-linkedin-in"></i>
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                  </div>
                  <div className="user-followings flex center">
                    <div className="followers flex center column">
                      <b className="title">Followers</b>
                      <b className="counter">9.91k</b>
                    </div>

                    <div className="followers flex center column">
                      <b className="title">Followers</b>
                      <b className="counter">9.91k</b>
                    </div>

                    <div className="followers flex center column">
                      <b className="title">Followers</b>
                      <b className="counter">9.91k</b>
                    </div>
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
