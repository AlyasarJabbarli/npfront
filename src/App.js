import React, { Component } from 'react'
import Header from './components/header_components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
