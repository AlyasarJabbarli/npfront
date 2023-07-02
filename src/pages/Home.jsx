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
import image1 from "../images/image1.svg"
import image2 from "../images/image2.svg"
import image3 from "../images/image3.svg"
import image4 from "../images/image4.svg"


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
                <CategoryCard title={"BUSINESS CARDS"} img={"https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate-1.png"}/>
                <CategoryCard title={"MARKETING MATERIALS"} img={"https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate-2.png"}/>
                <CategoryCard title={"SIGNS & POSTERS"} img={"https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate-3.png"}/>
                <CategoryCard title={"CLOTHING & BAGS"} img={"https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate4.png"}/>
                <CategoryCard title={"DESIGN SERVICES"} img={"https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate-5.png"}/>
                <CategoryCard title={"INVITATIONS & STATIONERY"} img={"https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate-6.png"}/>
                <CategoryCard title={"LABELS & STICKERS"} img={"https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate-7.png"}/>
                <CategoryCard title={"PHOTO GIFTS & CALENDARS"} img={"https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/cate-8.png"}/>
              </div>
            </div>
          </div>
        </section>
        <section id="advantages">
            <div className="container">
              <div className="advantages_all">
                <div className="title">
                  <SubTitle subTitle={"LET’S GET PRINTING"}/>
                  <h2>Reasons to get <span>printing started</span> with us</h2>
                  <p>Our dedicated staff makes it easy for you to create a unique design that will impress your clients and make you stand out from the crowd.</p>
                </div>
                <div className="advantage_cards">
          
                  <AdvantageCard img={image1} h3={"Connect your store"} p={"Connect your store to Printec, add your products, and set your own retail prices"}/>
                  <AdvantageCard img={image2} h3={"Customer places their order"} p={"A customer buys from your store, we charge for fulfillment, and you keep the profit"}/>
                  <AdvantageCard img={image3} h3={"Printes fulfills the order"} p={"We take care of your order from A to Z, and control the whole fulfillment process"}/>
                  <AdvantageCard img={image4} h3={"Order ships to your customer"} p={"Your customer receives their order with your brand attached to it"}/>
                </div>
              </div>
            </div>
        </section>
      </main>
    );
  }
}

export default Home;
