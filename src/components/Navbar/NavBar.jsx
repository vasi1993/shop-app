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
const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const navigate = useNavigate();

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
            <li
              onClick={() => setMenu("shop")}
              className={menu === "shop" ? "active" : ""}
            >
              <Link
                to="/"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                Shop
              </Link>
            </li>

            <li
              onClick={() => setMenu("new")}
              className={menu === "new" ? "active" : ""}
            >
              <a
                href="#new"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                New Arrivals
              </a>
            </li>

            <li
              onClick={() => setMenu("sale")}
              className={menu === "sale" ? "active" : ""}
            >
              <a
                href="#sale"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                On Sale
              </a>
            </li>
            <li
              onClick={() => setMenu("brands")}
              className={menu === "brands" ? "active" : ""}
            >
              {" "}
              <a
                href="#brands"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
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
