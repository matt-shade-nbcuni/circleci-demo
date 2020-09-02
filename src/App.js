import React from 'react';
import fig from "./fig.png";
// import figback from "./figback.png";
import figopacity from "./figopacity.png";

import './App.css';

function App() {
  return (
    <div className="App">

      <div className="wrapper">
        <div className="wrap-container">
          <div className="slogan">grow where you're planted.</div>
        </div>
        <div className="img-container">
          <img className="image-pulse animate__animated animate__infinite	 animate__pulse" src={figopacity}></img>
          <img className="image-still" src={fig}></img>
        </div>
      </div>

    </div>
  );
}

export default App;
