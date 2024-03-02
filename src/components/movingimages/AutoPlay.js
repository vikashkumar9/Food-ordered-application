"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./autoplay.module.css";
function AutoPlay({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Image
            src="/burger.jpg"
            alt="image"
            height={200}
            width={200}
            className={styles.food_img}
          />
        </div>
        <div>
          <Image
            src="/bannerimg3.jpg"
            alt="image"
            height={200}
            width={200}
            className={styles.food_img}
          />
        </div>
        <div>
          <Image
            src="/maggi.webp"
            alt="image"
            height={200}
            width={200}
            className={styles.food_img}
          />
        </div>
        <div>
          <Image
            src="/bannerimg2.jpg"
            alt="image"
            height={200}
            width={200}
            className={styles.food_img}
          />
        </div>
        <div>
          <Image
            src="/bannerimg1.jpg"
            alt="image"
            height={200}
            width={200}
            className={styles.food_img}
          />
        </div>
        <div>
          <Image
            src="/pizza.jpg"
            alt="image"
            height={200}
            width={200}
            className={styles.food_img}
          />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
