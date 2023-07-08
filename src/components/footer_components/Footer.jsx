import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer id='footer'>
        <div className="container">
            <div className="footer_all">
                <div className="footer_top">
                  
                </div>
                <div className="footer_bottom d-flex">
                    <div className="copyright">
                      <p>Copyright © 2023 NextPrint. All rights reserved</p>
                    </div>
                    <div className="payment_methods d-flex-center">
                        <img src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/payment.png" alt="" />
                    </div>
                    <div className="back_to_top d-flex">
                        <a href='#'>BACK TO TOP <FontAwesomeIcon icon={faAngleUp}/> </a>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer
