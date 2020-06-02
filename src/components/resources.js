import React from "react"
import grocery from "../images/grocery.png"
import medicine from "../images/medicine.png"
import phone from "../images/phone.png"
import publics from "../images/public.png"
import { BsArrowRight } from "react-icons/bs"

const Resources = () => {
  return (
    <div>
      <div className="section_3" id="help">
        <p className="section_3_p">OUR RESOURCES</p>
        <h2>How we can help</h2>
        <div className="card-parent">
          <div className="card">
            <div className="icon">
              <img src={grocery} alt="grocery icon" />
            </div>
            <div className="card-text">
              <h5>Grocery</h5>
              <p>
                We can help you arrange grocery deliveries, including picking up
                items at the store on your behalf!
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={medicine} alt="medicine icon" />
            </div>
            <div className="card-text">
              <h5>Medication</h5>
              <p>
                We can help you arrange medication deliveries, including picking
                them up at the pharmacy on your behalf.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={phone} alt="phone icon" />
            </div>
            <div className="card-text">
              <h5>Phone Buddy </h5>
              <p>
                Maybe you're just lonely in quarantine? We probably are too 🙂
                We're happy to chat!{" "}
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={publics} alt="public gathering" />
            </div>
            <div className="card-text">
              <h5>Public Resources </h5>
              <p>
                We can find support services you may be eligible for and help
                you sign up
                <div
                  style={{
                    marginTop: "1.8rem",
                    color: "#61BE4E",
                  }}
                  className="links"
                >
                  <b>
                    <a
                      href=" https://www.notion.so/Resources-for-LA-Seniors-7b5d40bf627c42e1a9e7d17cdfa99f6f"
                      target="_blank"
                    >
                      {" "}
                      Resources Available <BsArrowRight className="arrow" />
                    </a>
                  </b>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources
