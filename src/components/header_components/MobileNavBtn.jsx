import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeStateValue } from '../../redux/MainReducer'

export class MobileNavBtn extends Component {
  handleClick(){
    this.props.dispatch(changeStateValue({
      name: 'mobOverlayVisible',
      value: true
    }))    
  }
  render() {
    const {mobOverlayVisible} = this.props
    return (
      <button className='bars' onClick={this.handleClick.bind(this)}>
        <span></span>
        <span style={{width : mobOverlayVisible ? '24px' : '16px'}}></span>
        <span style={{width : mobOverlayVisible ? '24px' : '12px'}}></span>
        {/* <FontAwesomeIcon icon={faBarsStaggered} /> */}
      </button>
    )
  }
}
const mapStateToProps = (state) => ({
  mobOverlayVisible : state.Data.mobOverlayVisible
})
export default connect(mapStateToProps)(MobileNavBtn)
