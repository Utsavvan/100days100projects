import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

import { setLogin } from "../../utils/ReduxStore/LoginSlice";
import { useDispatch } from "react-redux";

const formSchema = yup.object().shape({
  userMail: yup.string().email().required(),
  userPassword: yup.string().password().required(),
});

const Header = () => {
  const userLoggedIn = useSelector((store) => store.Login.userLoggedIn);

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const formData = {
    userMail: mail,
    userPassword: password,
  };

  async function handleSubmit() {
    try {
      const valid = await formSchema.validate(formData);
      // data-bs-dismiss="modal"
      const myModal = document.getElementsByClassName("modal")[0];
      console.log(myModal);

      const bsModal = bootstrap.Modal.getInstance(myModal);
      bsModal.hide();

      console.log(valid);
    } catch (error) {
      const errorMessage = error.message;
      errorAlert.innerHTML = `<div class="alert alert-danger" role="alert">${errorMessage}</div>`;
    }

    localStorage.setItem("userinfo", JSON.stringify(formData));

    if (localStorage.userinfo) {
      dispatch(setLogin(true));
    }
  }

  function handleLogout() {
    localStorage.removeItem("userinfo");
    setMail("");
    setPassword("");
    errorAlert.innerHTML = "";
    dispatch(setLogin(false));
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/recently-added">
                Recently Added
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/top-rated">
                Top Rated
              </NavLink>
            </li>

            {userLoggedIn ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Login
              </button>
            )}

            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Login
                    </h1>
                    <p id="errorAlert"></p>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          value={mail}
                          onChange={(e) => setMail(e.target.value)}
                        />
                        <div id="emailHelp" className="form-text">
                          We'll never share your email with anyone else.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </form>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={() => handleSubmit()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
