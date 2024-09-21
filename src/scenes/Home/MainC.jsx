import React from "react";

import { Carousel } from "flowbite-react";

const MainC = ({ slides }) => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {slides.map((s) => {
          return (
            <img
              key={s}
              className="min-w-[100%] min-h-[100%]"
              alt="non"
              src={s}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default MainC;
