import React from "react";
import "./NewArrivals.css";

import new_arrivals from "../../assets/newarrivals";
import Card from "../Card/Card";
const NewArrivals = () => {
  return (
    <div className="new-arrivals" id="new">
      <h1>NEW ARRIVALS</h1>
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
      <button className="button">View All</button>
      <hr />
    </div>
  );
};

export default NewArrivals;
