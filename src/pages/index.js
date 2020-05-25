import React from "react"
import "../styles/style.css"
import { BsArrowRight } from "react-icons/bs"
import landing from "../images/landing.png"
import operation from "../images/operation.png"
import pay from "../images/pay.png"
import safety from "../images/safety.png"
import Lorena from "../images/Lorena.png"
import Anthony from "../images/Anthony.png"
import Kayla from "../images/Kayla.png"
import Ben from "../images/Ben.png"
import Eric from "../images/Eric.png"
import Mitch from "../images/Mitch.png"
import instagram from "../images/instagram.png"
import oldlady from "../images/1.png"
import food from "../images/2.png"
import family from "../images/3.png"
import letter from "../images/4.png"
import team from "../images/5.png"
import ration from "../images/ration.png"
import santamonica from "../images/santamonica.png"
import covid from "../images/covid.png"
import Footer from "../components/footer"
import Header from "../components/header"
import Hero from "../components/hero"
import Mission from "../components/mission"
import Resources from "../components/resources"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Mission />
      <Resources />

      <div className="section_4">
        <div className="section_4_card">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              lineHeight: "17px",
              letterSpacing: "0.03em",
              paddingBottom: "1rem",
              color: "#61BE4E",
            }}
          >
            CONTACT US
          </p>
          <h2 style={{ paddingBottom: "1rem" }}>How this works</h2>
          <p className="section_4_text">
            We can deliver groceries & meals or even help pick up your daily
            errands!
          </p>
          <p className="step">STEP 1</p>
          <p className="step_text">
            Call our number at{" "}
            <span style={{ color: "#61BE4E" }}>(323) 310-0411</span>
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
          <img src={landing} className="section_4_image_img" />
        </div>
      </div>
      <div className="section_5">
        <div>
          <img src={operation} />
          <h4 style={{ marginTop: "30px" }}>Where do we operate?</h4>
          <p>
            We are currently serving all our neighbors in Los Angeles County!
          </p>
        </div>
        <div>
          <img src={pay} />
          <h4>How can I pay for the deliveries?</h4>
          <p>
            Our volunteers will make purchases on your behalf. You can pay them
            back with cash, check, or electronically via Paypal or Venmo.{" "}
          </p>
        </div>
        <div>
          <img src={safety} />
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
      <div className="section_6">
        <div
          style={{
            background: `url(../images/man.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h3>Get help</h3>
          <p>
            Tell us what you need and we’ll connect with you a
            background-checked neighbor within 24 hours.
          </p>
          <div>
            Call us now <BsArrowRight className="arrow" />
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
      <div className="section_7">
        <h2>About Us</h2>
        <p>
          We’re a group of professionals across the Entertainment, Health,
          Legal, Social Services, and Tech Sectors.
        </p>
        <div className="team">
          <div className="team_card">
            <img src={Lorena} />
            <h4>Lorena</h4>
            <p>Santa Monica</p>
          </div>
          <div className="team_card">
            <img src={Anthony} />
            <h4>Anthony</h4>
            <p>Santa Monica</p>
          </div>
          <div className="team_card">
            <img src={Kayla} />
            <h4>Kayla</h4>
            <p>Santa Monica</p>
          </div>
          <div className="team_card">
            <img src={Ben} />
            <h4>Ben</h4>
            <p>Santa Monica</p>
          </div>
          <div className="team_card">
            <img src={Eric} />
            <h4>Eric</h4>
            <p>Venice</p>
          </div>
          <div className="team_card">
            <img src={Mitch} />
            <h4>Mitch</h4>
            <p>Bentwood</p>
          </div>
        </div>
      </div>
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
      <Footer />
    </div>
  )
}
