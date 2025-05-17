import React from "react";
import "./Newsletter.css";
import { TfiEmail } from "react-icons/tfi";
const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="newsletter" aria-labelledby="newsletter-heading">
      <div className="newsletter-container">
        <div className="newsletter-title">
          <h1 id="newsletter-heading">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="newsletter-contact">
          <div className="newsletter-contact-email">
            <TfiEmail
              className="newsletter-icon"
              aria-hidden="true"
              focusable="false"
            />
            <input
              type="email"
              placeholder="Enter your email adress"
              aria-label="Email address"
              required
              id="newsletter-email"
              name="email"
            />
          </div>
          <div className="newsletter-button">
            <button type="submit">
              <p>Subscribe to Newsletter</p>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
