import React from "react";
import MainC from "./MainC";
import ItemC from "./ItemC";
import Item from "../../components/Item";
import Brand from "../../components/Brand";
import CartItem from "../../components/CartItem";
const Home = () => {
  let slides = [
    "https://panel.adak.shop/assets/img/landing/1370_1726056521708_asus-banner.jpeg",
    "https://panel.adak.shop/assets/img/page/8422_1725350348929_IMG_0080.JPG",
    "https://panel.adak.shop/assets/img/landing/2911_1722706561711_banner%20campaign.jpg",
  ];
  return (
    <div className="m-auto  ">
      <div className="md:mt-[152px] mt-[165px]">
        <MainC slides={slides} />
      </div>
      <div className="lg:w-4/5 w-full mx-auto ">
        <div className=" mt-7 rounded-2xl p-4 mx-2 md:mx-11 bg-blue-900 flex justify-between ">
          <div className="overflow-x-hidden w-1/2 md:w-4/5 z-[0]">
            <ItemC styleA={'autoPlay'}>
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </ItemC>
          </div>
          <div className="w-1/2 md:w-1/5 flex flex-col my-6 items-end justify-end">
            <div>
              <img
                src="https://panel.adak.shop/assets/img/landing/5944_1720264054304_Logo slider  amazing.png"
                alt=""
              />
            </div>
            <div className="text-3xl p-2 text-white">13 به شانس</div>
            <button className="bg-blue-600 text-white rounded-2xl p-2">
              محصولات جشنواره
            </button>
          </div>
        </div>
      </div>

      <div className="lg:w-3/4 w-11/12  mx-auto my-12">
        <div className="w-full">
          <Brand />
        </div>
      </div>
      <CartItem/>
    </div>
  );
};

export default Home;
