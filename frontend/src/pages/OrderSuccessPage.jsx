import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import gifImage from "../Assets/57b54818e2011d482548fb54201ce6c1.gif"; // Đảm bảo rằng bạn có đường dẫn chính xác đến hình GIF

const OrderSuccessPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-12 bg-gray-100">
      {/* Container cho GIF và text */}
      <div className="relative w-full max-w-lg mx-auto">
        <img
          src={gifImage}
          alt="Success"
          className="mx-auto"
          style={{ width: "100%", height: "auto" }}
        />
        <h5
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[25px] text-[#269c9e] text-center"
          style={{
            width: "100%", // Đảm bảo văn bản không vượt quá kích thước hình GIF
          }}
        >
          😍 Your order is successful 😍
        </h5>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
