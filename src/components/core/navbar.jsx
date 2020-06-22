import React, { useState} from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import {BsFillHeartFill} from "react-icons/bs";
import Search from '../features/search'
import {LogOut} from '../../services/authService'
import { string } from "joi";


const Navbar = props => {
  const { type } = props;

  const handleSearch=()=>{
    setSearchComp(true)
  }
  const handleClosingSearch=()=>{
    setSearchComp(false)
  }
  const handleChange=({target})=>{
    console.log(target.value)
    setSearchWord(target.value)
  }
 
  const [searchComp,setSearchComp]=useState(false)
  const [searchWord,setSearchWord]=useState("")

  return (
    <React.Fragment>
      {searchComp&&<Search
      onClosingSearch={handleClosingSearch}
      searchWord={searchWord}
      />}
      <nav className="nav fixed-top navbar navbar-expand-lg  py-3 border-bottom">
        <div className="container navContainer">
          <Link to ="/home">
            <div className="logo"></div>
          </Link>
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
                  to="/following"
                  className="nav-link text-uppercase font-weight-bold"
                >
                  Following
                </Link>
              </li>
              <li className="nav-item">
                { type === 'instructor' &&
                  <Link
                    to="/followers"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Followers
                  </Link>
                }
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onFocus={handleSearch}
                onChange={handleChange}
              />
              
            </form>
            <div className="shopping-cart">
              <Link to="/shoppingcart" className="shopping-cart-link">
                <BsFillHeartFill className="wishlist-icon"/>
              </Link>
            </div>
            <Link to="/login" onClick={LogOut} className="logout" >
              <FiLogOut className="logout_icon"/>
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
