import React, { FC } from "react";
import "./index.scss";
import Link from "next/link";
import Image from "next/image";
interface CardProps {
  children?: React.ReactNode;
  href: string;
  src: string;
}

const Card: FC<CardProps> = ({ children, src, href }) => {
  return (
    <div className="divcard">
      <div className={`card `}>
        <Image
          src={src}
          alt=""
          width="100"
          height={100}
          priority
          style={{ objectFit: "cover" }}
        />
        <Link href={href} className="card__text">
          {children}
        </Link>
      </div>
    </div>
  );
};

export default Card;
