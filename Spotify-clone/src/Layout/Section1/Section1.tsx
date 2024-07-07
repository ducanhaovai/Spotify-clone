import React from "react";
import Header from "../../components/Header";
import "../../assets/css/section-1.css";
import Booking from "../../components/Booking";

export default function Section1() {
  return (
    <>
      <div className="homepageimg relative w-full h-788px">
        <Header></Header>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-8">
          <Booking />
        </div>
        <p className="absolute text-left-homepage left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 pb-8">
          Hong Hao Travel
        </p>
      </div>
      {/*<div className="absolute z-10 w-full h-full object-cover bg-homepage"></div>*/}
    </>
  );
}
