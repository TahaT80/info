import React from "react";

const Item = () => {
  return (
    <div dir="rtl" className="rounded-md p-4  flex items-center flex-col bg-white max-w-[258px] hover:drop-shadow-[10px_10px_10px_#ffffff]  ">
      <div className="w-fit">
        <img
          src="https://panel.adak.shop/assets/img/products/9170_1724310653258_7.webp"
          alt=""
        />
      </div>
      <div className="text-start">
        <p> لپ تاپ ایسوس TUF Gaming F16 2024 FX607JV-C </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <div>
          <p>2454366</p>
        </div>
        <div>-700000</div>
      </div>
      <div className="text-end w-full">7042563تومان</div>
      <div className="flex justify-between items-center w-full">
        <div>time</div>
        <div>تا پایان تخفیف:</div>
      </div>
    </div>
  );
};

export default Item;
