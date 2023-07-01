import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";

export class MainSliderCard extends Component {
  componentDidMount() {
    Aos.init();
  }
  render() {
    const { h3, h1, p, link, img } = this.props;
    return (
      <div className="slider_card_all">
        <div className="slider_card">
          <img
            className="img_animation"
            src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/rev_home7_2.png"
            alt=""
            data-aos="fade-down"
          />

          <div className="slider_card_left">
            <h3
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-easing="ease-in-sine"
              // data-aos-duration="500"
            >
              {h3}
            </h3>
            <h1
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-easing="ease-in-sine"
            >
              {h1}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-easing="ease-in-sine"
            >
              {p}
            </p>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-delay="800"
              className="shopNow"
            >
              <Link to={link}>
                Shop Now <FontAwesomeIcon icon={faArrowRight} />{" "}
              </Link>
            </div>
          </div>
          <div className="slider_card_right d-flex-center">
            <img src={img} alt="" data-aos="fade-left" data-aos-delay="500" />
            <div className="orange_animation"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSliderCard;
