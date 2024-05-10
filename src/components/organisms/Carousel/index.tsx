import React, { FC, useContext, useRef, useState } from "react";
import "./index.scss";
import CarouselBot from "../Carousel_bot";
import CarouselTop from "../Carousel_top";

interface CarouselProps {
  children: React.ReactNode;
}
// type TypePage = {
//   page: number;
//   setPage: React.Dispatch<React.SetStateAction<number>>;
// };

const Carousel: FC<CarouselProps> = ({ children }) => {
  let sliderRef = useRef(null);

  return (
    <div className="Carousel">
      <CarouselTop sliderRef={sliderRef}>{children}</CarouselTop>
      <CarouselBot sliderRef={sliderRef}></CarouselBot>
    </div>
  );
};

export default Carousel;
