import React from "react";
import "./Footer.css";
import logo from "../../assets/logo_shop_footer.png";
import navIcon1 from "../../assets/nav-icon1.svg";
import navIcon2 from "../../assets/nav-icon2.svg";
import navIcon3 from "../../assets/nav-icon3.svg";
import Newsletter from "../Newsletter/Newsletter";
import visaImg from "../../assets/visa.svg";
import mastercardImg from "../../assets/mastercard.svg";
import appleImg from "../../assets/apple-pay.svg";
import paypalImg from "../../assets/paypal.svg";
import payImg from "../../assets/pay-u.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Newsletter />
      <div className="footer-container">
        <div className="footer-social">
          <div className="footer-logo-img">
            <a href="#home">
              <img src={logo} alt="" />
            </a>
          </div>

          <div className="footer-desc">
            <p>
              We have clothes that suits your style and which you`re proud to
              wear. From women to men.
            </p>
          </div>
          <div className="footer-icons">
            <a
              href="https://linkedln.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Linkedln page"
            >
              <img src={navIcon1} alt="Linedln icon " />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <img src={navIcon2} alt="Facebook icon" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              <img src={navIcon3} alt="Instagram icon" />
            </a>
          </div>
        </div>
        <div className="footer-helps">
          <div className="footer-help">
            <h1>COMPANY</h1>
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Career</p>
          </div>

          <div className="footer-help">
            <h1>HELP</h1>
            <p>Customer Supoort</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>

          <div className="footer-help">
            <h1>FAQ</h1>
            <p>Account</p>
            <p>Mnager Deliveries</p>
            <p>Orders</p>
            <p>Payments</p>
          </div>

          <div className="footer-help">
            <h1>RESOURCES</h1>
            <p>Free eBooks</p>
            <p>Development Tutorial</p>
            <p>How to - Blog</p>
            <p>Youtube Playlist</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <div className="details">
          <p>@vasy, All rights Reserved</p>
        </div>
        <div className="payment" aria-label="Accepted payment methods">
          <img src={visaImg} alt="visa" />
          <img src={mastercardImg} alt="mastercard" />
          <img src={appleImg} alt="apple" />
          <img src={paypalImg} alt="paypal" />
          <img src={payImg} alt="pay" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
