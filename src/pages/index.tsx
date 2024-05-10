import { AppProps } from "next/app";
import React, { Component, FC } from "react";
import "../styles/globals.scss";
import "../styles/index.scss";
import "../styles/project.scss";
import Carousel from "@/components/organisms/Carousel";
import ServiceLeft from "@/components/organisms/Service-left";
import ServiceRight from "@/components/organisms/Service-right";
import PageTemplate from "@/components/templates/page-template";
import { useTranslation } from "@/components/hooks/useTranslation";
import { PageContext } from "@/components/useContext/setPage";
const Project: FC = () => {
  const t = useTranslation();
  const { setNumberPage } = React.useContext(PageContext);
  React.useEffect(() => {
    setNumberPage(1);
  }, []);
  return (
    <>
      <PageTemplate background="/backgroundTemplate/bg1.jpeg">
        <Carousel>{t!["carouselStaffProject"]}</Carousel>
        <div className="cover-project">
          <ServiceLeft />
          <ServiceRight />
        </div>
      </PageTemplate>
    </>
  );
};

export default Project;
