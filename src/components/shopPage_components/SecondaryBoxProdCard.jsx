import React, { Component } from 'react'

export class SecondaryBoxProdCard extends Component {
  render() {
    const {title, img, price} = this.props
    return (
      <div className='secondaryBoxProdCard d-flex'>
        <div className="left">
            <img src={img} alt="" />
        </div>
        <div className="right d-flex">
            <h4>{title}</h4>
            <p>{price}</p>
        </div>
      </div>
    )
  }
}

export default SecondaryBoxProdCard
