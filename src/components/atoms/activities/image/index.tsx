import React, { FC } from "react";
import "./index.scss";
import Image from "next/image";
interface ImageProps {
  src: string;
}

const ImageActive: FC<ImageProps> = ({ src }) => {
  return <img className="activities-image" src={src} alt="" />;
};

export default ImageActive;
