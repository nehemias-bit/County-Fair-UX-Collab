import React from "react";
// import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';

// define our Event component
export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    // make sure to return some UI
    return (
      <div className="gallery-images">
        <div id="top-gallery-images">
          <img src="http://www.rudgwicksteamshow.co.uk/communities/9/004/006/141/899/images/4606821209.jpg" />
          <img src="http://www.rudgwicksteamshow.co.uk/communities/9/004/006/141/899/images/4582493359.jpg" />
          <img src="http://www.rudgwicksteamshow.co.uk/communities/9/004/006/141/899/images/4582493437.jpg" />
        </div>

        <div id="middle-gallery-images">
          <img src="https://i.imgur.com/yu3eQCw.png" />
        </div>
        <div id="bottom-gallery-images">
          <img src="http://www.rudgwicksteamshow.co.uk/communities/9/004/006/141/899/images/4582495325.jpg" />
          <img src="http://www.rudgwicksteamshow.co.uk/communities/9/004/006/141/899/images/4582509942.jpg" />
        </div>
      </div >

    )
  }
}
