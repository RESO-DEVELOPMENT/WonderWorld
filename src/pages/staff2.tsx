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
    // <motion.div
    //   key={router.pathname}
    //   initial={{ x: "100%" }}
    //   animate={{ x: 0 }}
    //   exit={{ x: "-100%" }}
    //   transition={{
    //     duration: 0.6,
    //     ease: "easeInOut",
    //   }}
    // >
    <PageTemplate background="/bg2-2.svg" animation="flip-left">
      <Carousel>{t!["carouselStaffPage"]}</Carousel>
      <div id="page2" className="block">
        <Button href="./" style="staff">
          {t!["staffPageTitle"]}
        </Button>
        <Inforstaff></Inforstaff>
      </div>
    </PageTemplate>
    // </motion.div>
  );
};
export default staff;
