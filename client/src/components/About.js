import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <span>
          <h3>About Plant Parent</h3>
          <p>
            Whether you are just beginning your plant parenthood journey, or
            have been raising plants for years, this app is an invaluable tool
            for care.
          </p>
          <ul>
            <b>Upcoming Features:</b>
            <li>
              Plants will be added to the user's account database by name. Users
              will be able to access info about the plant species and care
              instructions including watering, sunlight, and nutrient needs.
              Individual plant needs will be broken down by user's geolocation
              tag and current weather patterns to advise them of when to water
              or fertilize a plant. App will display the amount of days
              remaining until it's time to water or fertilize a plant, e.g
              "Water me in two days", "Water me today!", "Feed me in 10 days."
            </li>
            <li>
              Users will be able name their plant, including taking a "baby
              photo" of their plant to document the growth of their sprout.
            </li>
            <li>
              Moisture sensor integration to give accurate, detailed information
              about water and soil needs.
            </li>
          </ul>
        </span>
      </div>
    );
  }
}

export default About;
