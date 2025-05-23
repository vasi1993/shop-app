import React from "react";
import "./TopSelling.css";
import Card from "../Card/Card";
import top_selling from "../../assets/topselling";
import { Link } from "react-router-dom";
const TopSelling = () => {
  return (
    <section
      id="sale"
      className="top-selling"
      aria-labelledby="top-selling-heading"
    >
      <h1 id="top-selling-heading">TOP SELLING</h1>
      <div className="top-selling-cards">
        {top_selling.map((item, idx) => {
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
        <button className="button" aria-label="View all top selling products">
          View All
        </button>
      </Link>
    </section>
  );
};

export default TopSelling;
