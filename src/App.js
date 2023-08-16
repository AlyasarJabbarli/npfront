import React, { Component } from 'react'
import Header from './components/header_components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/footer_components/Footer'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/shop/:id' element={<ProductDetail/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App
