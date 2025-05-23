import React from "react";
import "./NewArrivals.css";

import new_arrivals from "../../assets/newarrivals";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
const NewArrivals = () => {
  return (
    <section
      className="new-arrivals"
      id="new"
      aria-labelledby="new-arrivals-heading"
    >
      <h1 id="new-arrivals-heading">NEW ARRIVALS</h1>
      <div className="new-arrivals-cards">
        {new_arrivals.map((item, idx) => {
          return (
            <Card
              key={idx}
              id={item.id}
              image={item.image}
              name={item.name}
              // stars_number={item.stars_number}
              new_price={item.new_price}
            />
          );
        })}
      </div>
      <Link to="/shop">
        <button className="button" aria-label="View all new arrival products">
          View All
        </button>
      </Link>

      <hr />
    </section>
  );
};

export default NewArrivals;
