import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <>
       <div id="main-section">
        <nav id="main-section-nav">
          <button>The Fair</button>
          <button>Gallery</button>
          <button>Visit</button>
          <button>About</button>
          <input type="text" placeholder="SEARCH"></input>
          <button id="magnify-glass"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/490px-Magnifying_glass_icon.svg.png" alt="magnifyglass logo"/></button>
        </nav>
        </div>
        <nav id="date-nav">
          <h2>August 27-29, 2016</h2>
        </nav>
      </>
    )
  }
}
