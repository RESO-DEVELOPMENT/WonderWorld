import React, { FC } from "react";
import "./index.scss";
import Button from "@/components/atoms/button";
import Image from "next/image";
import { useTranslation } from "@/components/hooks/useTranslation";
interface ButtonactiveProps {
  OnClickpage1(): void;
  OnClickpage2(): void;
  children: React.ReactNode;
}
const Buttonactive: FC<ButtonactiveProps> = ({
  children,
  OnClickpage1,
  OnClickpage2,
}) => {
  const t = useTranslation();
  const [visibleOptions, setVisibleOptions] = React.useState(false);
  const handleVisible = () => {
    setVisibleOptions(!visibleOptions);
  };
  return (
    <>
      <div className="button-active">
        <p className="button-active__title">{children}</p>
        <Button style="activepage" func={handleVisible}>
          <img data-aos="flip-left" src="/activeButton.svg" alt="" />
          <div
            className="button-active__msg"
            style={{
              display: visibleOptions ? "block" : "none",
            }}
          >
            <p onClick={() => OnClickpage1()}>{t!["projectItemLeftTitle"]}</p>
            <p style={{ marginTop: "12px" }} onClick={() => OnClickpage2()}>
              {t!["activitiesButtonActiveItem02"]}
            </p>
          </div>
        </Button>
      </div>
    </>
  );
};
export default Buttonactive;
