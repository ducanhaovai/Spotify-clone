import "../../assets/css/section-1.css";
import Whatsapp from "../../assets/img/icon _whatsapp_.png";
import cta_up from "../../assets/img/CTA-up.png";
export default function CTA() {
  return (
    <div className="cta_layout">
      <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center z-10">
        <p className="text-cta">BOOK NOW</p>
      </div>
      <div className="whatsapp-icon-container z-10">
        <img src={Whatsapp} />
        <div className="icon-whatsapp-border"></div>
        <div className="icon-whatsapp-border2"></div>
      </div>

      <div className="w-14 h-14 z-10">
        <img src={cta_up} />
      </div>
    </div>
  );
}
