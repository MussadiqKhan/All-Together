import React from "react"
import facebook from "../images/fb.png"
import insta from "../images/insta.png"
import twitter from "../images/twitter.png"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="social-media">
          <img src={facebook} alt="facebook icon" />
          <img src={insta} alt="instagram icon" />
          <img src={twitter} alt="twitter icon" />
        </div>
        <div className="footer-links">
          <p>Resources</p>
          <p>Volunteer</p>
          <p>Donate</p>
        </div>
        <div className="copyright">
          <p>2020 AllTogether LA</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
