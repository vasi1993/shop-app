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
              <p>Casual</p>
            </div>
            <div className="browse-formal">
              <p>Formal</p>
            </div>
          </div>
          <div className="row2">
            <div className="browse-party">
              <p>Party</p>
            </div>
            <div className="browse-gym">
              <p>Gym</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browseby;
