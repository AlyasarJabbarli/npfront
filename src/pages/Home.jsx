import React, { Component } from "react";
import MainSliderCard from "../components/homePage_components/MainSliderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import CategoryCard from "../components/homePage_components/CategoryCard";
import SubTitle from "../components/homePage_components/SubTitle";
import AdvantageCard from "../components/homePage_components/AdvantageCard";
import image1 from "../images/image1.svg";
import image2 from "../images/image2.svg";
import image3 from "../images/image3.svg";
import image4 from "../images/image4.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TopSellingCard from "../components/homePage_components/TopSellingCard";
import PartnersTextCard from "../components/homePage_components/PartnersTextCard";
import PartnersImgCard from "../components/homePage_components/PartnersImgCard";

export class Home extends Component {
  render() {
    return (
      <main>
        <section id="mainSlider">
          <div className="slider_all d-flex">
            <Swiper
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Autoplay,
                EffectFade,
              ]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              //  effect = 'fade'
              //  fadeEffect={{crossFade: true}}
              speed={2000}
              loop={true}
            >
              <SwiperSlide>
                <MainSliderCard
                  h3={"PRINTING SERVICES"}
                  h1={"The leader in quality custom"}
                  p={
                    "Turn your ideas into premium products that leave a lasting impression"
                  }
                  img={
                    "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/rev_home7_1.png"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <MainSliderCard
                  h3={"PRINTING SERVICES"}
                  h1={"The leader in quality custom"}
                  p={
                    "Turn your ideas into premium products that leave a lasting impression"
                  }
                  img={
                    "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/rev_home7_1.png"
                  }
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section id="categories">
          <div className="container">
            <div className="categories_all">
              <div className="categories_cards">
                <CategoryCard
                  title={"BUSINESS CARDS"}
                  img={
                    "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate-1.png"
                  }
                />
                <CategoryCard
                  title={"MARKETING MATERIALS"}
                  img={
                    "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate-2.png"
                  }
                />
                <CategoryCard
                  title={"SIGNS & POSTERS"}
                  img={
                    "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate-3.png"
                  }
                />
                <CategoryCard
                  title={"CLOTHING & BAGS"}
                  img={
                    "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate4.png"
                  }
                />
                <CategoryCard
                  title={"DESIGN SERVICES"}
                  img={
                    "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate-5.png"
                  }
                />
                <CategoryCard
                  title={"INVITATIONS & STATIONERY"}
                  img={
                    "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate-6.png"
                  }
                />
                <CategoryCard
                  title={"LABELS & STICKERS"}
                  img={
                    "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate-7.png"
                  }
                />
                <CategoryCard
                  title={"PHOTO GIFTS & CALENDARS"}
                  img={
                    "https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate-8.png"
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section id="advantages">
          <div className="container">
            <div className="advantages_all">
              <div className="title">
                <SubTitle subTitle={"LET’S GET PRINTING"} />
                <h2>
                  Reasons to get <span>printing started</span> with us
                </h2>
                <p>
                  Our dedicated staff makes it easy for you to create a unique
                  design that will impress your clients and make you stand out
                  from the crowd.
                </p>
              </div>
              <div className="advantage_cards">
                <AdvantageCard
                  img={image1}
                  h3={"Connect your store"}
                  p={
                    "Connect your store to Printec, add your products, and set your own retail prices"
                  }
                />
                <AdvantageCard
                  img={image2}
                  h3={"Customer places their order"}
                  p={
                    "A customer buys from your store, we charge for fulfillment, and you keep the profit"
                  }
                />
                <AdvantageCard
                  img={image3}
                  h3={"Printes fulfills the order"}
                  p={
                    "We take care of your order from A to Z, and control the whole fulfillment process"
                  }
                />
                <AdvantageCard
                  img={image4}
                  h3={"Order ships to your customer"}
                  p={
                    "Your customer receives their order with your brand attached to it"
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section id="discover">
          <div className="container">
            <div className="discover_all">
              <div className="text">
                <h3 data-aos="zoom-in-right">SAMPLE PACKS</h3>
                <h2 data-aos="flip-up">Discover our best selling products</h2>
                <Link data-aos="fade-up">
                  Order yours now <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="topSelling">
          <div className="container">
            <div className="title">
              <h2>
                <span>Top Selling</span> Items
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered
              </p>
            </div>
            <div className="topSellingCards_all">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                loop={true}
                breakpoints={{
                  0: {
                    speed: 900,
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  420: {
                    slidesPerView: 2,
                  },
                  787: {
                    speed: 2000,
                    spaceBetween: 0,
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperSlide>
                  <TopSellingCard
                    img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                    title="Mug"
                    discountPrice="13.06"
                    price="16.18"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TopSellingCard
                    img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                    title="Mug"
                    discountPrice="13.06"
                    price="16.18"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TopSellingCard
                    img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                    title="Mug"
                    discountPrice="13.06"
                    price="16.18"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TopSellingCard
                    img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                    title="Mug"
                    discountPrice="13.06"
                    price="16.18"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TopSellingCard
                    img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                    title="Mug"
                    discountPrice="13.06"
                    price="16.18"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TopSellingCard
                    img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                    title="Mug"
                    discountPrice="13.06"
                    price="16.18"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TopSellingCard
                    img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                    title="Mug"
                    discountPrice="13.06"
                    price="16.18"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TopSellingCard
                    img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                    title="Mug"
                    discountPrice="13.06"
                    price="16.18"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TopSellingCard
                    img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                    title="Mug"
                    discountPrice="13.06"
                    price="16.18"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TopSellingCard
                    img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                    title="Mug"
                    discountPrice="13.06"
                    price="16.18"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TopSellingCard
                    img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                    title="Mug"
                    discountPrice="13.06"
                    price="16.18"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TopSellingCard
                    img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_32-600x600.jpg"
                    title="Mug"
                    discountPrice="13.06"
                    price="16.18"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section id="partners">
          <div className="container">
            <div className="partners_all">
              <div className="partners_text_swiper">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000 }}
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  speed={1500}
                >
                  <SwiperSlide>
                    <PartnersTextCard text="'Every time I order something it has been amazing quality, on time, they even beat my expectations. They order something and I ask if I can get it by Monday, and I'll have it the same day.'" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PartnersTextCard text="'Every time I order something it has been amazing quality, on time, they even beat my expectations. They order something and I ask if I can get it by Monday, and I'll have it the same day.'" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PartnersTextCard text="'Every time I order something it has been amazing quality, on time, they even beat my expectations. They order something and I ask if I can get it by Monday, and I'll have it the same day.'" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="partners_img_swiper">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000 }}
                  spaceBetween={50}
                  slidesPerView={5}
                  loop={true}
                  speed={1500}
                  breakpoints={{
                    0: {
                      speed: 500,
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    300: {
                      slidesPerView: 2,
                    },
                    550: {
                      slidesPerView: 3,
                    },
                    787: {
                      speed: 900,
                      spaceBetween: 0,
                      slidesPerView: 5,
                    },
                  }}
                >
                  <SwiperSlide>
                    <PartnersImgCard img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/brand-1.svg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PartnersImgCard img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/brand-2.svg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PartnersImgCard img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/brand-3.svg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PartnersImgCard img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/brand-4.svg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PartnersImgCard img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/brand-5.svg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PartnersImgCard img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/brand-6.svg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PartnersImgCard img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/brand-7.svg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PartnersImgCard img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/brand-8.svg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PartnersImgCard img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/brand-9.svg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PartnersImgCard img="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/brand-10.svg" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section id="signUp">
          <div className="container">
            <div className="signUp_all">
              <div className="sign_up_container d-flex">
                <div className="left d-flex ">
                  <img
                    src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/letter-1.png"
                    alt=""
                  />
                  <div className="text">
                    <p>Sign up for exclusive offers from us</p>
                  </div>
                </div>
                <div className="form_div">
                  <p>
                    Sign up to your newsletter for all the latest news and our
                    villa exclusives promotion.
                  </p>
                  <form action="" className="d-flex">
                    <input
                      type="email"
                      placeholder="Sign up for exclusive offers from us"
                    />
                    <button className="d-flex-center">
                      Subscribe
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
