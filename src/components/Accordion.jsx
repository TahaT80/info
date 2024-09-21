import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { Children } from "react";
const Accordion = ({ titel, children, link='/' }) => {
  const [Accordion, setAccordion] = useState(false);
  return (
    <div dir="rtl" className="py-2">
      <button
        onClick={() => setAccordion(!Accordion)}
        className="w-full flex justify-between"
      >
        <span>{titel}</span>
        {Accordion ? (
          <span className="transition-all duration-300">
            <FaAngleUp />
          </span>
        ) : (
          <span className="rotate-180 transition-all duration-300">
            <FaAngleUp />
          </span>
        )}
      </button>
      <div
        className={`${
          Accordion ? "grid-rows-[1fr]" : "grid-rows-[0fr] "
        } grid overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="overflow-hidden px-6">
          <div className="pt-2">
            <a href={link}>مشاهده همه کالاهای این دسته</a>
          </div>
          {Children.map(children, (child) => (
            <div className="Row">{child}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
