import React from "react"
import logo from "../images/logo.png"

const Mission = () => {
  return (
    <div>
      <div className="section_2">
        <img src={logo} width="179px" height="179px" />
        <h2>Our Mission</h2>
        <p>
          We aim to connect neighbors in need with neighbors who can help. Our
          mission is simple, but important: Protect the well-being of our
          vulnerable neighbors, particularly seniors. Through our work during
          COVID-19, we hope to facilitate long-lasting relationships and build a
          greater sense of community.
        </p>
        <iframe
          width="100%"
          height="480"
          title="corona"
          src="https://www.youtube.com/embed/EsqdBz-_noQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Mission
