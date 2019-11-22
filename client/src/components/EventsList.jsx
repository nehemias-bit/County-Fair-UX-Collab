import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EventsList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
      <div className="top-row-pictures">
          <img
            src="https://www.discoverlancaster.com/uploads/members/pennsylvania_renaissance_faire/main/prf%20partnerpage%20450%20x%20235.jpg"
            className="top-photo"
          />
          <img
            src="https://files.tripstodiscover.com/files/2019/04/renaissance-fair-1.jpg"
            className="top-photo"
          />
          <img
            src="https://bloximages.newyork1.vip.townnews.com/lancasteronline.com/content/tncms/assets/v3/editorial/2/06/2063b0ae-b7a7-11e9-962b-7b17141cfe45/5d4868c562d81.image.jpg?resize=400%2C267"
            className="top-photo"
          />
        </div >
        <div className="events-parent">
      
        <div className="top-row-h1">
            <h1 id="one">2020 Updates</h1>
            <h1 id="two">Directions</h1>
            <h1 id="three">Calender</h1>
        </div>
        
        
        <div className="top-row-h3">
            <div id="four"><h3 >Checkout what's going on this year</h3></div>
            <div id="five"><h3 >Find the quickest route</h3></div>
            <div id="six"><h3>View the schedule for this years show</h3></div>
        </div>
        <div id="middle-part">
        <div id="title">
          <h1>Rudgwick Steam and Country Show</h1>
        </div>
        
        <div id="paragraph">
          <p>A family run show on it's 29th year. One of the last remaining events of its kind. It is organized and run the same way as it was done years ago.</p>
            
          <p>Steam and Country show has something for everyone to enjoy, such as the sights and sounds of the beautifully restored vehicles and the exhibits of the past all around the site. While at the show, visitors can learn and see how things were done in the past from demonstrations to displays over the spectacular 44 acre site. We are also known for our large pet and farm animal sections, ride on the old time traditional fair, our Craft Marquee, and our new Food Hall. Along with all these great attractions, we also have our beer marquee with mini beer festival. Here you can enjoy listening to live agricultural music from the New Forest Plonkers and drink a cold one.</p>

          <p>This is an excellent family fun weekend with something for all ages to enjoy. Stop by the next show to enjoy British engineering at it's best.</p>
        </div>

        <div id="title-two">
          <h1>Around the Showground</h1>
        </div>

        <div className="button-row">
          <button className="green-button" id="green-one">Guest Book<img id="green-seven" src="https://i.imgur.com/RxThYwH.png"/></button>
          <button className="green-button">Reserve a Camping Space<img id="green-two" src="https://i.imgur.com/8dfbELV.png"/></button>
          <button className="green-button" id="green-three"><span id="green-five">Exhibitor Trade <span id="green-six">Forms</span><img id="green-four" src="https://i.imgur.com/vVsOS16.png"/></span></button>
        </div>      
        </div>
        </div>  
        </>
    );
  }
}

export default EventsList;