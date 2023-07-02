import React, { Component } from 'react'

export class AdvantageCard extends Component {
  render() {
    const {img, h3, p} = this.props
    return (
      <div className='advantage_card'>
        <div className="img">
            <img src={img} className='card_img' alt="" />
            <img className='arrow' src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/decor.png" alt="" />
        </div>
        <div className="text">
            <h3>{h3}</h3>
            <p>{p}</p>
        </div>
      </div>
    )
  }
}

export default AdvantageCard
