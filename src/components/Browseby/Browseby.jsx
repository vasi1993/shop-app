import React from "react";
import "./Browseby.css";

const Browseby = () => {
  return (
    <section className="browse-by" id="brands" aria-labelledby="browse-heading">
      <div className="browse-container">
        <div className="browse-title">
          <h1 id="browse-heading">BROWSE BY DRESS STYLE</h1>
        </div>
        <div className="browse-category" role="list">
          <div className="row1">
            <article
              className="browse-casual"
              role="listitem"
              tabIndex="0"
              aria-label="Casual style"
            >
              <p>Casual</p>
            </article>
            <article
              className="browse-formal"
              role="listitem"
              tabIndex="0"
              aria-label="Formal style"
            >
              <p>Formal</p>
            </article>
          </div>
          <div className="row2">
            <article
              className="browse-party "
              role="listitem"
              tabIndex="0"
              aria-label="Party style"
            >
              <p>Party</p>
            </article>
            <article
              className="browse-gym"
              role="listitem"
              tabIndex="0"
              aria-label="Gym style"
            >
              <p>Gym</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browseby;
