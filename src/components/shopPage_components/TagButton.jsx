import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class TagButton extends Component {
  render() {
    const {tagName} = this.props
    return (
      <div className='tagButton'>
        <Link>{tagName}</Link>
      </div>
    )
  }
}

export default TagButton
