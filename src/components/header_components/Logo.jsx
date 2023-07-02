import React, { Component } from 'react'
import logo from '../../logo.png'
export class Logo extends Component {
  render() {
    return (
      <div className='logo d-flex-center'>
            <img src={logo} alt="" />
      </div>
    )
  }
}

export default Logo
