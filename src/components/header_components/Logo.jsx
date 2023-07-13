import React, { Component } from 'react'
import logo from '../../logo.png'
import {NavLink } from 'react-router-dom'
export class Logo extends Component {
  render() {
    return (
      <div className='logo d-flex-center'>
        <NavLink to={'/'}>
          <img src={logo} alt="" />
        </NavLink>
      </div>
    )
  }
}

export default Logo
