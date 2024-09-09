import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative min-h-[70vh] 800px:min-h-[80vh] w-full">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots
        arrows={false}
      >
        <div
          className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
          style={{
            backgroundImage:
              "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-1.jpg)",
          }}
        >
          <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
            <h1
              className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
            >
              Fresh New Arrivals
            </h1>
            <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
              Discover our latest collection of home decor.
            </p>
            <Link to="/products" className="inline-block">
              <div className={`${styles.button} mt-5`}>
                <span className="text-[#fff] font-[Poppins] text-[18px]">
                  Shop Now
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div
          className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
          style={{
            backgroundImage:
              "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
          }}
        >
          <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
            <h1
              className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
            >
              Best Collection for <br /> home Decoration
            </h1>
            <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              assumenda? Quisquam itaque <br /> exercitationem labore vel,
              dolore quidem asperiores, laudantium temporibus soluta optio
              consequatur <br /> aliquam deserunt officia. Dolorum saepe nulla
              provident.
            </p>
            <Link to="/products" className="inline-block">
              <div className={`${styles.button} mt-5`}>
                <span className="text-[#fff] font-[Poppins] text-[18px]">
                  Shop Now
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div
          className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
          style={{
            backgroundImage:
              "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-3.jpg)",
          }}
        >
          <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
            <h1
              className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
            >
              Stunning Design Ideas
            </h1>
            <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
              Discover our latest trends and ideas for your home.
            </p>
            <Link to="/products" className="inline-block">
              <div className={`${styles.button} mt-5`}>
                <span className="text-[#fff] font-[Poppins] text-[18px]">
                  Shop Now
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
