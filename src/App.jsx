import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import "./index.css";
import NavBar from "./components/Navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import User from "./pages/User/User";
import Footer from "./components/Footer/Footer";
import ShopCategory from "./pages/ShopCategory/ShopCategory";
import Product from "./pages/Product/Product";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="app">
      <nav aria-label="Main navigation">
        <NavBar />
      </nav>

      <main id="main-content" tabIndex="-1">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopCategory category="" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/kid" element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
