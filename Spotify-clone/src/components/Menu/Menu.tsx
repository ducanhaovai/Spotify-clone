import { useEffect } from "react";
import "../../assets/css/section-1.css";
import Logo from "../../assets/Logo.png";
import bg2 from "../../assets/img/bg4.png";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const Menu = ({ isOpen, onClose }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className={`menu ${isOpen ? "open" : ""}`}>
      <div className="menu-left ">
        <div className="bg-filter-menu"></div>
        <div className="menu-content z-10">
          <div className="menu-logo">
            <img src={Logo} alt="Logo" className="h-12 z-10" />
          </div>
          <div className="menu-items">
            <ul className="menu-list">
              <li className="menu-item">Home</li>
              <div className="menu-divider"></div>
              <li className="menu-item">About</li>
              <div className="menu-divider"></div>
              <li className="menu-item">Tours</li>
              <div className="menu-divider"></div>
              <li className="menu-item">Activity</li>
              <div className="menu-divider"></div>
              <li className="menu-item">Destination</li>
              <div className="menu-divider"></div>
              <li className="menu-item">Blog</li>
              <div className="menu-divider"></div>
              <li className="menu-item">FAQ</li>
              <div className="menu-divider"></div>
              <li className="menu-item">Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="menu-right">
        <div className="menu-close button-close " onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
              stroke="#A9A9A9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Menu;
