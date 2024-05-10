import React, { FC } from "react";
import "./index.scss";
const Border: FC = ({}) => {
  return (
    <div className="activities-border-paragraph">
      <div className="activities-border-paragraph-left"></div>
      <hr />
      <div className="activities-border-paragraph-right"></div>
    </div>
  );
};

export default Border;
