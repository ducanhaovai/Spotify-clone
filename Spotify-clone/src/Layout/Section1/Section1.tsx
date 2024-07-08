
import Header from "../../components/Header";
import "../../assets/css/section-1.css";
import Booking from "../../components/Booking";
import Anh from "../../assets/img/MAP.png";
import CTA from "../../components/CTA";

export default function Section1() {
  return (
    <>
      <div className="homepageimg relative w-full h-788px max-h-[788px] max-w-100rem section1">
        <Header />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-8 z-10">
          <Booking />
        </div>
        <div className="bg-filter"></div>
        <div className="bg-image">
          <img src={Anh} alt="" />
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
        <p className="absolute text-left-homepage left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 pb-8 z-10">
          Hong Hao Travel
        </p>
      </div>
    </>
  );
}
