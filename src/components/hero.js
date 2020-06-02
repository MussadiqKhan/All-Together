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
              <a href="tel:323-310-0411">
                <button className="call">
                  Call for help at <b>(323)310-0411</b>
                </button>
              </a>
              <a
                href="https://alltogether.typeform.com/to/Fl5Aku"
                target="_blank"
              >
                <button className="volunteer-button">Volunteer with us</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
