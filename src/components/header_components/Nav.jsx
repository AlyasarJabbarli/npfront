import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="navList d-flex">
          <li>
            <NavLink to={"/"}>home</NavLink>
          </li>
          <li>
            <NavLink to={"/shop"}>shop</NavLink>
          </li>
          <li className="mobile_visible_nav">
            <NavLink to={"/login"}>login</NavLink>
          </li>
          <li className="mobile_visible_nav">
            <NavLink to={"/wishlist"}>wishlist</NavLink>
          </li>
          <li className="mobile_visible_nav">
            <NavLink to={"/basket"}>shopping cart</NavLink>
          </li>
          <li>
            <NavLink to={""}>Printly Sollutions</NavLink>
          </li>
          <li>
            <NavLink to={""}>blog</NavLink>
          </li>
          <li>
            <NavLink to={""}>pages</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>contact us</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
