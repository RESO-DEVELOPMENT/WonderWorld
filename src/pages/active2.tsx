import { AppProps } from "next/app";
import React, { FC, useEffect } from "react";
import "../styles/globals.scss";

import Carousel from "@/components/organisms/Carousel";
import { motion } from "framer-motion";
import PageTemplate from "@/components/templates/page-template";
import ActivitiesArea from "@/components/organisms/activitesArea";
import { useTranslation } from "@/components/hooks/useTranslation";
import { PageContext } from "@/components/useContext/setPage";
import { useRouter } from "next/router";
const ActivePage: FC = ({}) => {
  const t = useTranslation();
  const { numberPage, setNumberPage, numberAnimation, setNumberAnimation } =
    React.useContext(PageContext);
  const router = useRouter();

  useEffect(() => {
    setNumberPage(3);
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
      > */}
      <PageTemplate
        background="/backgroundTemplate/active.jpg"
        animation="flip-left"
      >
        <Carousel> {t!["carouselCardActivities"]}</Carousel>
        <div>
          <ActivitiesArea></ActivitiesArea>
        </div>
      </PageTemplate>
      {/* </motion.div> */}
    </>
  );
};
export default ActivePage;
