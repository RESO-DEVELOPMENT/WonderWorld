import React, { FC } from "react";
import "./index.scss";
interface indexProps {
  content: string;
  position: "left" | "mid";
}

const OrderCard: FC<indexProps> = ({ content, position }) => {
  return (
    <div>
      <h1 className={`position-${position}`}>{content}</h1>
    </div>
  );
};

export default OrderCard;
