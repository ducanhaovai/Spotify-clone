import React from "react";
import "../../assets/css/section-2.css";
import Logo from "../../assets/img/GroupH.png";
import CircleItem from "../../components/circle-border/CircleItem";
import ctadown from "../../assets/img/cta-down.png";
import tick from "../../assets/img/tick.png";
import nui from "../../assets/img/maynui.png";
import bea from "../../assets/img/beautiful.png";
import nui2 from "../../assets/img/anhnui2.png";

import { useInView } from "react-intersection-observer";
import Lazyload from "../../features/lazyload";

const Section2: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="section-container">
      <div className="background-about relative">
        <div className="bg-filter-about"></div>
        <div className="about-content z-10">
          <Lazyload src={Logo} className="w-28 h-28 logo-about" alt="Logo" />
          <h2 className="max-w-[860px] intro-content">
            Hong Hao Travel is a travel company in Ha Giang, we specialize in
            organizing unforgettable tours to explore Ha Giang loop but still
            focus on the pristine nature of nature.
          </h2>
          <div className="image-container">
            <div className="Personalization-1">
              <CircleItem text="Personalization" />
              <CircleItem text="Personalization" />
              <CircleItem text="Personalization" />
            </div>

            <div className="Personalization-2">
              <CircleItem text="Personalization" />
              <CircleItem text="Personalization" />
            </div>
          </div>
        </div>
      </div>
      <div className="background-detail">
        <div className="bg-filter-about"></div>
        <div className="header-detail z-10">
          <div className="center-content">
            <div className="text-detail">EXPLORE YOUR JOURNEY WITH US</div>
            <Lazyload src={ctadown} className="cta-down" alt="CTA Down" />
          </div>
        </div>
        <div className="content-section">
          <div className="text-section z-10">
            <div className="title-start">
              <p className="start-with">Start with</p>
              <h2 className="title">HONG HAO MOTORBIKE TOUR</h2>
            </div>
            <div className="title-detail">
              <p className="content-detail">
                Experience the raw beauty of Hà Giang with our immersive travel
                adventures. From rugged mountain landscapes to vibrant ethnic
                cultures, Hà Giang offers a truly unique and authentic
                experience. Explore remote villages.
              </p>
              <div className="tick-detail">
                <div className="USP">
                  <Lazyload src={tick} alt="Tick Icon" className="tick-icon" />
                  <p>Tours accommodate a maximum of 10 guests</p>
                </div>
                <div className="USP">
                  <Lazyload src={tick} alt="Tick Icon" className="tick-icon" />
                  <p>Flexible cancellation policy</p>
                </div>
                <div className="USP">
                  <Lazyload src={tick} alt="Tick Icon" className="tick-icon" />
                  <p>Book now, pay later</p>
                </div>
                <div className="USP">
                  <Lazyload src={tick} alt="Tick Icon" className="tick-icon" />
                  <p>Fluent English-speaking guides</p>
                </div>
                <div className="USP">
                  <Lazyload src={tick} alt="Tick Icon" className="tick-icon" />
                  <p>Creating job opportunities for the Vietnamese community</p>
                </div>
              </div>
            </div>
            <div className="button-detail">
              <button className="button-detail1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person button-person1"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                BUTTON
              </button>
              <button className="button-detail2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person button-person2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                BUTTON
              </button>
            </div>
          </div>
          <div ref={ref} className={`image-section ${inView ? "active" : ""}`}>
            <Lazyload src={nui} alt="Journey Image" className="z-10" />
          </div>
        </div>
        <div className="content-video">
          <div className="title-video z-20 relative">
            <p className="welcome ">WELCOME TO</p>
            <h2 className="naturally ">HA GIANG NATURALLY</h2>
            <Lazyload
              src={bea}
              alt="Beautiful Image"
              className="beautiful absolute "
            />
          </div>
          <Lazyload src={nui2} alt="Nui Detail" className="video-detail z-10" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
