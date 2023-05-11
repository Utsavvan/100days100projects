import { NavLink } from "react-router-dom";

import { useContext } from "react";
import AppContext from "../../utils/Context/AppContext";


const NavBar = () => {
  const { cartItems } = useContext(AppContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Shopper
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink noLinkStyle className="nav-link " aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link " aria-current="page" to="/cart">
              Cart - {cartItems.length} Items
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
