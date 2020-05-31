import React, { Component } from "react"
import landing from "../images/landing.png"

class Contact extends Component {
  render() {
    return (
      <div className="section_4">
        <div className="section_4_card">
          <p className="section_4_contact">CONTACT US</p>
          <h2>How this works</h2>
          <p className="section_4_text">
            We can deliver groceries & meals or even help pick up your daily
            errands!
          </p>
          <p className="step">STEP 1</p>
          <p className="step_text" style={{ marginBottom: "15px" }}>
            Call our number at
            <span style={{ color: "#61BE4E", padding: "0" }}>
              {" "}
              (323) 310-0411
            </span>
          </p>
          <p className="step">STEP 2</p>
          <p className="step_text">
            Leave a brief message describing what you need (i.e, groceries,
            medication, meal)
          </p>
          <p className="step">STEP 3</p>
          <p className="step_text">
            We’ll connect you with a background-checked neighbor within 24 hours
            to help
          </p>
        </div>
        <div className="section_4_image">
          <img
            src={landing}
            className="section_4_image_img"
            alt="corona cartoon old lady"
          />
        </div>
      </div>
    )
  }
}

export default Contact
