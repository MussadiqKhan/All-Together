import React from "react"

const Hero = () => {
  return (
    <div className="main-hero">
      <div className="hero">
        <div className="hero-content">
          <h1>
            Helping seniors and
            <br /> the immunocompromised <br />
            during COVID-19
          </h1>
          <p>
            We connect seniors to background-checked neighbors to <br /> help
            with grocery and medication deliveries within 24 hours
          </p>
          <div>
            <div className="hero-button">
              <button className="call">
                Call for help at <b>(323)310-0411</b>
              </button>
              <button className="volunteer-button">Volunteer with us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
