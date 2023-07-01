import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CategoryCard extends Component {
  render() {
    const { title, img } = this.props;
    return (
      <div className="categoryCard">
        <Link>
          <h3>{title}</h3>
          <div className="img">
            <img src={img} alt="" />
          </div>
        </Link>
      </div>
    );
  }
}

export default CategoryCard;
