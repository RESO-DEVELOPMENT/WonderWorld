import React, { FC, useContext } from "react";
import "./index.scss";
import Button from "@/components/atoms/button";
import Progress from "@/components/atoms/progress";
import Link from "next/link";
import { useTranslation } from "@/components/hooks/useTranslation";
import { PageContext } from "@/components/useContext/setPage";
import { useRouter } from "next/router";
import Image from "next/image";

interface CarouselBotProps {
  sliderRef: any;
}

const CarouselBot: FC<CarouselBotProps> = ({ sliderRef }) => {
  const router = useRouter();
  const { numberPage, setNumberPage, numberAnimation, setNumberAnimation } =
    useContext(PageContext);
  const arrhref = ["project", "staff", "active", "service", "project"];
  const arrhref2 = ["project2", "staff2", "active2", "service2", "project2"];

  const handlePrev = () => {
    if (numberPage !== null) {
      // 1: project , 2 staff 3 active 4 service
      router.push(numberPage === 1 ? arrhref[3] : arrhref[numberPage - 2]);
    }
  };

  const handleNext = () => {
    router.push(numberPage ? arrhref2[numberPage] : "project2");
  };
  const t = useTranslation();

  return (
    <div className="Carousel_bot">
      <div className="Carousel_bot__top">
        <Button style="circle" func={() => handlePrev()}>
          <img src="/preslide.svg" alt="" />
        </Button>
        <Button style="circle" func={() => handleNext()}>
          <img src="/nextslide.svg" alt="" />
        </Button>
        <Progress></Progress>
      </div>
      <Link href="./" className="link">
        {t!["carouselBotExplore"]}
      </Link>
    </div>
  );
};

export default CarouselBot;
