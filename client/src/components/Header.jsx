import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {


  return (
    <div className="header">
      <div id="left-side-header">
        <Link to="/home"><img
          id="header-image"
          src="https://cdn-az.allevents.in/banners/417c6ea809a6ff945a1f153dc4f58528-rimg-w720-h338-gmir"
        /></Link>
      </div>
      <div id="right-side-header">
        <p>Right Side Header</p>
      </div>
      <div id="burger-menu">
        <div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div>
        <p>Menu</p>
      </div>  
      {/* <div id="header-search">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/490px-Magnifying_glass_icon.svg.png" />
        <input type="text" placeholder="Search"></input>
      </div> */}
    </div>
  )
}