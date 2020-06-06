import React, { Component } from "react"
import { BsArrowRight } from "react-icons/bs"
import man from "../images/man.png"
import hand from "../images/hand.png"
import heart from "../images/heart.png"

class HelpUs extends Component {
  render() {
    return (
      <div className="section_6">
        <div
          style={{
            background: `url(${man})`,
            backgroundRepeat: "no-repeat !important",
            backgroundSize: "cover",
          }}
        >
          <h3>Get help</h3>
          <p style={{ marginBottom: "2rem" }}>
            Tell us what you need and we’ll connect with you a
            background-checked neighbor within 24 hours.
          </p>
          <div>
            <a style={{ color: "green" }} href="tel:323-310-0411">
              <span>
                Call us now <BsArrowRight className="arrow" />
              </span>
            </a>
            <br />
            <a
              style={{ color: "green" }}
              href=" https://www.notion.so/Resources-for-LA-Seniors-7b5d40bf627c42e1a9e7d17cdfa99f6f"
              target="_blank"
            >
              <span>
                Find Resources <BsArrowRight className="arrow" />
              </span>
            </a>
          </div>
        </div>
        <div
          style={{
            background: `url(${hand})`,
            backgroundRepeat: "no-repeat !important",
            backgroundSize: "cover",
          }}
        >
          <h3>Volunteer</h3>
          <p>
            If you are a LA resident who would like to volunteer with us, we
            would love your help!
          </p>
          <a
            style={{ color: "green" }}
            href="https://alltogether.typeform.com/to/Fl5Aku"
            target="_blank"
          >
            <div style={{ marginTop: "2rem" }}>
              Sign up now <BsArrowRight className="arrow" />
            </div>
          </a>
        </div>
        <div
          style={{
            background: `url(${heart})`,
            backgroundRepeat: "no-repeat !important",
            backgroundSize: "cover",
          }}
        >
          <h3>Donate</h3>
          <p>Support our cause and make a difference!</p>
          <div style={{ marginTop: "3.8rem" }}>
            Donate here <BsArrowRight className="arrow" />
          </div>
        </div>
      </div>
    )
  }
}

export default HelpUs
