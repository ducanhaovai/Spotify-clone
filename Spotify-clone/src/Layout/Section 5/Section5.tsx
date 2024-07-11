import "../../assets/css/section-5.css";
import "../../assets/css/section-1.css";
import anh3 from "../../assets/img/footer1.png";
import anh2 from "../../assets/img/footer2.png";
import anh1 from "../../assets/img/footer3.png";
import anh4 from "../../assets/img/footer4.png";
import anh5 from "../../assets/img/footer5.png";
import anh6 from "../../assets/img/footer6.png";
import rain from "../../assets/img/RAIN.svg";
import may from "../../assets/img/Group 16.svg";
import left from "../../assets/img/Arrow.png";
import right from "../../assets/img/Arrow2.svg";
import { useState } from "react";

const HorizontalLineSVG = (
  <>
    <p className="now">Now</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="8"
      viewBox="0 0 18 8"
      fill="none"
    >
      <path d="M8.83378 0L17.1226 8H0.544922L8.83378 0Z" fill="white" />
    </svg>
  </>
);
export default function Section5() {
  const month = [
    {
      id: 1,
      month: "JAN",
    },
    {
      id: 2,
      month: "FED",
    },
    {
      id: 3,
      month: "MAR",
    },
    {
      id: 4,
      month: "APR",
    },
    {
      id: 5,
      month: "MAY",
    },
    {
      id: 6,
      month: "JUN",
    },
    {
      id: 7,
      month: "JUL",
    },
    {
      id: 8,
      month: "AUG",
    },
    {
      id: 9,
      month: "SEP",
    },
    {
      id: 10,
      month: "OCT",
    },
    {
      id: 11,
      month: "NOV",
    },
    {
      id: 12,
      month: "DEC",
    },
  ];
  const images = [anh1, anh2, anh3, anh4, anh5, anh6];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="footer-section">
      <div className="weather-card">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <div className="horizontal-line">{HorizontalLineSVG}</div>
        <div className="weather-info">
          {month.map((item) => (
            <div key={item.id} className="card-weather">
              <p className="month">{item.month}</p>
              <p className="degree">Degree</p>
              <p className="rain">27-32</p>
              <img src={rain} />
              <p className="rain">65-80 mm</p>
            </div>
          ))}
        </div>
        <div className="weather-details">
          <div className="padding">
            <p className="nhietdo">24°C</p>
            <img src={may} alt="Weather Icon" />
            <div className="weather-data">
              <p>19/3</p>
            </div>
          </div>
        </div>
        <div className="button-group">
          <button className="nav-button-left" onClick={prevImage}>
            <img src={left} />
          </button>
          <button className="nav-button-right" onClick={nextImage}>
            <img src={right} />
          </button>
        </div>
      </div>
    </div>
  );
}
