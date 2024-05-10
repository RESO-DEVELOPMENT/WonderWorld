import React, { Children, FC } from "react";
import "./index.scss";
interface ContentProps {
  children: React.ReactNode;
  special?: "content-none-uppercase" | "none-uppercase";
  text?: "normal-uppercase";
}

const Content: FC<ContentProps> = ({ children, special, text }) => {
  return (
    <div className="activities-item-content">
      <p className={`activities-item-content-paragraph ${special} ${text}`}>
        {children}
      </p>
    </div>
  );
};

export default Content;
