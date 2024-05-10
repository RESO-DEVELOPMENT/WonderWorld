import React, { FC } from "react";
import "./index.scss";
import Checkbox from "@/components/atoms/checkbox";
import Card from "@/components/atoms/card";
import Button from "@/components/atoms/button";
import { useTranslation } from "@/components/hooks/useTranslation";
interface TitleCarouselProps {
  children: React.ReactNode;
}
const TitleCarousel: FC<TitleCarouselProps> = ({ children }) => {
  const t = useTranslation();
  return (
    <div className="title_carousel">
      <h1>{children}</h1>
      <Button href="#" style="black">
        {t!["carouselButtonMore"]}
      </Button>
    </div>
  );
};

export default TitleCarousel;
