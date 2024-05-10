import React, { FC } from "react";
import "./index.scss";
interface indexProps {
  content: string;
  children?: React.ReactNode;
}

const EventTitle: FC<indexProps> = ({ content, children }) => {
  return (
    <div>
      <div className="children">{children}</div>
      <h1 className="title">{content}</h1>
    </div>
  );
};

export default EventTitle;
