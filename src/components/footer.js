import React from "react"
import facebook from "../images/fb.png"
import insta from "../images/insta.png"
import twitter from "../images/twitter.png"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="social-media">
          <img src={facebook} alt="facebook icon" width="70" />
          <img src={insta} alt="instagram icon" width="70" />
          <img src={twitter} alt="twitter icon" width="70" />
        </div>
        <div className="footer-links">
          <a
            style={{ color: "white" }}
            href="https://www.notion.so/Resources-for-LA-Seniors-7b5d40bf627c42e1a9e7d17cdfa99f6f"
            target="_blank"
          >
            <p>Resources</p>
          </a>
          <a
            style={{ color: "white" }}
            href="https://alltogether.typeform.com/to/Fl5Aku"
            target="_blank"
          >
            <p>Volunteer</p>
          </a>
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
