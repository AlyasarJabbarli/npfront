import React, { Component } from "react";

export class ProductDetail extends Component {
  state = {
    photos: [
      "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_4-150x150.jpg",
      "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_7_1-150x150.jpg",
      "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_5-150x150.jpg",
      "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_4-150x150.jpg",
      "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_7-150x150.jpg",
      "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_7-150x150.jpg",
      "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_8-150x150.jpg",

    ],
    selectedPhotoIndex: 0,
    
  };
  handleTab(i) {
    this.setState({ selectedPhotoIndex: i });
  }
  render() {
    const { photos, selectedPhotoIndex } = this.state;
    return (
      <main>
        <section id="heading">
          
        </section>
        <section id="productDetail">
          <div className="container">
            <div className="productDetail_all d-flex">
              <div className="left d-flex">
                <div className="photos">
                  {photos.map((photo, index) => (
                    <div
                      className="photo_div"
                      onClick={() => this.handleTab(index)}
                      style={{
                        opacity: selectedPhotoIndex === index ? 1 : 0.6,
                      }}
                    >
                      <img src={photo} alt="" key={index} />
                    </div>
                  ))}

              
                </div>
                <div className="main_photo">
                  <img src={photos[selectedPhotoIndex].replace(/-\d+x\d+/, '')} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default ProductDetail;
