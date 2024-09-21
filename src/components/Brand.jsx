import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiSolidLeftArrow } from "react-icons/bi";

const Item = () => {
  return (
    <div className="flex items-center justify-center transition-all duration-300 flex-col  hover:-translate-y-5 hover:scale-110 ">
      <div className="max-w-32">
        <img
          src="https://panel.adak.shop/assets/img/landing/port9544_1978_1698751866994_undefined_cl2NcQ2I6o.png"
          alt="non"
        />
      </div>
      <div>lenovo</div>
    </div>
  );
};
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
const Brand = () => {
  return (
    <div className="flex flex-col ">
      <div dir="rtl" className="text-blue-800 text-3xl flex gap-3">
        <BiSolidLeftArrow />
        برند های پر فروش
      </div>
      <div>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          className="[&_.react-multi-carousel-track]:gap-4"
          arrows={false}
        >
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Carousel>
        ;
      </div>
    </div>
  );
};

export default Brand;
