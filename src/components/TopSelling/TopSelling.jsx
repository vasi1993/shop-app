import React from "react";
import "./TopSelling.css";
import Card from "../Card/Card";
import top_selling from "../../assets/topselling";
const TopSelling = () => {
  return (
    <div id="sale" className="top-selling">
      <h1>TOP SELLING</h1>
      <div className="top-selling-cards">
        {top_selling.map((item, idx) => {
          return (
            <Card
              key={idx}
              id={item.id}
              image={item.image}
              title={item.title}
              stars_number={item.stars_number}
              price={item.price}
            />
          );
        })}
      </div>
      <button className="button">View All</button>
    </div>
  );
};

export default TopSelling;
