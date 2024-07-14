import { useEffect, useState } from "react";
import "../../assets/css/section-1.css";
import Logo from "../../assets/Logo.png";
import Booking from "../../components/Booking";
import CTA from "../../components/CTA";
import Menu from "../../components/Menu";

// Import các ảnh bạn muốn sử dụng cho slideshow
import Anh1 from "../../assets/img/MAP.png";
import Anh2 from "../../assets/img/MAP2.png";
import Anh3 from "../../assets/img/MAP3.png";

export default function Section1() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const images = [Anh1, Anh2, Anh3];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section1Element = document.querySelector(
        ".section1"
      ) as HTMLElement;
      if (section1Element) {
        const section1Height = section1Element.offsetHeight;
        const scrollPosition = window.scrollY;
        if (scrollPosition >= section1Height) {
          setMenuOpen(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); // Thời gian khớp với transition duration trong CSS
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <div className="homepageimg relative w-full h-788px max-h-[788px] max-w-100rem section1">
        <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <div className="flex py-6 px-20 justify-between items-center header-nav">
          <img src={Logo} alt="xe" className=" h-12 z-10" />
          <div
            className="flex pt-2 pr-4 pb-2 pl-2 justify-end gap-2 rounded-3xl z-10 button-menu"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              className="w-8 h-8"
            >
              <path
                opacity="0.9"
                d="M23.375 10.7812H9.625C9.06125 10.7812 8.59375 10.4412 8.59375 10.0312C8.59375 9.62125 9.06125 9.28125 9.625 9.28125H23.375C23.9388 9.28125 24.4062 9.62125 24.4062 10.0312C24.4062 10.4412 23.9388 10.7812 23.375 10.7812Z"
                fill="white"
              />
              <path
                opacity="0.9"
                d="M23.375 16.9688H9.625C9.06125 16.9688 8.59375 16.6287 8.59375 16.2188C8.59375 15.8088 9.06125 15.4688 9.625 15.4688H23.375C23.9388 15.4688 24.4062 15.8088 24.4062 16.2188C24.4062 16.6287 23.9388 16.9688 23.375 16.9688Z"
                fill="white"
              />
              <path
                opacity="0.9"
                d="M23.375 23.1562H9.625C9.06125 23.1562 8.59375 22.8162 8.59375 22.4062C8.59375 21.9963 9.06125 21.6562 9.625 21.6562H23.375C23.9388 21.6562 24.4062 21.9963 24.4062 22.4062C24.4062 22.8162 23.9388 23.1562 23.375 23.1562Z"
                fill="white"
              />
            </svg>
            <h6 className="text-white text-center font-trip-sans font-bold text-lg leading-relaxed  menu-hambuger w-14 h-6  ">
              MENU
            </h6>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-8 z-10 booking-home">
          <Booking />
        </div>
        <div className="bg-filter"></div>
        <div className="bg-image">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slideshow ${index}`}
              className={index === currentImageIndex && fade ? "active" : ""}
              style={{
                display: index === currentImageIndex ? "block" : "none",
              }}
            />
          ))}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="inline-flex flex-col items-center gap-3 ml-16">
              <p className="z-20 text-map ">GET READY</p>
              <p className="text-change block z-10">
                DISCOVER
                <br />
                <span className="inline-block whitespace-nowrap">
                  HA GIANG LOOP
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-60 right-20 pb-8 pr-8 z-10">
          <CTA />
        </div>
        <p className="absolute text-left-homepage left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 pb-8 z-10 title-brand">
          Hong Hao Travel
        </p>
      </div>
    </>
  );
}
