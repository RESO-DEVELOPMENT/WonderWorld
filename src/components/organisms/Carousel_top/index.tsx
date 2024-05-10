import React, { FC } from "react";
import "./index.scss";
import TitleCarousel from "@/components/molecules/TitleCarousel";

import Groupcheckbox from "@/components/molecules/groupcheckbox";
import SimpleSlider from "@/components/molecules/listcard";
import Listcard from "@/components/molecules/listcard";
interface CarouselTopProps {
  children: React.ReactNode;
  sliderRef: any;
}

const CarouselTop: FC<CarouselTopProps> = ({ children, sliderRef }) => {
  return (
    <div className="Carousel_top">
      <TitleCarousel>{children}</TitleCarousel>
      <div>
        {" "}
        <Listcard sliderRef={sliderRef} />
      </div>
    </div>
  );
};

export default CarouselTop;
