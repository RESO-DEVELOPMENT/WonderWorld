import { AppProps } from "next/app";
import React, { Component, FC } from "react";
import "../styles/globals.scss";
import "../styles/index.scss";
import "../styles/project.scss";
import { motion } from "framer-motion";
import Carousel from "@/components/organisms/Carousel";

import ServiceLeft from "@/components/organisms/Service-left";
import ServiceRight from "@/components/organisms/Service-right";
import PageTemplate from "@/components/templates/page-template";
import { useTranslation } from "@/components/hooks/useTranslation";
import { useRouter } from "next/router";
import { PageContext } from "@/components/useContext/setPage";
const Project: FC = () => {
  const t = useTranslation();
  const router = useRouter();
  const { numberPage, setNumberPage } = React.useContext(PageContext);
  React.useEffect(() => {
    setNumberPage(1);
  }, []);
  return (
    <>
      {/* <motion.div
        key={router.pathname}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      > */}{" "}
      <PageTemplate
        background="/backgroundTemplate/bg1.jpeg"
        animation="flip-left"
      >
        <Carousel>Dự Án Bảo Tồn Bãi Biển</Carousel>
        <div className="cover-project">
          <ServiceLeft />
          <ServiceRight />
        </div>
      </PageTemplate>
      {/* </motion.div> */}
    </>
  );
};

export default Project;
