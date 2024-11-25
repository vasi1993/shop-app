import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import "./index.css";
import NavBar from "./components/Navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import User from "./pages/User/User";
import Womens from "./pages/Womens/Womens";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
