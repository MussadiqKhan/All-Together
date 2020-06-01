import React, { Component } from "react"
import operation from "../images/operation.png"
import pay from "../images/pay.png"
import safety from "../images/safety.png"

class Operations extends Component {
  render() {
    return (
      <div className="section_5">
        <div className="section_5_box">
          <img src={operation} alt="operations" />
          <h4 style={{ marginTop: "30px" }}>Where do we operate?</h4>
          <p>
            We are currently serving all our neighbors in Los Angeles County!
          </p>
        </div>
        <div>
          <img src={pay} alt="pay" style={{ paddingBottom: "2rem" }} />
          <h4>How can I pay for the deliveries?</h4>
          <p>
            Our volunteers will make purchases on your behalf. You can pay them
            back with cash, check, or electronically via Paypal or Venmo.{" "}
          </p>
        </div>
        <div>
          <img src={safety} alt="safety" style={{ paddingBottom: "2.5rem" }} />
          <div className="section_5_text">
            <h4>What are your safety procedures?</h4>
            <p>
              Our #1 priority is the safety of our volunteers and seniors.
              That’s why all of our background-checked volunteers are instructed
              to make contactless deliveries and are provided with masks,
              gloves, and hand sanitizer.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Operations
