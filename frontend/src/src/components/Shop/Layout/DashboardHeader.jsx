import React, { useState } from "react";
import { BsGift } from "react-icons/bs";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../../Assets/e1.png";
import logo1 from "../../../../Assets/walk.png";
import { MdOutlineLocalOffer } from "react-icons/md";
import { backend_url } from "../../../../server";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);

  console.log(seller);

  return (
    <div className="w-full h-[80px] bg-white shadow-md sticky top-0 left-0 z-30 flex items-center justify-between px-4 transition-all duration-300">
      <div>
        <Link to="/dashboard">
          <div className="flex items-center">
            <img
              src={logo1}
              alt="Logo 1"
              width="90px"
              height="145px"
              className="logo1 transition-transform transform hover:scale-105 duration-300 ease-in-out"
              style={{ marginRight: "-45px" }}
            />
            <img
              src={logo}
              alt="Logo 2"
              width="130px"
              height="150px"
              className="logo2 transition-transform transform hover:scale-105 duration-300 ease-in-out"
              style={{ marginTop: "22px" }}
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/dashboard/cupouns" className="800px:block hidden">
            <BsGift
              size={30}
              className="mx-5 cursor-pointer text-gray-700 hover:text-red-500 transition-colors duration-200 ease-in-out"
            />
          </Link>
          <Link to="/dashboard-events" className="800px:block hidden">
            <MdOutlineLocalOffer
              size={30}
              className="mx-5 cursor-pointer text-gray-700 hover:text-green-500 transition-colors duration-200 ease-in-out"
            />
          </Link>
          <Link to="/dashboard-products" className="800px:block hidden">
            <FiShoppingBag
              size={30}
              className="mx-5 cursor-pointer text-gray-700 hover:text-blue-500 transition-colors duration-200 ease-in-out"
            />
          </Link>
          <Link to="/dashboard-orders" className="800px:block hidden">
            <FiPackage
              size={30}
              className="mx-5 cursor-pointer text-gray-700 hover:text-purple-500 transition-colors duration-200 ease-in-out"
            />
          </Link>
          <Link to="/dashboard-messages" className="800px:block hidden">
            <BiMessageSquareDetail
              size={30}
              className="mx-5 cursor-pointer text-gray-700 hover:text-green-500 transition-colors duration-200 ease-in-out"
            />
          </Link>
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${backend_url}${seller?.avatar}`}
              alt="Seller Avatar"
              className="w-[50px] h-[50px] rounded-full object-cover border-2 border-gray-200 hover:border-blue-500 transition-all duration-200 ease-in-out"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
