import React from 'react';

import { Link } from 'react-router-dom';

export default function Footer(props) {


  return (
    <div className="footer-background">


      <div className="footer">


      


        <div className="left-footer-section">


          <div id="subscribe-section">
            <h3 id="sec-one-h3">Subscribe to Our Newsletter</h3>
            <img src="https://files.slack.com/files-pri/T0351JZQ0-FQVS6G6TH/newsletter_subscribe__mobile_.png" />

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
              src="https://files.slack.com/files-pri/T0351JZQ0-FQVR8LCS3/facebook_icon__mobile_.png" />
            <img
              id="pinterest-icon"
              src="https://files.slack.com/files-pri/T0351JZQ0-FQGFMJP5H/pinterest_icon__mobile_.png"
            />
            <img
              id="twitter-icon"
              src="https://files.slack.com/files-pri/T0351JZQ0-FQW6313KQ/twitter_icon__mobile_.png"
            />
            <img
              id="instagram-icon"
              src="https://files.slack.com/files-pri/T0351JZQ0-FQTFXMJP6/insta_icon__mobile_.png"
            />
          </div>
        </div>
      </div>
    </div>

  )
}