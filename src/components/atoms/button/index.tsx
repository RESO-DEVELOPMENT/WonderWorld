import Link from "next/link";
import React, { FC } from "react";
import "./index.scss";
interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  style: "linear" | "none" | "black" | "circle" | "staff" | "activepage";
  func?: () => void;
}

const Button: FC<ButtonProps> = ({ href, children, style, func }) => {
  if (href)
    return (
      <Link className={`button ${style}`} href={href}>
        {children}
      </Link>
    );
  if (func) {
    return (
      <div className={`button ${style}`} onClick={() => func()}>
        {children}
      </div>
    );
  }
  return <div className={`button ${style}`}>{children}</div>;
};

export default Button;
