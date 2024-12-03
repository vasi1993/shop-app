import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import logo from "../../assets/logo_shop.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import OutsideClickHandler from "react-outside-click-handler";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setMenu("shop");
    setDropdownOpen(!dropdownOpen);
  };

  const linkNavigation = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 1000) {
      return { left: !menuOpen && "-1000%" };
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div ref={navRef} className="nav-bar">
      <OutsideClickHandler
        onOutsideClick={() => {
          setMenuOpen(false);
          setDropdownOpen(false);
        }}
      >
        <div className="nav-left">
          {menuOpen ? (
            <div onClick={() => setMenuOpen((prev) => !prev)}>
              <AiOutlineMenuFold size={30} className="nav-mobil-icon" />
            </div>
          ) : (
            <div onClick={() => setMenuOpen((prev) => !prev)}>
              <AiOutlineMenuUnfold size={30} className="nav-mobil-icon" />
            </div>
          )}

          <img
            src={logo}
            alt="Logo"
            width={90}
            className="nav-bar-icon"
            onClick={() => navigate("/")}
          />

          <ul className="nav-link mobile-menu" style={getMenuStyles(menuOpen)}>
            <li className="dropdown" onClick={toggleDropdown}>
              <button
                href="#shop"
                className={
                  dropdownOpen && menu === "shop"
                    ? " toogle-dark active"
                    : "dropdown-toggle"
                }
              >
                Shop
                {dropdownOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </button>

              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/womens" onClick={linkNavigation}>
                      <p>Womens</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/mens" onClick={linkNavigation}>
                      <p>Mens</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/kids" onClick={linkNavigation}>
                      <p>Kids</p>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              onClick={() => setMenu("new")}
              className={menu === "new" ? "active" : ""}
            >
              <a href="#new" onClick={linkNavigation}>
                New Arrivals
              </a>
            </li>

            <li
              onClick={() => setMenu("sale")}
              className={menu === "sale" ? "active" : ""}
            >
              <a href="#sale" onClick={linkNavigation}>
                On Sale
              </a>
            </li>
            <li
              onClick={() => setMenu("brands")}
              className={menu === "brands" ? "active" : ""}
            >
              {" "}
              <a href="#brands" onClick={linkNavigation}>
                {" "}
                Brands
              </a>
            </li>
          </ul>
        </div>
      </OutsideClickHandler>
      <div className="nav-right">
        <div className="nav-right-search">
          <CiSearch className="nav-icon" />
          <input type="text" placeholder="Search for product..." />
        </div>
        <Link to="/cart">
          <BsCart3 className="nav-icon" />
        </Link>
        <Link to="/user">
          <CgProfile className="nav-icon" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
