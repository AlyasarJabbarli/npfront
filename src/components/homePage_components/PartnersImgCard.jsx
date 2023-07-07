import React, { Component } from "react";

export class PartnersImgCard extends Component {
  render() {
    const { img } = this.props;
    return (
      <div className="partnersImgCard">
        <div className="img_div">
          <img src={img} alt="" />
        </div>
        <div className="img_div">
          <img src={img} alt="" />
        </div>
      </div>
    );
  }
}

export default PartnersImgCard;
