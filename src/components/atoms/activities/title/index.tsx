import React, { FC } from "react";
import "./index.scss";
interface TitleProps {
  children: React.ReactNode;
  special?: "title-detail-item" | "";
  color?: "title-color-yellow" | "";
  text?: "text-uppercase" | "";
}

const Title: FC<TitleProps> = ({ children, special, color, text }) => {
  return (
    <h3 className={`activities-item-title ${special} ${color} ${text}`}>
      {children}
    </h3>
  );
};

export default Title;
