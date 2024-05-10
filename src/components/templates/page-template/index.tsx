import React, { FC, useEffect } from "react";
import "./index.scss";
import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";
import { useRouter } from "next/router";

import { motion } from "framer-motion";
import { PageContext } from "@/components/useContext/setPage";
interface PageTemplateProps {
  children: React.ReactNode;
  background: string;
  animation?: string;
}

const PageTemplate: FC<PageTemplateProps> = ({
  children,
  background,
  animation,
}) => {
  const router = useRouter();
  const { numberAnimation, setNumberAnimation } = React.useContext(PageContext);
  return (
    // <motion.div
    //   key={router.pathname}
    //   initial={{ "--rotate": "0deg" } as any}
    //   animate={{ "--rotate": "360deg" } as any}
    //   transition={{ duration: 2, repeat: Infinity }}
    // >
    <div
      className="page"
      data-aos={animation}
      data-aos-duration="1500"
      style={{
        backgroundPosition: "center",
        backgroundImage: `url('${background}')`,
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
    // </motion.div>
  );
};

export default PageTemplate;
