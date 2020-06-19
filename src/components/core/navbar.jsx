import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Badge from "react-bootstrap/Badge";
import { FiLogOut } from "react-icons/fi";
import Search from '../features/search'
const Navbar = () => {

  const handleSearch=()=>{
    setSearchComp(true)
  }
  const handleClosingSearch=()=>{
    setSearchComp(false)
  }
  const [searchComp,setSearchComp]=useState(false)
  return (
    <React.Fragment>
      {searchComp&&<Search
      onClosingSearch={handleClosingSearch}
      />}
      <nav className="nav fixed-top navbar navbar-expand-lg  py-3 border-bottom">
        <div className="container navContainer">
          <div className="logo"></div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link
                  to="/home"
                  className="nav-link text-uppercase font-weight-bold "
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link text-uppercase font-weight-bold "
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={`/profile`}
                  className="nav-link text-uppercase font-weight-bold"
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/follows"
                  className="nav-link text-uppercase font-weight-bold"
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
                onFocus={handleSearch}
              />
              
              {/* <button className="btn btn-warning my-2 my-sm-0" type="submit">Search</button> */}
            </form>
            <div className="shopping-cart">
              <FiShoppingCart className="shopping-cart-icon"/>
              <Badge className="shopping-cart-badge" pill variant="danger">
                0
              </Badge>
            </div>
            <div className="logout" >
            <FiLogOut className="logout_icon"/>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
