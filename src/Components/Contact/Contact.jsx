import React from 'react'
import style from './Contact.module.css';
import { TiHomeOutline } from "react-icons/ti";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <div className={style['contact-container']}>
      <div className={style['contact-left']}>
        <h1>Feel free to reach out to us at any time.</h1>
        <p className={style.para}>Welcome to our Food App, where we bring delicious meals to your doorstep with just a few taps. Whether you're craving your favorite comfort food or looking to try something new, we’ve got you covered. Our app connects you to a variety of local restaurants, offering fresh and tasty dishes to satisfy every palate. Have a question or need assistance? Feel free to reach out to our customer service team, and we'll be happy to help. Your satisfaction is our priority!</p>
        <div className={style.info}>
            <div className={style['info-sub']}>
              <TiHomeOutline className={style.icon}/>
                <div>
                  <strong>Our Location</strong>
                  <p>
                    99 S.t Jomblo Park Pekanbaru 28292. 
                    <br />
                    Indonesia
                  </p>
                </div>
            </div>

            <div className={style['info-sub']}>
              <FaPhoneVolume className={style.icon}/>
                <div>
                  <strong>Phone Number</strong>
                  <p>(+62)81 414 257 9980</p>
                </div>
            </div>

            <div className={style['info-sub']}>
              <TfiEmail className={style.icon}/>
                <div>
                  <strong>Email Address</strong>
                  <p>info@yourdomain.com</p>
                </div>
            </div>

        </div>
      </div>
      <div className={style['contact-right']}>
        <h3>Contact Us</h3>
          <form action="">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone Number" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
      </div>
    </div>

  )
}

export default Contact