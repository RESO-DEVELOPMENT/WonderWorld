import React, { FC } from "react";
import "./index.scss";

import Title from "@/components/atoms/activities/title";
import Border from "@/components/atoms/activities/border";
import Content from "@/components/atoms/activities/content";
import Message from "@/components/atoms/message";
import Button from "@/components/atoms/button";
import ImageActive from "@/components/atoms/activities/image";
import { useTranslation } from "@/components/hooks/useTranslation";
interface ActivitiesDetailProps {
  imageSrc: string;
  title: string;
  content: string[];
  buttonPosition: "insite" | "outsie";
}

const ActivitiesDetail: FC<ActivitiesDetailProps> = ({
  imageSrc,
  title,
  content,
  buttonPosition,
}) => {
  const t = useTranslation();
  return (
    <div className="activities-detail">
      <div className="activities-detail-container">
        <div className="activities-detail-container-navigation"></div>
        <div className="activities-detail-container-title">
          <Title special="title-detail-item" color="title-color-yellow">
            {title}
          </Title>
        </div>
      </div>
      <div></div>
      <div className="activities-detail-container">
        <div className="activities-detail-container-image">
          <ImageActive src={imageSrc} />
        </div>

        <div className="activities-detail-container-information">
          <Border />
          {content.map((content, index) => {
            return (
              <Content special="content-none-uppercase" key={index}>
                {content}
              </Content>
            );
          })}
          {buttonPosition == "insite" ? (
            <div className="activities-detail-container-information-button">
              <Button style="black" href="">
                {t!["activitiesDetailButtonText"]}
              </Button>
            </div>
          ) : (
            <></>
          )}
        </div>
        {buttonPosition == "insite" ? (
          <></>
        ) : (
          <div className="activities-detail-container-information-button">
            <div className="button-outsite">
              <Button style="black" href="">
                {t!["activitiesDetailButtonText"]}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivitiesDetail;
