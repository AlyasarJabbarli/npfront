import React, { Component } from 'react'

export class GetInTouchCard extends Component {
  render() {
    const{img, title, p1,p2,p3} = this.props
    return (
      <div className='getInTouch_card'>
        <div className="img">
            <img src={img} alt="" />
        </div>
        <div className="text">
            <h3>{title}</h3>
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
        </div>
      </div>
    )
  }
}

export default GetInTouchCard
