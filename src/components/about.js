import React, { Component } from "react"
import Lorena from "../images/Lorena.png"
import Anthony from "../images/Anthony.png"
import Ben from "../images/Ben.png"
import Eric from "../images/Eric.png"
import Mitch from "../images/Mitch.png"
import Kayla from "../images/Kayla.png"
import Nisha from "../images/Nisah.png"
import Priya from "../images/Priya.png"
import Jayen from "../images/Jayen.png"

class About extends Component {
  render() {
    return (
      <div className="section_7">
        <h2>About Us</h2>
        <p>
          We’re a group of professionals across the Entertainment, Health,{" "}
          <br />
          Legal, Social Services, and Tech Sectors.
        </p>
        <div className="team">
          <div className="team_card">
            <img src={Lorena} alt="Lorena" />
            <h4>Lorena</h4>
            <p>Santa Monica</p>
          </div>
          <div className="team_card">
            <img src={Anthony} alt="Anthony" />
            <h4>Anthony</h4>
            <p>Santa Monica</p>
          </div>
          <div className="team_card">
            <img src={Kayla} alt="Kayla" />
            <h4>Kayla</h4>
            <p>Santa Monica</p>
          </div>
          <div className="team_card">
            <img src={Ben} alt="Ben" />
            <h4>Ben</h4>
            <p>Santa Monica</p>
          </div>
          <div className="team_card">
            <img src={Priya} alt="Ben" />
            <h4>Priya</h4>
            <p>Manhattan Beach</p>
          </div>
          <div className="team_card">
            <img src={Eric} alt="Eric" />
            <h4>Eric</h4>
            <p>Venice</p>
          </div>
          <div className="team_card">
            <img src={Mitch} alt="Mitch" />
            <h4>Mitch</h4>
            <p>Bentwood</p>
          </div>
          <div className="team_card">
            <img src={Jayen} alt="Ben" />
            <h4>Jayen</h4>
            <p>Houston, TX</p>
          </div>
          <div className="team_card">
            <img src={Nisha} alt="Nisha" />
            <h4>Nisha</h4>
            <p>Manhattan Beach</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
