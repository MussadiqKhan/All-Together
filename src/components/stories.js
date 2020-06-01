import React, { Component } from "react"
import Kayla from "../images/Kayla.png"
import instagram from "../images/instagram.png"

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
          <a href="https://www.instagram.com/alltogetherla/">
            {" "}
            <img
              src={instagram}
              width="30"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <span className="insta-post"> Our Latest Updates on Instagram</span>
          <div className="posts">
            <div className="post_image">
              <iframe
                src="https://www.instagram.com/p/B_0X8JKg9Qp/embed"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                allowtransparency
                width="250"
                height="320"
              ></iframe>{" "}
            </div>
            <div className="post_image">
              <iframe
                src="https://www.instagram.com/p/B_0czeNgXqi/embed"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                allowtransparency
                width="250"
                height="320"
              ></iframe>{" "}
            </div>
            <div className="post_image">
              <iframe
                src="https://www.instagram.com/p/B_030wmAK3I/embed"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                allowtransparency
                width="250"
                height="320"
              ></iframe>{" "}
            </div>
            <div className="post_image">
              {" "}
              <iframe
                src="https://www.instagram.com/p/B_0dZECAOXB/embed"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                allowtransparency
                width="250"
                height="320"
              ></iframe>{" "}
            </div>
            <div className="post_image">
              {" "}
              <iframe
                src="https://www.instagram.com/p/B_3ZlD9AHtz/embed"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                allowtransparency
                width="250"
                height="320"
              ></iframe>{" "}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stories
