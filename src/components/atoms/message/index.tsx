import React, { FC } from "react";
import "./index.scss";
interface indexProps {
  style?: "big";
  content: string;
}

const Mess: FC<indexProps> = ({ content, style }) => {
  return (
    <div className={`message ${style}`}>
      <button>{content}</button>
    </div>
  );
};

export default Mess;
