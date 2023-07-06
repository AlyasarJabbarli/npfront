import { faEye, faStar } from '@fortawesome/free-regular-svg-icons'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

export class TopSellingCard extends Component {
  render() {
    const {img, title, discountPrice, price} = this.props
    return (
      <div className='topSellingCard'>
        <div className="img">
            <img src={img} alt="" />
            <div className="buttons">
                <button><FontAwesomeIcon icon={faStar}/></button>
                <button><FontAwesomeIcon icon={faEye}/></button>
                <button><FontAwesomeIcon icon={faRepeat}/></button>
            </div>
        </div>
        <div className="text">
            <h3>{title}</h3>
            {
                discountPrice?   
                <div className="prices_div">
                    <p>${price}</p> 
                    <p>${discountPrice}</p>
                </div> : <p>${price}</p>
            }
            <button>Personalize</button>
        </div>
      </div>
    )
  }
}

export default TopSellingCard
