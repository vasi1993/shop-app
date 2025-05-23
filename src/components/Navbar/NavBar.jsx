import React, { useContext, useEffect, useRef, useState } from "react";
import "./NavBar.css";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import logo from "../../assets/logo_shop.png";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import OutsideClickHandler from "react-outside-click-handler";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { ShopContext } from "../../Context/ShopContext";
const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const navRef = useRef();
  const location = useLocation();

  const { getTotalCartAmount, navigate, search, setSearch } =
    useContext(ShopContext);

  const toggleDropdown = () => {
    setMenu("shop");
    setDropdownOpen(!dropdownOpen);
  };

  const linkNavigation = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const getMenuStyles = (menuOpen) => {
    if (window.innerWidth <= 1100) {
      return { left: menuOpen ? "0" : "-100%" };
    }
    return {};
  };

  useEffect(() => {
    const visiblePaths = ["shop", "women", "men", "kid"];
    const shouldShow = visiblePaths.some((path) =>
      location.pathname.includes(path)
    );
    setVisible(shouldShow);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup!
  }, []);

  return (
    <nav
      ref={navRef}
      className="nav-bar"
      role="navigation"
      aria-label="Main navigation"
    >
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
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                aria-controls="shop-dropdown"
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
                <ul id="shop-dropdown" className="dropdown-menu">
                  <li>
                    <Link
                      to="/women"
                      title="Shop Women's Clothing"
                      onClick={linkNavigation}
                    >
                      <p>Womens</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/men"
                      title="Shop Men's Clothing"
                      onClick={linkNavigation}
                    >
                      <p>Mens</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/kid"
                      title="Shop Kids' Clothing"
                      onClick={linkNavigation}
                    >
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
        {visible ? (
          <div className="nav-right-search">
            <CiSearch className="nav-icon" />
            <input
              id="site-search"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        ) : null}

        <div className="nav-right-cart">
          <Link to="/cart" aria-label="View Cart">
            <BsCart3 className="nav-icon" />
            <div className={getTotalCartAmount() === 0 ? " " : "dot"}></div>
          </Link>
        </div>
        <Link to="/user" aria-label="User profile">
          <CgProfile className="nav-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
