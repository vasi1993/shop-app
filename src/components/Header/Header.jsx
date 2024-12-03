import React from "react";
import "./Header.css";
import CountUp from "react-countup";
import headerImg from "../../assets/header_img.jpg";
const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header-left">
        <div className="header-title">
          <h1>
            FIND CLOTHEST <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
        </div>
        <div className="header-desc">
          <p>
            Browse throught our diverse range of meticulosly crafted garments,
            designed <br /> to bring out your individuality and cater to your
            sense of style
          </p>
        </div>
        <div className="header-button">
          <button>Shop Now</button>
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
          <img src={headerImg} alt="Header-image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
