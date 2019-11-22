
import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import { Link } from 'react-router-dom';

export default class FairCarousel extends Component {
  render() {
    const settings =  {
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 10000,
      centerMode: true,
      centerPadding: 10,
      className: 'fair-carousel',
      dots: true,
      dotsScroll: 1,
      initialSlide: 0,
      shift: 100,
      arrows: false
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="car-img-div">
            <Link to="/gallery"><img className="desktop" src="https://i.imgur.com/Wwdllgo.png" /></Link>
            <Link to="/gallery"><img className="mobile" src="https://i.imgur.com/u8Wjwzn.png" /></Link>
            <div id="the-show"><h1>The Show</h1></div>
          </div>
          <div className="car-img-div">
            <Link to="/gallery"><img className="desktop" src="https://i.imgur.com/1EYr53F.png" /></Link>
            <Link to="/gallery"><img className="mobile" src="https://i.imgur.com/dJcSfjJ.png" /></Link>
            <div id="the-show"><h1>The Show</h1></div>
          </div>
          <div className="car-img-div">
            <Link to="/gallery"><img className="desktop" src="https://i.imgur.com/S89miFm.png" /></Link>
            <Link to="/gallery"><img className="mobile" src="https://i.imgur.com/3UkFm0x.png" /></Link>
            <div id="the-show"><h1>The Show</h1></div>
          </div>
          <div className="car-img-div">
            <Link to="/gallery"><img className="desktop" src="https://i.imgur.com/rbPQ60x.png" /></Link>
            <Link to="/gallery"><img className="mobile" src="https://i.imgur.com/zBIcOsz.png" /></Link>
            <div id="the-show"><h1>The Show</h1></div>
          </div>
          <div className="car-img-div">
            <Link to="/gallery"><img className="desktop" src="https://i.imgur.com/yu3eQCw.png" /></Link>
            <Link to="/gallery"><img className="mobile" src="https://i.imgur.com/OY8WqpX.png" /></Link>
            <div id="the-show"><h1>The Show</h1></div>
          </div>
        </Slider>
      </div>
    );
  }
}