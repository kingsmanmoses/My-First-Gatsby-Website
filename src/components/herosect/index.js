import React from "react"
import "./hero.css"
import { Button } from "../button/Button"
import myvid from "../../vid/vid.mp4"

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={myvid} autoPlay loop muted></video>
      <h1>Travel More</h1>
      <p>Plan Your Next Trip Today</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
