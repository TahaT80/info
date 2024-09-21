import React from "react";
import Item from "../../components/Item";
import { Children } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ItemC = ({ children, styleA }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 4,
    },
    desktopmin: {
      breakpoint: { max: 1500, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 780 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 780, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="relative">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        className="[&_.react-multi-carousel-track]:gap-4"
      >
        {Children.map(children, (child) => {
          return <div className="pb-2">{child}</div>;
        })}
      </Carousel>
      ;
    </div>
  );
};

export default ItemC;
