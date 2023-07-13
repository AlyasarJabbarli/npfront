import { faAngleUp, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="footer_all">
            <div id="signUp">
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
            <div className="footer_top"></div>
            <div className="footer_bottom d-flex">
              <div className="copyright">
                <p>Copyright © 2023 Printly Solutions. All rights reserved</p>
              </div>
              <div className="payment_methods d-flex-center">
                <img
                  src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/payment.png"
                  alt=""
                />
              </div>
              <div className="back_to_top d-flex">
                <Link to={"/"}>
                  BACK TO TOP <FontAwesomeIcon icon={faAngleUp} />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
