import React from "react";
import "./Newsletter.css";
import { TfiEmail } from "react-icons/tfi";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-title">
          <h1>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h1>
        </div>
        <div className="newsletter-contact">
          <div className="newsletter-contact-email">
            <TfiEmail className="newsletter-icon" />
            <input type="email" placeholder="Enter your email adress" />
          </div>
          <div className="newsletter-button">
            <button>
              <p>Subscribe to Newsletter</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
