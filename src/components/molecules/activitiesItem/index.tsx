import React, { FC } from "react";
import "./index.scss";
import Title from "@/components/atoms/activities/title";
import Content from "@/components/atoms/activities/content";
import Border from "@/components/atoms/activities/border";
interface ActivitiesItem {
  imageSrc: string;
  title: string;
  content: string;
}

const ActivitiesItem: FC<ActivitiesItem> = ({ imageSrc, title, content }) => {
  return (
    <div className="activities-item">
      <div
        className="activities-item-image"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        {/* <Image src={`bg1.jpeg`} /> */}
      </div>
      <div className="activities-item-information">
        <Title color="title-color-yellow" text="text-uppercase">
          {title}
        </Title>
        <Border />
        <Content special="none-uppercase">{content}</Content>
      </div>
    </div>
  );
};

export default ActivitiesItem;
