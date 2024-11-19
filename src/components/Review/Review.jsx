import React from "react";
import "./Review.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../assets/common";
import data from "../../assets/slider";
import { FaStar } from "react-icons/fa6";
const Review = () => {
  return (
    <div className="review">
      <div className="review-container">
        <div className="review-title">
          <h1>OUR HAPPY CUSTOMERS</h1>
        </div>
        <div className="review-cards">
          <Swiper {...sliderSettings}>
            <SliderButton />
            {data.map((card, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="review-card">
                    <div className="review-stars">
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                    </div>
                    <div className="card-name">{card.name}</div>
                    <div className="card-desc">{card.review}</div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="slider-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
