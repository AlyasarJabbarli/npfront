import React, { Component } from 'react'
import Nav from './Nav'
import Logo from './Logo'
import SearchBox from './SearchBox'
import MobileHeader from './MobileHeader'
import MobileNavBtn from './MobileNavBtn'

export class Header extends Component {
  render() {
    return (
      <header className='d-flex align-center'>
        <MobileHeader/>
        <MobileNavBtn/>
        <Nav/>
        <Logo/>
        <SearchBox/>
      </header>
    )
  }
}

export default  Header
