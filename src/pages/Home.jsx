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
              // autoplay={{ delay: 4000 }}
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
      </main>
    );
  }
}

export default Home;
