import React from "react";
import "./Review.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../assets/common";
import data from "../../assets/slider";
import { FaStar } from "react-icons/fa6";
const Review = () => {
  return (
    <section className="review" aria-labelledby="review-heading">
      <div className="review-container">
        <div className="review-title">
          <h1 id="review-heading">OUR HAPPY CUSTOMERS</h1>
        </div>
        <div
          className="review-cards"
          role="region"
          aria-label="Customer testimonials carousel"
        >
          <Swiper {...sliderSettings}>
            <SliderButton />
            {data.map((card, i) => {
              return (
                <SwiperSlide
                  key={i}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Testimonial from ${card.name}`}
                >
                  <article className="review-card">
                    <div className="review-stars" aria-label="5 star rating">
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                    </div>
                    <div className="card-name">{card.name}</div>
                    <div className="card-desc">{card.review}</div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Review;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="slider-buttons" aria-label="Slide navigation controls">
      <button
        onClick={() => swiper.slidePrev()}
        aria-label="Previous testimonial"
      >
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} aria-label="Next testimonial">
        &gt;
      </button>
    </div>
  );
};
