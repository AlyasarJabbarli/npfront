import React, { Component } from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import MobileHeader from "./MobileHeader";
import MobileNavBtn from "./MobileNavBtn";
import  {NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export class Header extends Component {
  render() {
    return (
      <header className="d-flex align-center">
        <MobileHeader />
        <MobileNavBtn />
        <Nav />
        <Logo />
        <div className="header_left">
          <SearchBox />

          <div className="icons d-flex-center">
            <NavLink to={"login"}>
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink to={"wishlist"}>
              <FontAwesomeIcon icon={faStar} />
            </NavLink>
            <NavLink to={"basket"}>
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
