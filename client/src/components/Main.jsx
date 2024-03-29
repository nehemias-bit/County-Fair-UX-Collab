import React, { Component } from 'react';
import CountDownClock from './CountDownClock';
import { Route, Link, withRouter } from 'react-router-dom';
import Gallery from './Gallery';
import FairCarousel from './FairCarousel';

export default class Main extends Component {
  render() {
    return (
      <div id="flip">
       <div id="main-section">
        <nav id="main-section-nav">
          <button>The Fair</button>
          <Link to={`/gallery`}>
          <button id="gallery-button">Gallery</button>
          </Link> 
          <button>Visit</button>
          <button>About</button>
          <input type="text" placeholder="SEARCH"></input>
          <button id="magnify-glass"><img src="https://i.imgur.com/eyhW28L.png" alt="magnifyglass logo"/></button>
          </nav>
          <FairCarousel />
        </div>
        <div id="bottom-nav">
          <div id="date-and-count">
            <nav id="date-nav">
              <h2>November 22-24, 2019</h2>
            </nav>
            <CountDownClock deadline={this.props.deadline} />
          </div> 
          <div id="buy-ticket">
            <button>Buy Tickets</button>
          </div>
        </div>  
      </div>
    )
  }
}
