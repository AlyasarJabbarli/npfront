import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Title extends Component {
  render() {
    const {title} = this.props
    return (
      <section id='titleSection' className='d-flex-center'>
            <h1>{title}</h1>
            <div className="directory">
                <Link to={"/"}>Home Page</Link>
                <span><FontAwesomeIcon icon={faAngleRight}/></span>
                <Link to={"/shop"}>Shop</Link>
            </div>
      </section>
    )
  }
}

export default Title
