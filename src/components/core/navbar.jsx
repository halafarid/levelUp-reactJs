import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Badge from "react-bootstrap/Badge";
const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="nav fixed-top navbar navbar-expand-lg  py-3 border-bottom">
        <div className="container navContainer">
          <div className="logo"></div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link text-uppercase font-weight-bold text-white"
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link text-uppercase font-weight-bold text-white"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/myProfile"
                  className="nav-link text-uppercase font-weight-bold text-white"
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  // to="/follows"
                  to="/login"
                  className="nav-link text-uppercase font-weight-bold text-white"
                >
                  Following
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="btn btn-warning my-2 my-sm-0" type="submit">Search</button> */}
            </form>
            <div>
              <Badge className="badge" pill variant="danger">
                0
              </Badge>{" "}
              <FiShoppingCart className="shopping"></FiShoppingCart>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
