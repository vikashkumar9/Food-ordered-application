"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./banner.css";
import BannerBtn from "./BannerBtn";

const Banner = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src="/bannerimg1.jpg" className="banner_img w-100" alt="..." />
            <div className="carousel-caption text-center">
              <h5 className="banner_text">
                Slurp up happiness with our delectable noodles
              </h5>
              <BannerBtn />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex justify-content-center align-items-center h-100">
            <img
              src="/bannerimg2.jpg"
              className="banner_img w-100 h-80"
              alt="..."
            />
            <div className="carousel-caption text-center">
              <h5 className="banner_text">
                Start your day with a smile and a waffle.
              </h5>
              <BannerBtn />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src="/bannerimg3.jpg" className="banner_img w-100" alt="..." />
            <div className="carousel-caption text-center">
              <h5 className="banner_text">
                {" "}
                Vibrant salads the perfect duo for a delightful dining
                experience!
              </h5>
              <BannerBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
