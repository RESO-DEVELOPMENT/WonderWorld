import React, { Component, FC, useRef } from "react";
import Slider from "react-slick";

import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@/components/atoms/card";
import { useTranslation } from "@/components/hooks/useTranslation";
import arrayListCard from "./listcard";
import { PageContext } from "@/components/useContext/setPage";
interface ListcardProps {
  sliderRef: any;
}

const Listcard: FC<ListcardProps> = ({ sliderRef }) => {
  {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2.6,
      slidesToScroll: 1,
      arrows: false,
      touchMove: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1.5,
          },
        },
      ],
    };
    const t = useTranslation();
    const { numberPage } = React.useContext(PageContext);

    return (
      <div className="widthSlider">
        <Slider ref={sliderRef} {...settings}>
          {arrayListCard.map((card, index) => {
            if (numberPage && index >= numberPage - 1 && index < numberPage + 3)
              return (
                <Card src={card.src} href={card.href}>
                  {" "}
                  {t![`${card.title}`]}
                  {}
                </Card>
              );
          })}
          {/* <Card src="/Card/carouselCardProject.svg" href={"/"}>
            {" "}
            {t!["carouselCardProject"]}
          </Card>
          <Card src="/Card/carouselCardStaff.svg" href={"staff"}>
            {" "}
            {t!["carouselCardStaff"]}
          </Card>
          <Card src="/Card/carouselCardActivities.svg" href={"active"}>
            {" "}
            {t!["carouselCardActivities"]}
          </Card>

          <Card src="/Card/carouselCardService.svg" href={"service"}>
            {" "}
            {t!["carouselCardService"]}
          </Card> */}
        </Slider>
      </div>
    );
  }
};
export default Listcard;
