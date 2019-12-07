import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Component/Nav';


ReactDOM.render(
  <div className="container">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <Home />
  </div>,
  document.getElementById('wrapper')
)  