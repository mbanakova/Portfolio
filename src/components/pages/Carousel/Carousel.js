import React from "react";
import Slider from "react-slick";
import { Data } from "./Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import "../../Button.scss";

function Carousel() {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <section className="projects">
      <div className="projects__container container">
        <h2 className="projects__title">Projects</h2>
        <Slider {...settings}>
          {Data.map(slide => {
            return (
              <div className="slider__inner" key={slide.link}>
                <div className="slider__card card">
                  <div className="card__image">
                    <img src={slide.img} alt={slide.name} />
                  </div>
                  <div className="card__description">
                    <h3 className="card__header">{slide.name}</h3>
                    <p className="card__text">{slide.text}</p>
                    <a
                      className="card__link"
                      href={slide.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit the website
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Carousel;
