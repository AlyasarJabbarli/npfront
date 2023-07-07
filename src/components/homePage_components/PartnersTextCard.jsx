import React, { Component } from 'react'

export class PartnersTextCard extends Component {
  render() {
    const {text} = this.props
    return (
      <div className='partnersTextCard'>
        <p>{text}</p>
      </div>
    )
  }
}

export default PartnersTextCard
