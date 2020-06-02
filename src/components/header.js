import React from "react"
import { Link } from "gatsby"
import { BsArrowRight } from "react-icons/bs"
import logo from "../images/logo1.png"

const Header = () => {
  return (
    <div>
      <nav className="top-bar">
        <p>Join to help the community during COVID-19</p>
        <div>
          <a href="https://alltogether.typeform.com/to/Fl5Aku" target="_blank">
            <button>
              Volunteer <BsArrowRight className="arrow" />
            </button>
          </a>
          <button>
            Donate <BsArrowRight className="arrow" />
          </button>
        </div>
      </nav>
      <header>
        <div className="logo-section">
          <img src={logo} className="logo" alt="logo" />
          <span>All Together LA</span>
        </div>
        <div className="menu">
          <ul>
            <Link to="/#mission">
              <li>Our Mission</li>
            </Link>
            <Link to="/#help">
              <li>Get Help</li>
            </Link>
            <Link to="/#about">
              <li>About Us</li>
            </Link>
            <Link to="/#stories">
              <li>Stories</li>
            </Link>
            <Link to="/#press">
              <li>Press</li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
