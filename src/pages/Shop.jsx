import React, { Component } from "react";
import Title from "../components/Title";
import SearchBox from "../components/header_components/SearchBox";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import SecondaryBoxProdCard from "../components/shopPage_components/SecondaryBoxProdCard";
import TagButton from "../components/shopPage_components/TagButton";
import TopSellingCard from "../components/homePage_components/TopSellingCard";
export class Shop extends Component {
  state = {
    priceRange: [0, 100],
  };

  handlePriceChange = (value) => {
    this.setState({ priceRange: value }); // Update the price range state
  };
  render() {
    const { priceRange } = this.state;
    return (
      <main>
        <section>
          <Title title={"shop"} />
          <section id="content">
            <div className="container">
              <div className="content_all d-flex">
                <div className="secondary">
                  <div className="secondary_box">
                    <h3>Search</h3>
                    <SearchBox />
                  </div>
                  <div className="secondary_box">
                    <h3>Product categories</h3>
                    <ul className="categories">
                      <li>
                        <Link>Brochures & Catalogues</Link>
                      </li>
                      <li>
                        <Link>Business Cards</Link>
                      </li>
                      <li>
                        <Link>Calendars</Link>
                      </li>
                      <li>
                        <Link>Design Online</Link>
                      </li>
                      <li>
                        <Link>Flyers</Link>
                      </li>
                      <li>
                        <Link>Flyers</Link>
                      </li>
                      <li>
                        <Link>Greeting Cards</Link>
                      </li>
                      <li>
                        <Link>Letterheads</Link>
                      </li>
                      <li>
                        <Link>Notepads</Link>
                      </li>
                      <li>
                        <Link>Packaging</Link>
                      </li>
                      <li>
                        <Link>Placemats</Link>
                      </li>
                      <li>
                        <Link>Postcards</Link>
                      </li>
                      <li>
                        <Link>Posters & Ad Posters</Link>
                      </li>
                      <li>
                        <Link>Presentation Folders</Link>
                      </li>
                      <li>
                        <Link>Roller Banners</Link>
                      </li>
                      <li>
                        <Link>Stickers</Link>
                      </li>
                      <li>
                        <Link>Uncategorized</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="secondary_box">
                    <h3>Filter by price</h3>
                    <Slider
                      range
                      min={0}
                      max={100}
                      value={priceRange}
                      onChange={this.handlePriceChange}
                    />
                    <div className="bottom">
                      <div className="price_range">
                        Price Range: ${priceRange[0]} - ${priceRange[1]}
                      </div>
                      <button>Filter</button>
                    </div>
                  </div>
                  <div className="secondary_box">
                    <h3>Products</h3>
                    <div className="products d-flex">
                      <SecondaryBoxProdCard
                        price={"$19.95 – $24.95"}
                        title={"Phone case"}
                        img={
                          "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/phone-case.png"
                        }
                      />
                      <SecondaryBoxProdCard
                        price={"$19.95 – $24.95"}
                        title={"Phone case"}
                        img={
                          "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/phone-case.png"
                        }
                      />
                      <SecondaryBoxProdCard
                        price={"$19.95 – $24.95"}
                        title={"Phone case"}
                        img={
                          "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/phone-case.png"
                        }
                      />
                    </div>
                  </div>
                  <div className="secondary_box">
                    <h3>Filter by Color</h3>
                    <ul className="colors">
                      <li>
                        <Link></Link>
                      </li>
                      <li>
                        <Link></Link>
                      </li>
                      <li>
                        <Link></Link>
                      </li>
                      <li>
                        <Link></Link>
                      </li>
                      <li>
                        <Link></Link>
                      </li>
                      <li>
                        <Link></Link>
                      </li>
                    </ul>
                  </div>
                  <div className="secondary_box">
                    <h3>Product tags</h3>
                    <div className="tags">
                      <TagButton tagName={"Badge"} />
                      <TagButton tagName={"Banner"} />
                      <TagButton tagName={"Business Card"} />
                      <TagButton tagName={"Calendar"} />
                      <TagButton tagName={"Cap"} />
                      <TagButton tagName={"Cup"} />
                      <TagButton tagName={"Design"} />
                      <TagButton tagName={"Online"} />
                      <TagButton tagName={"Flyer"} />
                      <TagButton tagName={"Magazine"} />
                      <TagButton tagName={"Men's T-Shirt"} />
                      <TagButton tagName={"Mouse Pad"} />
                      <TagButton tagName={"Mug"} />
                      <TagButton tagName={"Phone Case"} />
                      <TagButton tagName={"Poster"} />
                      <TagButton tagName={"Sticker"} />
                      <TagButton tagName={"Sweatshirt"} />
                      <TagButton tagName={"T-Shirt"} />
                      <TagButton tagName={"Triptych"} />
                      <TagButton tagName={"Brochure"} />
                    </div>
                  </div>
                </div>
                <div className="primary">
                  <div className="top d-flex-center">
                    <p>Showing 1–15 of 52 results</p>
                    <select name="" id="">
                        <option value="">Default Sorting</option>
                        <option value="">Sort by popularity</option>
                        <option value="">Sort by latest</option>
                        <option value="">Sort by price: low to high</option>
                        <option value="">Sort by price: high to low</option>
                    </select>
                  </div>
                  <div className="shop_products">
                    <TopSellingCard
                      img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                      title="Mug"
                      discountPrice="13.06"
                      price="16.18"
                    />
                    <TopSellingCard
                      img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                      title="Mug"
                      discountPrice="13.06"
                      price="16.18"
                    />
                    <TopSellingCard
                      img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                      title="Mug"
                      discountPrice="13.06"
                      price="16.18"
                    />
                    <TopSellingCard
                      img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                      title="Mug"
                      discountPrice="13.06"
                      price="16.18"
                    />
                    <TopSellingCard
                      img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                      title="Mug"
                      discountPrice="13.06"
                      price="16.18"
                    />
                    <TopSellingCard
                      img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                      title="Mug"
                      discountPrice="13.06"
                      price="16.18"
                    />
                    <TopSellingCard
                      img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                      title="Mug"
                      discountPrice="13.06"
                      price="16.18"
                    />
                    <TopSellingCard
                      img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                      title="Mug"
                      discountPrice="13.06"
                      price="16.18"
                    />

                    <TopSellingCard
                      img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                      title="Mug"
                      discountPrice="13.06"
                      price="16.18"
                    />
                    <TopSellingCard
                      img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                      title="Mug"
                      discountPrice="13.06"
                      price="16.18"
                    />
                    <TopSellingCard
                      img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                      title="Mug"
                      discountPrice="13.06"
                      price="16.18"
                    />
                    <TopSellingCard
                      img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                      title="Mug"
                      discountPrice="13.06"
                      price="16.18"
                    />
                    <TopSellingCard
                      img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                      title="Mug"
                      discountPrice="13.06"
                      price="16.18"
                    />
                    <TopSellingCard
                      img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                      title="Mug"
                      discountPrice="13.06"
                      price="16.18"
                    />
                    <TopSellingCard
                      img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                      title="Mug"
                      discountPrice="13.06"
                      price="16.18"
                    />
                  </div>
                  <div className="change_page">
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    );
  }
}

export default Shop;
