import React, { Component } from "react"
import ration from "../images/ration.png"
import santamonica from "../images/santamonica.png"
import covid from "../images/covid.png"

class Press extends Component {
  render() {
    return (
      <div className="section_9">
        <div className="section_9_text">
          <h1>Press</h1>
          <p className="headline">
            Learn more about what we are doing and what people are saying!
          </p>
          <div className="news">
            <div className="news-card">
              <img src={ration} />
              <h6>Inside Edition</h6>
              <h3>
                En Route with Volunteers Who Are Helping the Elderly Get...
              </h3>
              <p>
                The co-founder of AllTogether LA is taking Inside Edition to a
                local Los Angeles grocery store so...
              </p>
            </div>
            <div className="news-card">
              <img src={santamonica} />
              <h6>abc7</h6>
              <h3>
                Santa Monica volunteers protect seniors with new grocery...{" "}
              </h3>
              <p>
                The co-founder of AllTogether LA is taking Inside Edition to a
                local Los Angeles grocery store so...
              </p>
            </div>
            <div className="news-card">
              <img src={covid} />
              <h6>Santa Monica Daily Press</h6>
              <h3>Community comes together to help seniors combat COVID-19</h3>
              <p>
                On a random trip to the grocery store Friday night, Lorena
                Camarena encountered what thousands...
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Press
