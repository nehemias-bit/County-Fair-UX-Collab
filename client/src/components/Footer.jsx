import React from 'react';

import { Link } from 'react-router-dom';

export default function Footer(props) {


  return (
    <div className="footer-background">


      <div className="footer">


      


        <div className="left-footer-section">


          <div id="subscribe-section">
            <h3 id="sec-one-h3">Subscribe to Our Newsletter</h3>
            <img src="https://i.imgur.com/KESPh2L.png" />

          </div>
          <div id="address-section">
            <p>Address</p>
            <p>Rudgwick, Windacres Barn/Church Street,</p>
            <p>Nr Horsham, West Suxxex, RH12 3EG</p>
          </div>

        </div>




        <div className="second-footer-section">


          <div id="site-map-section">
            <h3>Site Map</h3>
            <p>Media</p>
            <p>Camping</p>
            <p>Safety</p>
            <p>Sponsorship</p>
          </div>
          <div id="footer-img-section">
            <img
              id="footer-image"
              src="https://cdn-az.allevents.in/banners/417c6ea809a6ff945a1f153dc4f58528-rimg-w720-h338-gmir"
            />
          </div>
        </div>
        <div id="contact-footer-section">
          <h3>Contact</h3>
          <p>contato@alphaainc.com</p>
          <p>+1 646 763 4523</p>
        </div>
        <div id="social-media-footer-section">
          <div>
            <h3>Social</h3>
          </div>
          <div id="social-links">
            <img
              id="facebook-icon"
              src="https://i.imgur.com/eaTPwgP.png" />
            <img
              id="pinterest-icon"
              src="https://i.imgur.com/fm9CbM1.png"
            />
            <img
              id="twitter-icon"
              src="https://i.imgur.com/QrYIyxh.png"
            />
            <img
              id="instagram-icon"
              src="https://i.imgur.com/ZIZ2AB5.png"
            />
          </div>
        </div>
      </div>
    </div>

  )
}