import React from "react";
import { FaStar } from "react-icons/fa";
import Timer from "./Timer";

const CartItem = () => {
    const targetDate = new Date('2024-22-12T23:59:59');
  return (
    <div
      dir="rtl"
      className="rounded-md p-4 gap-2 flex items-center flex-col bg-white max-w-[258px]  "
    >
      <div className="w-fit">
        <img
          src="https://panel.adak.shop/assets/img/products/9170_1724310653258_7.webp"
          alt=""
        />
      </div>
      <div className="text-start mb-12">
        <p> لپ تاپ ایسوس TUF Gaming F16 2024 FX607JV-C </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <div>
          <p className="text-red-800">تنها یک عدد در انبار باقی مانده</p>
        </div>
        <div className="flex items-center justify-start gap-1">
          4.6
          <div className="text-yellow-300">
            <FaStar />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div>
          <p>سری پردازنده</p>
        </div>
        <div>Core i5</div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div>
          <p>سایز</p>
        </div>
        <div>15.6</div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div>
          <p>حجم گرافیکی</p>
        </div>
        <div>6GB</div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div>
          <p>ظرفیت رم</p>
        </div>
        <div>32GB</div>
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="bg-red-500 p-1 rounded-l-full text-white px-3">
          <p>500.000-</p>{" "}
        </div>
        <del>20.500.000</del>
      </div>

      <div className="text-end w-full">7042563 تومان</div>
      <div className="flex justify-between items-center w-full">
        <div>
          {" "}
          <div className=" ">
            <Timer targetDate={targetDate} />
          </div>{" "}
        </div>
        <div>تا پایان تخفیف:</div>
      </div>
    </div>
  );
};

export default CartItem;
