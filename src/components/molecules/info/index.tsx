import ListItem from "@/components/atoms/listItem";
import React, { FC } from "react";
import About from "../about";
import "./index.scss";
import { useTranslation } from "../../hooks/useTranslation";
interface indexProps {}

const Info: FC<indexProps> = ({}) => {
  const t = useTranslation();

  return (
    <div className="info">
      <div className="info__left">
        <About />
      </div>
      <div className="info__right">
        <div>
          <ListItem
            title={t!["footerMenu01Title"]}
            text1={t!["footerMenu01Link01"]}
            text2={t!["footerMenu01Link02"]}
            text3={t!["footerMenu01Link03"]}
            text4={t!["footerMenu01Link04"]}
          />
        </div>
        <div>
          <ListItem
            title={t!["footerMenu02Title"]}
            text1={t!["footerMenu02Link01"]}
            text2={t!["footerMenu02Link02"]}
            text3={t!["footerMenu02Link03"]}
            text4={t!["footerMenu02Link04"]}
          />
        </div>
        <div>
          <ListItem
            title={t!["footerMenu03Title"]}
            text1={t!["footerMenu03Link01"]}
            text2={t!["footerMenu03Link02"]}
            text3={t!["footerMenu03Link03"]}
            text4={t!["footerMenu03Link04"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
