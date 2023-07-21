import React, { Component } from 'react'
import Title from '../components/Title'
import GetInTouchCard from '../components/contact_components/GetInTouchCard'
import getInTouchImg1 from '../images/getInTouch1.svg'
import getInTouchImg2 from '../images/getInTouch2.svg'
import getInTouchImg3 from '../images/getInTouch3.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export class Contact extends Component {
  render() {
    return (
      <main>
        <Title title={"Contact"}/>
        <section id='getInTouch'>
            <div className="container">
                <div className="getInTouch_all">
                    <div className="title">
                        <h2><span>Get in touch</span> with us</h2>
                        <p>Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email or fill out the contact form and we’ll get back to you.</p>
                    </div>
                    <div className="cards">
                        <GetInTouchCard img={getInTouchImg1} title="Address" p1="Head Office: 785 15h Street, Office 478" p2="Berlin, De 81566" p3="Check Location"/>
                        <GetInTouchCard img={getInTouchImg1} title="Get In Touch" p1="Mobile: 084 3456 19 89" p2="Hotline: 1900 26886" p3="E-mail: hello@printec.com"/>
                        <GetInTouchCard img={getInTouchImg1} title="Hour of operation" p1="Monday-Friday: 8am-5pm" p2="Saturday: 9am-Midday" p3="Sunday: Closed"/>
                    </div>
                </div>
            </div>
        </section>
        <section id='sendMessage'>
          <div className="container">
            <div className="sendMessage_all">
              <div className="title">
                <h2>Send a <span>message</span></h2>
              </div>
              <div className="form">
                <form action="">
                  <div className="name_email">
                    <input type="text"  placeholder='Full Name'/>
                    <input type="email" placeholder='Email' />
                  </div>
                  <input type="text" placeholder='Subject' />
                  <textarea placeholder='Message' name="" id="" cols="30" rows="8"></textarea>
                  <div className="button">
                    <button>Submit <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Contact
