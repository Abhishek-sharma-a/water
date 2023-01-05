import React from 'react'
import'./footer.css';
import { FaGooglePlus, FaTwitter, FaFacebook, FaYoutube, FaPinterest } from "react-icons/fa";
// import Logo from './Components/images/logo.png';
import Butt from './Butt'

const Footer = () => {
  return (
    <>
      <div className='footer'>

        <div className='part'>
          <div className='part1'>
            <input type="Email" placeholder='Email Address' className='email'  />
            <Butt btnName="SUBSCRIBE" className="mt-4 ms-2"/>
            
          </div>

          <div className='icon'>
            <div className='social'><FaTwitter /></div>
            <div className='social'><FaFacebook /></div>
            <div className='social'><FaGooglePlus /></div>
            <div className='social'><FaYoutube /></div>
            <div className='social'><FaPinterest /></div>
          </div>
        </div>

        

        <div className='box'>

          <div className='box1'>
            <img src="./" /> 
            <p>Uaques Drinking watergives five steps of water purification. Promising quality and ensuring the latest technology and serving the water with labelled bottles with trust  and honesty.</p>
          </div>

          <div className='box1'>
            <h2>&nbsp; &nbsp; About Us</h2>
            <ul>
              <li><a href="#">Why Choose Us</a></li>
              <li><a href="#">Free Water Bottles</a></li>
              <li><a href="#">Water Dispensers</a></li>
              <li><a href="#">Bottled Water Coolers</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Why Choose Us</a></li>
            </ul>

          </div>

          <div className='box1'>
            <h2>Business Hours</h2>
            <h4>Monday-Friday: 9am to 5pm</h4>
            <h4> Saturday: 10am to 4pm</h4>
            <h4>Sunday: Closed</h4>
          </div>

          <div className='box1'>
            <h2>Contact Us</h2>
            <h4>3065 Upton Avenue, Guilford Maine 04443 USA</h4>
            <h4>Call Us +1 207-876-1059</h4>
            <h4>E-mail: info@example.com</h4>
          </div>
        </div>
      </div>

      <div className='bottom'>
        <div>
          <p>Copyrights © 2020 Uaques Template. All rights reserved</p>
        </div>
      </div>
    </>

  )
}

export default Footer






























