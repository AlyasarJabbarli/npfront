import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className='navList d-flex'>
            <li><NavLink to={""}>home</NavLink></li>
            <li><NavLink to={""}>shop</NavLink></li>
            <li><NavLink to={""}>NextPrint</NavLink></li>
            <li><NavLink to={""}>blog</NavLink></li>
            <li><NavLink to={""}>pages</NavLink></li>
            <li><NavLink to={""}>contact us</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
