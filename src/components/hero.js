import React from "react"
import image1 from "../../static/images/image1.png"
import eclipse from "../../static/images/eclipse.png"

const Hero = () => {
  return (
    <div>
      {" "}
      <div className="hero">
        <div className="hero-content">
          <h1>Helping seniors and the immunocompromised during COVID-19</h1>
          <p>
            We connect seniors to background-checked neighbors to help with
            grocery and medication deliveries within 24 hours
          </p>
          <div>
            <div className="hero-button">
              <button className="call">Call for help at (323)310-0411</button>
              <button className="volunteer-button">Volunteer with us</button>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={eclipse} className="eclipse" alt="eclipse" />
          <img src={image1} className="old" alt="old-lady" />
        </div>
      </div>
    </div>
  )
}

export default Hero
