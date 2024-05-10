import React, { FC } from "react";
import "./index.scss";
import Image from "next/image";
interface indexProps {
  style?: React.CSSProperties;
  src: string;
}

const BigCard: FC<indexProps> = ({ style, src }) => {
  return (
    <div className="bigCard">
      <Image src={src} alt="" width="0" height="0" />
    </div>
  );
};

export default BigCard;
