import React, { Component } from "react"
import Carousel from "react-elastic-carousel"

import ration from "../images/ration.png"
import santamonica from "../images/santamonica.png"
import press from "../images/press.png"
import covid from "../images/covid.png"

class Press extends Component {
  render() {
    return (
      <div className="section_9" id="press">
        <div className="section_9_text">
          <h1>Press</h1>
          <p className="headline">
            Learn more about what we are doing and what people are saying!
          </p>
          <div className="news">
            <Carousel
              breakPoints={[
                { width: 1, itemsToShow: 1 },
                { width: 699, itemsToShow: 2 },
                { width: 1000, itemsToShow: 3 },
              ]}
              itemsToScroll={3}
              className="car"
              showArrows={false}
              itemPadding={[0, 10, 0, 10]}
            >
              <div className="news-card">
                <a
                  href="https://abc7.com/non-profit-covid19-all-together-la-seniors/6199498/"
                  target="_blank"
                >
                  <img src={press} wdith="326" height="213" />
                  <h6>abc7</h6>
                  <h3>
                    Seniors get more help with grocery deliveries as non-profit
                    grows...{" "}
                  </h3>
                  <p>
                    AllTogether LA matches volunteers with seniors for free
                    grocery and medicine deliveries during...
                  </p>
                </a>
              </div>
              <div className="news-card">
                <a
                  href="https://www.insideedition.com/en-route-with-volunteers-who-are-helping-the-elderly-get-groceries-during-the-coronavirus"
                  target="_blank"
                >
                  <img src={ration} />
                  <h6>Inside Edition</h6>
                  <h3>
                    En Route with Volunteers Who Are Helping the Elderly Get...
                  </h3>
                  <p>
                    The co-founder of AllTogether LA is taking Inside Edition to
                    a local Los Angeles grocery store so...
                  </p>
                </a>
              </div>
              <div className="news-card">
                <a
                  href="https://abc7.com/coronavirus-seniors-covid-19-groceries/6045815/"
                  target="_blank"
                >
                  <img src={santamonica} />
                  <h6>abc7</h6>
                  <h3>
                    Santa Monica volunteers protect seniors with new grocery...{" "}
                  </h3>
                  <p>
                    The co-founder of AllTogether LA is taking Inside Edition to
                    a local Los Angeles grocery store so...
                  </p>
                </a>
              </div>
              <div className="news-card">
                <a
                  href="https://www.smdp.com/community-comes-together-to-help-seniors-combat-covid-19/188132"
                  target="_blank"
                >
                  <img src={covid} />
                  <h6>Santa Monica Daily Press</h6>
                  <h3>
                    Community comes together to help seniors combat COVID-19
                  </h3>
                  <p>
                    On a random trip to the grocery store Friday night, Lorena
                    Camarena encountered what thousands...
                  </p>
                </a>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
}

export default Press
