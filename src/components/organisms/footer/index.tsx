import Contact from "@/components/molecules/contact";
import React, { FC } from "react";
import "./index.scss";
import CoppyRight from "@/components/atoms/coppyRight";
import Info from "@/components/molecules/info";
interface indexProps {}

const Footer: FC<indexProps> = ({}) => {
  return (
    <>
      <footer className="wrap-footer">
        <Contact />
        <div className="footer">
          <Info />
        </div>
        <CoppyRight />
      </footer>
    </>
  );
};

export default Footer;
