import React, { Component } from "react";
import { connect } from "react-redux";
import { changeStateValue } from "../../redux/MainReducer";
import Nav from "./Nav";
import SearchBox from "./SearchBox";

export class MobileHeader extends Component {
  handleClick() {
    this.props.dispatch(
      changeStateValue({
        name: "mobOverlayVisible",
        value: false,
      })
    );
  }
  render() {
    const { mobOverlayVisible } = this.props;
    return (
      <div
        className="overlay_all"
        style={{ width: mobOverlayVisible ? "100%" : "0" }}
      >
        <div
          className="overlay_nav"
          style={{ width: mobOverlayVisible ? "330px" : "0" }}
        >
          <div className="title d-flex-center">
            <h3>Main Menu</h3>

            <div className="icons d-flex-center">
              
            </div>
            <button id="btn" onClick={this.handleClick.bind(this)}>
              X
            </button>
          </div>
          <div className="mobileHeaderNav">
            <Nav />
            <SearchBox />
          </div>
        </div>
        <div
          className="overlay"
          onClick={this.handleClick.bind(this)}
          style={{ display: mobOverlayVisible ? "block" : "none" }}
        ></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  mobOverlayVisible: state.Data.mobOverlayVisible,
});
export default connect(mapStateToProps)(MobileHeader);
