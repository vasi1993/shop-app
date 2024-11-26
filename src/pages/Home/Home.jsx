import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Brands from "../../components/Brands/Brands";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import TopSelling from "../../components/TopSelling/TopSelling";
import Browseby from "../../components/Browseby/Browseby";
import Review from "../../components/Review/Review";

const Home = () => {
  return (
    <section>
      <div className="home-container">
        <Header />
        <Brands />
        <NewArrivals />
        <TopSelling />
        <Browseby />
        <Review />
      </div>
    </section>
  );
};

export default Home;
