import React, { Component } from 'react'
import Header from './components/header_components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/footer_components/Footer'
import Shop from './pages/Shop'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App
