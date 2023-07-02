import React, { Component } from 'react'

export class SubTitle extends Component {
  render() {
    const {subTitle} = this.props
    return (
      <h4 className='subtitle'>
          {subTitle}  
      </h4>
    )
  }
}

export default SubTitle
