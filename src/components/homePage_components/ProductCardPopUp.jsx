import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

export class ProductCardPopUp extends Component {
  state = {
    count: 1,
  };

  handleQuantityBtnClick(type, e) {
    if (type === "inc") {
      this.setState({ count: this.state.count + 1 });
    } else if (type === "dec") {
      this.setState({ count: this.state.count - 1 });
    }
  }
  render() {
    const { count } = this.state;
    const {
      img,
      title,
      price,
      description,
      color,
      size,
      quantity,
      finish,
      sku,
      category,
      tags,
      discountPrice,
    } = this.props;
    return (
      <div className="productCardPopUp d-flex">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="right">
          <div className="productCardPopUp_title">
            <h3>{title}</h3>
          </div>
          {discountPrice != null ? (
            <div className="price">
              <p className="discountPrice">{discountPrice}</p>
              <p className="oldPrice"><s>{price}</s></p>
            </div>
          ) : (
            <div className="price">
              <p>{price}</p>
            </div>
          )}

          <div className="description">
            <p>{description}</p>
          </div>
          <div className="options">
            {color != null ? (
              <div className="product_option">
                <h4>Product Color : </h4>
                <select name="" id="">
                  <option value="">Choose an option</option>
                </select>
              </div>
            ) : null}
            {size != null ? (
              <div className="product_option">
                <h4>Size : </h4>
                <select name="" id="">
                  <option value="">Choose an option</option>
                </select>
              </div>
            ) : null}
            {quantity != null ? (
              <div className="product_option">
                <h4>Quantity : </h4>
                <select name="" id="">
                  <option value="">Choose an option</option>
                </select>
              </div>
            ) : null}
            {finish != null ? (
              <div className="product_option">
                <h4>Finish : </h4>
                <select name="" id="">
                  <option value="">Choose an option</option>
                </select>
              </div>
            ) : null}
            <div className="product_option d-flex">
              <h4>Delivery term :</h4>
              <div className="select">
                <select name="" id="">
                  <option value="">Choose an option</option>
                </select>
              </div>
            </div>
          </div>
          <div className="price2">
            <p></p>
          </div>
          <div className="buttons">
            <div className="top_buttons d-flex">
              <div className="quantity d-flex">
                <button
                  className="d-flex-center"
                  onClick={
                    count <= 1
                      ? null
                      : this.handleQuantityBtnClick.bind(this, "dec")
                  }
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  className="d-flex-center"
                  onClick={this.handleQuantityBtnClick.bind(this, "inc")}
                >
                  +
                </button>
              </div>
              <div className="addToCartBtn">
                <button>Add to cart</button>
              </div>
            </div>

            <div className="sub_buttons">
              <button>
                <FontAwesomeIcon icon={faStar} /> Add To Wishlist
              </button>
              <button>
                <FontAwesomeIcon icon={faPaintBrush} /> Personalize
              </button>
            </div>
          </div>
          <div className="properties">
            <ul>
              <li>
                <span>SKU: {sku}</span>
              </li>
              <li>
                <span>Category: {category}</span>
              </li>
              <li>
                <span>Tags: {tags}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCardPopUp;
