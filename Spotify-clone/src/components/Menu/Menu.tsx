import React from "react";
import Logo from "../../assets/Logo.png";

interface Props {
  isOpen: boolean;
  onClose: () => void; // Hàm để đóng menu
}

const Menu: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <div className={`menu-container ${isOpen ? "open" : ""}`}>
      <div className="menu-selection">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="menu-items">
          <li>
            <a href="#">Menu Item 1</a>
          </li>
          <li>
            <a href="#">Menu Item 2</a>
          </li>
          <li>
            <a href="#">Menu Item 3</a>
          </li>
        </ul>
      </div>

      <div className="image-section">
        <img src="path/to/image.jpg" alt="Image" />
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Menu;
