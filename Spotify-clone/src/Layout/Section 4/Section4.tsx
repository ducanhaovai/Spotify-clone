import "../../assets/css/section-4.css";
import "../../assets/css/section-1.css";
import anh from "../../assets/img/ourgallery.png";
import logo from "../../assets/img/logoxoay.png";
import silde1 from "../../assets/img/silde1.png";
import silde2 from "../../assets/img/silde2.png";
import silde3 from "../../assets/img/silde3.png";
import silde4 from "../../assets/img/silde4.png";
import silde5 from "../../assets/img/sidle5.png";
import silde6 from "../../assets/img/silde6.png";

export default function Section4() {
  return (
    <>
      <div className="section-gladdest">
        <div className="header-content">
          <img src={anh} className="max-w-[76px] max-h-[513px] our-gladeest" />
          <div className="gallery-header">
            <div className="w-full">
              <h2>THE GLADDEST MOMENT</h2>
            </div>
            <img
              src={logo}
              className=" ml-9 mr-16 h-24 w-24 max-w-[105px] max-h-[105px]"
            />
            <p className="hesitate">
              Don't hesitate to pick up your backpack and go. When you reach
              your destination and see all the beautiful things in sight, you
              will know that your efforts were worth it.
            </p>
          </div>
          <div className="slides">
            <div className="slide-1">
              {[silde1, silde2, silde3, silde4, silde5, silde6].map(
                (img, index) => (
                  <img key={index} src={img} alt={`Slide ${index + 1}`} />
                )
              )}
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="slide-2">
            {[silde5, silde6, silde1, silde4, silde3, silde2].map(
              (img, index) => (
                <img key={index} src={img} alt={`Slide ${index + 1}`} />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
