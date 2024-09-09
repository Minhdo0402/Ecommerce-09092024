import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div className="branding my-12 flex flex-wrap justify-between w-full shadow-lg bg-white p-6 rounded-lg">
          {brandingData &&
            brandingData.map((item, index) => (
              <div className="flex items-start space-x-3" key={index}>
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {item.Description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12 transform transition-transform duration-500 ease-in-out translate-y-6 hover:translate-y-0`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {categoriesData &&
            categoriesData.map((item) => {
              const handleClick = () => {
                navigate(`/products?category=${item.title}`);
              };

              return (
                <div
                  className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition-transform transform hover:scale-105 border-2 border-transparent hover:border-blue-500"
                  key={item.id}
                  onClick={handleClick}
                >
                  <img
                    src={item.image_Url}
                    className="w-24 h-24 object-cover rounded-md mb-2 transition-transform transform hover:scale-110"
                    alt={item.title}
                  />
                  <h5 className="text-lg font-semibold text-center">
                    {item.title}
                  </h5>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
