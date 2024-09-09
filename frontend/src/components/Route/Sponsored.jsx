import React from "react";
import "../../../src/App.css"; // Đảm bảo import đúng tệp CSS
import logo from "../../../src/Assets/iphone.png";
import logo1 from "../../../src/Assets/images-removebg-preview.png";

const Sponsored = () => {
  return (
    <div className="sponsored-container bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl">
      <div className="animate-marquee">
        {/* Nhóm hình ảnh đầu tiên */}
        <div className="sponsored-item">
          <img
            src="https://logolook.net/wp-content/uploads/2023/09/Sony-Logo-1957.png"
            alt="Sony Logo"
          />
        </div>
        <div className="sponsored-item">
          <img
            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/dell_logo_icon_168288.png"
            alt="Dell Logo"
          />
        </div>
        <div className="sponsored-item">
          <img
            src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"
            alt="Samsung Logo"
          />
        </div>
        <div className="sponsored-item">
          <img src={logo} alt="iPhone Logo" />
        </div>
        <div className="sponsored-item">
          <img src={logo1} alt="Microsoft Logo" />
        </div>
        <div className="sponsored-item">
          <img
            src="https://1000logos.net/wp-content/uploads/2016/09/Acer-Logo.png"
            alt="Acer Logo"
          />
        </div>
        <div className="sponsored-item">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png"
            alt="Google Logo"
          />
        </div>
        {/* Nhóm hình ảnh thứ hai (lặp lại nhóm đầu tiên) */}
        <div className="sponsored-item">
          <img
            src="https://logolook.net/wp-content/uploads/2023/09/Sony-Logo-1957.png"
            alt="Sony Logo"
          />
        </div>
        <div className="sponsored-item">
          <img
            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/dell_logo_icon_168288.png"
            alt="Dell Logo"
          />
        </div>
        <div className="sponsored-item">
          <img
            src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"
            alt="Samsung Logo"
          />
        </div>
        <div className="sponsored-item">
          <img src={logo} alt="iPhone Logo" />
        </div>
        <div className="sponsored-item">
          <img src={logo1} alt="Microsoft Logo" />
        </div>
        <div className="sponsored-item">
          <img
            src="https://1000logos.net/wp-content/uploads/2016/09/Acer-Logo.png"
            alt="Acer Logo"
          />
        </div>
        <div className="sponsored-item">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png"
            alt="Google Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
