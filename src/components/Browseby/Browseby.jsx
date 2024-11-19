import React from "react";
import "./Browseby.css";
import casual_img from "../../assets/causal.jpg";
import formal_img from "../../assets/formal.jpg";
import party_img from "../../assets/party.jpg";
import gym_img from "../../assets/gym.jpg";

const Browseby = () => {
  return (
    <div className="browse-by" id="brands">
      <div className="browse-container">
        <div className="browse-title">
          <h1>BROWSE BY DRESS STYLE</h1>
        </div>
        <div className="browse-category">
          <div className="row1">
            <div className="browse-casual">
              <img
                src={casual_img}
                alt="causal"
                className="browse-category-image"
              />
              <p>Casual</p>
            </div>
            <div className="browse-formal">
              <img
                src={formal_img}
                alt="formal"
                className="browse-category-image"
              />
              <p>Formal</p>
            </div>
          </div>
          <div className="row2">
            <div className="browse-party">
              <img
                src={party_img}
                alt="party"
                className="browse-category-image"
              />
              <p>Party</p>
            </div>
            <div className="browse-gym">
              <img src={gym_img} alt="gym" className="browse-category-image" />
              <p>Gym</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browseby;
