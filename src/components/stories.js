import React, { Component } from "react"
import Kayla from "../images/Kayla.png"
import instagram from "../images/instagram.png"
import oldlady from "../images/1.png"
import food from "../images/2.png"
import family from "../images/3.png"
import letter from "../images/4.png"
import team from "../images/5.png"

class Stories extends Component {
  render() {
    return (
      <div className="section_8">
        <h1>Stories</h1>
        <p>
          Hear directly from the community members we’ve been able to help!{" "}
        </p>
        <div className="reviews">
          <div className="reviews_card">
            <img src={Kayla} />
            <h3>Kayla</h3>
            <h5>Santa Monica</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud{" "}
            </p>
          </div>
          <div className="reviews_card">
            <img src={Kayla} />
            <h3>Kayla</h3>
            <h5>Santa Monica</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud{" "}
            </p>
          </div>
          <div className="reviews_card">
            <img src={Kayla} />
            <h3>Kayla</h3>
            <h5>Santa Monica</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud{" "}
            </p>
          </div>
        </div>
        <div className="update">
          <img src={instagram} width="20" />{" "}
          <span
            style={{
              fontFamily: "Nunito",
              fontWeight: "300",
              fontSize: "18px",
              lineHeight: "30px",
              letterSpacing: "0.03em",
              color: "#FFFFFF",
            }}
          >
            Our Latest Updates on Instagram
          </span>
          <div className="posts">
            <div className="post_image">
              <img src={oldlady} />
            </div>
            <div className="post_image">
              <img src={food} />
            </div>
            <div className="post_image">
              <img src={family} />
            </div>
            <div className="post_image">
              {" "}
              <img src={letter} />
            </div>
            <div className="post_image">
              {" "}
              <img src={team} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stories
