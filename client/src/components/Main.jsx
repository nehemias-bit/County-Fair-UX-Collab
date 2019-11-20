import React, { Component } from 'react';
import CountDownClock from './CountDownClock';
import FairCarousel from './FairCarousel';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
      <>
       <div id="main-section">
        <nav id="main-section-nav">
          <button>The Fair</button>
          <Link to="/gallery"><button id="gallery-button">Gallery</button></Link>
          <button>Visit</button>
          <button>About</button>
          <input type="text" placeholder="SEARCH"></input>
          <button id="magnify-glass"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/490px-Magnifying_glass_icon.svg.png" alt="magnifyglass logo"/></button>
        </nav>
        <FairCarousel />
        </div>
        <div id="bottom-nav">
          <div id="date-and-count">
            <nav id="date-nav">
              <h2>August 27-29, 2016</h2>
            </nav>
            <CountDownClock deadline={this.props.deadline} />
          </div> 
          <div id="buy-ticket">
            <button>Buy Tickets</button>
          </div>
        </div>  
      </>
    )
  }
}
