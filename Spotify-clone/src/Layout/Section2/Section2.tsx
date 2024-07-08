import React, { useRef, useEffect, useState } from "react";
import "../../assets/css/section-2.css";
import Logo from "../../assets/img/GroupH.png";
import CircleItem from "../../components/circle-border/CircleItem";
import ctadown from "../../assets/img/cta-down.png";
import tick from "../../assets/img/tick.png";
import nui from "../../assets/img/maynui.png";
import bea from "../../assets/img/beautiful.png";
import nui2 from "../../assets/img/anhnui2.png";

const Section2: React.FC = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.intersectionRatio > 0.5);
      },
      {
        threshold: 0.5, // Khi scroll tới một nửa của Section 2 thì Section 1 sẽ bị che mất
      }
    );

    if (section2Ref.current) {
      observer.observe(section2Ref.current);
    }

    return () => {
      if (section2Ref.current) {
        observer.unobserve(section2Ref.current);
      }
    };
  }, []);

  return (
    <div className="section-container">
      <div className="background-about relative" ref={section1Ref}>
        <div className="bg-filter-about"></div>
        <div className="about-content z-10">
          <img src={Logo} className="w-28 h-28 logo-about" alt="Logo" />
          <h2 className="max-w-[860px]">
            Hong Hao Travel is a travel company in Ha Giang, we specialize in
            organizing unforgettable tours to explore Ha Giang loop but still
            focus on the pristine nature of nature.
          </h2>
          <div className="image-container">
            <CircleItem text="Personalization" />
            <CircleItem text="Personalization" />
            <CircleItem text="Personalization" />
            <CircleItem text="Personalization" />
            <CircleItem text="Personalization" />
          </div>
        </div>
      </div>
      <div className="background-detail" ref={section2Ref}>
        <div className="bg-filter-about"></div>
        <div className="header-detail z-10">
          <div className="center-content">
            <div className="text-detail">EXPLORE YOUR JOURNEY WITH US</div>
            <img src={ctadown} className="cta-down" alt="CTA Down" />
          </div>
        </div>
        <div className="content-section">
          <div className="text-section z-10">
            <h2 className="title">HONG HAO MOTORBIKE TOUR</h2>
            <div className="title-detail">
              <p className="content-detail">
                Experience the raw beauty of Hà Giang with our immersive travel
                adventures. From rugged mountain landscapes to vibrant ethnic
                cultures, Hà Giang offers a truly unique and authentic
                experience. Explore remote villages.
              </p>
              <div className="tick-detail">
                <div className="USP">
                  <img src={tick} alt="Tick Icon" />
                  <p>Tours accommodate a maximum of 10 guests</p>
                </div>
                <div className="USP">
                  <img src={tick} alt="Tick Icon" />
                  <p>Flexible cancellation policy</p>
                </div>
                <div className="USP">
                  <img src={tick} alt="Tick Icon" />
                  <p>Book now, pay later</p>
                </div>
                <div className="USP">
                  <img src={tick} alt="Tick Icon" />
                  <p>Fluent English-speaking guides</p>
                </div>
                <div className="USP">
                  <img src={tick} alt="Tick Icon" />
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
                  className="bi bi-person"
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
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                BUTTON
              </button>
            </div>
          </div>
          <div
            className={`image-section z-10 ${isIntersecting ? "active" : ""}`}
          >
            <img src={nui} alt="Journey Image" />
          </div>
        </div>
        <div className="content-video">
          <div className="title-video z-10 relative">
            <p className="welcome">WELCOME TO</p>
            <h2 className="naturally">HA GIANG NATURALLY</h2>
            <img className="beautiful absolute top-1/2" src={bea} />
          </div>
          <img src={nui2} className="video-detail z-10" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
