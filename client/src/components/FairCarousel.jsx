
import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

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
        <Slider { ...settings }>
          <div>
            <img src="http://www.rudgwicksteamshow.co.uk/communities/9/004/006/141/899/images/4582509942.jpg"/>
          </div>
          <div>
            <img src="http://www.rudgwicksteamshow.co.uk/communities/9/004/006/141/899/images/4582509942.jpg"/>
          </div>
          <div>
            <img src="http://www.rudgwicksteamshow.co.uk/communities/9/004/006/141/899/images/4582509942.jpg"/>
          </div>
          <div>
            <img src="http://www.rudgwicksteamshow.co.uk/communities/9/004/006/141/899/images/4582509942.jpg"/>
          </div>
          <div>
          <img src="http://www.rudgwicksteamshow.co.uk/communities/9/004/006/141/899/images/4582509942.jpg"/>
          </div>
        </Slider>
      </div>
    );
  }
}