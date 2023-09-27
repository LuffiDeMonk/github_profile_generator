import React from "react";
import { Link } from "react-router-dom";
import LeftArrow from "../assets/LeftArrow.png";

const NavigationButton = ({ hireable }) => {
  return (
    <div className="flex items-center justify-between">
      <Link to="/" className="w-8 h-8 flex items-center justify-center">
        <img src={LeftArrow} alt="" className="w-full h-full object-contain" />
      </Link>
      {hireable && (
        <a className="px-4 sm:px-10 md:px-16 py-2 bg-[#F24E1E] text-white text-sm font-semibold rounded-md cursor-pointer">
          Hire Me
        </a>
      )}
    </div>
  );
};

export default NavigationButton;
