import React, { Component } from "react"
import { BsArrowRight } from "react-icons/bs"

class HelpUs extends Component {
  render() {
    return (
      <div className="section_6">
        <div
          style={{
            background: `url(../images/man.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h3>Get help</h3>
          <p style={{ marginBottom: "2rem" }}>
            Tell us what you need and we’ll connect with you a
            background-checked neighbor within 24 hours.
          </p>
          <div>
            <span>
              {" "}
              Call us now <BsArrowRight className="arrow" />
            </span>
          </div>
        </div>
        <div
          style={{
            background: `url(../images/hand.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h3>Volunteer</h3>
          <p>
            If you are a LA resident who would like to volunteer with us, we
            would love your help!
          </p>
          <div style={{ marginTop: "1.8rem" }}>
            Sign up now <BsArrowRight className="arrow" />
          </div>
        </div>
        <div
          style={{
            background: `url(../images/heart.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h3>Donate</h3>
          <p>Support our cause and make a difference!</p>
          <div style={{ marginTop: "3.6rem" }}>
            Donate here <BsArrowRight className="arrow" />
          </div>
        </div>
      </div>
    )
  }
}

export default HelpUs
