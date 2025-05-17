import React from "react";
import "./Header.css";
import CountUp from "react-countup";
import headerImg from "../../assets/header_img.jpg";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-left">
        <div className="header-title">
          <h1>
            FIND CLOTHES <br /> THAT MATCH <br /> YOUR STYLE
          </h1>
        </div>
        <div className="header-desc">
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed <br /> to bring out your individuality and cater to your
            sense of style
          </p>
        </div>
        <div className="header-button">
          <Link to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
        <div className="header-stats">
          <div className="header-stat">
            <span>
              <CountUp start={180} end={200} duration={9} />
              <span>+</span>
            </span>
            <span>International Brands</span>
          </div>
          <div className="header-stat">
            <span>
              <CountUp start={1990} end={2000} duration={9} />
              <span>+</span>
            </span>
            <span>Quality Products</span>
          </div>

          <div className="header-stat">
            <span>
              <CountUp start={29900} end={30000} duration={9} />
              <span>+</span>
            </span>
            <span>Happy Customers</span>
          </div>
        </div>
      </div>

      <div className="header-right">
        <div className="header-right-image">
          <img src={headerImg} alt="Fashionable clothing model" />
        </div>
      </div>
    </header>
  );
};

export default Header;
