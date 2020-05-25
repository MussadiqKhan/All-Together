import React from "react"
import { BsArrowRight } from "react-icons/bs"
import logo from "../../static/images/logo.png"

const Header = () => {
  return (
    <div>
      <nav className="top-bar">
        <div className="top-bar-content">
          <div>
            <p>Join to help the community during COVID-19</p>
          </div>
          <div>
            <button>
              Volunteer <BsArrowRight className="arrow" />
            </button>
            <button>
              Donate <BsArrowRight className="arrow" />
            </button>
          </div>
        </div>
      </nav>
      <header>
        <div className="logo-section">
          <img src={logo} className="logo" alt="logo" />
          <span>All Together LA</span>
        </div>
        <div className="menu">
          <ul>
            <li>Our Mission</li>
            <li>Get Help</li>
            <li>About Us</li>
            <li>Stories</li>
            <li>Press</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header