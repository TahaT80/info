import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import { MenuPaper, useMediaQuery } from "@mui/material";
import Accordion from "../../components/Accordion";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isdect = useMediaQuery("(min-width:960px)");
  const [MenuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="fixed w-full px-12 xl:px-64 z-50 bg-white pb-7 top-0">
      {isdect ? (
        <nav className=" flex justify-between items-center p-4 ">
          <div className="flex gap-3 basis-1/3">
            <div className="border-2 rounded-full p-2 px-4 border-gray-200">
              <p>ورود | ثبت نام</p>
            </div>
            <div className="border-2 rounded-full p-3  border-gray-200 flex justify-center items-center">
              <FaBasketShopping />
            </div>
            <div className="border-2 rounded-full p-2 px-4 border-gray-200">
              <p>مقایسه</p>
            </div>
          </div>

          <form className="border-2 rounded-full  border-gray-100 flex items-center basis-1/3 pr-3">
            <button className="flex items-center justify-center gap-1 boe bg-gray-100 rounded-s-2xl m-[2px] px-4">
              <p className="order-2">جستجو</p>
              <IoIosSearch />
            </button>
            <input
              className="w-full h-full  placeholder:pr-3 block  focus:outline-none"
              dir="rtl"
              type="search"
              name="search"
              id="search"
              placeholder="جستجو در میان کالاها..."
            />
          </form>

          <div dir="rtl" className="basis-1/3 ">
            <div
              onClick={() => navigate("/")}
              className="min-w-[150px] min-h-[50px] max-w-[150px] max-h-[50px]"
            >
              <img
                className="w-full h-full"
                src="https://panel.adak.shop/assets/img/settings/port7489_7829_1683965187352_logo_zbNix3UOwy.png"
                alt=""
              />
            </div>
          </div>
        </nav>
      ) : (
        <nav className="p-3">
          <div className="flex items-center justify-between ">
            <div className="flex gap-5 text-xl ">
              <div>
                <IoPersonSharp />
              </div>
              <div>
                <FaBasketShopping />
              </div>
              <div>
                <MdCompareArrows />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <div
                  onClick={() => navigate("/")}
                  className="min-w-[115px] min-h-[40px] max-w-[115px] max-h-[40px]"
                >
                  <img
                    className="w-full h-full"
                    src="https://panel.adak.shop/assets/img/settings/port7489_7829_1683965187352_logo_zbNix3UOwy.png"
                    alt=""
                  />
                </div>
              </div>
              <button
                className="text-2xl"
                onClick={() => setMenuIsOpen(!MenuIsOpen)}
              >
                <MdOutlineMenu />
              </button>
            </div>
          </div>
          <div className="m-4">
            <form className="border-2 rounded-full  border-gray-100 flex items-center basis-1/3 pr-3">
              <button className="flex items-center justify-center gap-1 boe bg-gray-100 rounded-s-2xl m-[2px] px-4">
                <p className="order-2">جستجو</p>
                <IoIosSearch />
              </button>
              <input
                className="w-full h-full  placeholder:pr-3 block  focus:outline-none"
                dir="rtl"
                type="search"
                name="search"
                id="search"
                placeholder="جستجو در میان کالاها..."
              />
            </form>
          </div>
        </nav>
      )}
      {!isdect && MenuIsOpen && (
        <div className="fixed top-0 right-0 w-screen h-screen bg-white z-50 p-5">
          <div className="flex justify-between items-center ">
            <div className="shadow rounded-full">
              <button
                onClick={() => setMenuIsOpen(!MenuIsOpen)}
                className="m-2"
              >
                <IoMdClose />
              </button>
            </div>
            <div
              onClick={() => navigate("/")}
              className="min-w-[120px] min-h-[40px] max-w-[115px] max-h-[40px]"
            >
              <img
                className="w-full h-full"
                src="https://panel.adak.shop/assets/img/settings/port7489_7829_1683965187352_logo_zbNix3UOwy.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center pt-6 text-xs">
            <div className="border-[1px] border-black p-2 rounded-md">
              <button>ورود | عضوریت</button>
            </div>
            <div>
              <p>به فروشگاه اینرنتی آداک خوش‌آمدید!</p>
            </div>
          </div>
          <hr class="w-full h-px my-4 bg-gray-200 " />

          <div className="flex flex-col  w-full  items-end">
            <button className="pb-3">
              <p>انتخاب هوشمند لپ تاب</p>
            </button>
            <button>
              <p>وینرینی</p>
            </button>
            <button>
              <p>درباره ما</p>
            </button>
          </div>
          <div>
            <Accordion titel={"لپ تاپ"}>
              <Accordion titel={"مانیتور"}>
                <a href="/a">taha</a>
                <a href="/a">taha</a>
                <a href="/a">taha</a>
                <a href="/a">taha</a>
                <a href="/a">taha</a>
              </Accordion>
              <Accordion titel={"مانیتور"} />
            </Accordion>
            <Accordion
              titel={"موبایل"}
              AccordionIn={<Accordion titel={"مانیتور"} />}
            />
            <Accordion
              titel={"تبلت"}
              AccordionIn={<Accordion titel={"مانیتور"} />}
            />
            <Accordion
              titel={"لوازم جانبی"}
              AccordionIn={<Accordion titel={"مانیتور"} />}
            />
            <Accordion
              titel={"آل این وان"}
              AccordionIn={<Accordion titel={"مانیتور"} />}
            />
            <Accordion
              titel={"کنسول بازی و لوازم جانبی"}
              AccordionIn={<Accordion titel={"مانیتور"} />}
            />
            <Accordion
              titel={"مانیتور"}
              AccordionIn={<Accordion titel={"مانیتور"} />}
            />
          </div>
          <div className="fixed bottom-0 items-center w-full flex justify-center">
            ooooooooooo
          </div>
        </div>
      )}

      {isdect && (
        <div className="">
          <hr />
          <div className="mt-4 flex justify-between items-center">
            <div className="flex gap-2 divide-x-2 divide-black">
              <button className="flex items-center gap-2">
                <FaPhoneAlt />
                02142297
              </button>
              <small></small>
            </div>
            <div className="divide-x-2 flex gap-3">
              <div className="gap-4 flex">
                <a href="">درباره ما</a>
                <a href="">ویترینی</a>
                <a href="">بلاگ</a>
                <a href=""> انتخاب هوشمند لپ تاب</a>
              </div>
              <div className="px-3">
                <button className="flex items-center gap-2 justify-center">
                  <p>دسته بندی کالاها</p>
                  <MdOutlineMenu />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
