import React from "react";
import Logo from "../../assets/Logo.png";
import "../../assets/css/section-1.css";

export default function Header() {
  return (
    <div className="flex py-6 px-20 justify-between items-center ">
      <img src={Logo} alt="xe" className=" h-12" />
      <div className="flex pt-2 pr-4 pb-2 pl-2 justify-end gap-2 rounded-lg bg-orange-500">
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
        <h6 className="text-white text-center font-trip-sans font-bold text-lg leading-relaxed  menu-hambuger w-14 h-6">
          MENU
        </h6>
      </div>
    </div>
  );
}
