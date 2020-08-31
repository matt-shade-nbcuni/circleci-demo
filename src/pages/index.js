import React from "react"
import "./main.css";
import fig from "./fig2.png";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="wrap-container">
        <div className="slogan">grow where you're planted.</div>
      </div>
      <div className="img-container">
        <img src={fig}></img>
      </div>
    </div>

  )
}
