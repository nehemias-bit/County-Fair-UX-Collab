import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {


  return (
    <div className="header">
      <div id="left-side-header">
        <img
          id="header-image"
          src="https://cdn-az.allevents.in/banners/417c6ea809a6ff945a1f153dc4f58528-rimg-w720-h338-gmir"
        />
      </div>
      <div id="right-side-header">
        <p>Right Side Header</p>
      </div>
    </div>

  )
}