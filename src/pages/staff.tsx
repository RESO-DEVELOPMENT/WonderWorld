import React from "react";
import "../styles/staff.scss";
import "../styles/globals.scss";
import Inforstaff from "@/components/organisms/InforStaff";
import Button from "@/components/atoms/button";
import { motion } from "framer-motion";
import Carousel from "@/components/organisms/Carousel";
import PageTemplate from "@/components/templates/page-template";
import { useTranslation } from "@/components/hooks/useTranslation";
import { PageContext } from "@/components/useContext/setPage";
import { useRouter } from "next/router";
const staff = () => {
  const t = useTranslation();
  const { setNumberPage } = React.useContext(PageContext);
  const router = useRouter();
  React.useEffect(() => {
    setNumberPage(2);
  }, []);
  return (
    <>
      <PageTemplate background="/bg2-2.svg" animation="flip-right">
        <Carousel>{t!["carouselStaffPage"]}</Carousel>
        <div className="block">
          <Button href="./" style="staff">
            {t!["staffPageTitle"]}
          </Button>
          <Inforstaff></Inforstaff>
        </div>
      </PageTemplate>
    </>
  );
};
export default staff;
