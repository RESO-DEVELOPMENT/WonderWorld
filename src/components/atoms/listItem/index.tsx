import React, { FC } from "react";
import "./index.scss";
import Link from "next/link";

interface indexProps {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

const ListItem: FC<indexProps> = ({ title, text1, text2, text3, text4 }) => {
  return (
    <div className="listItem">
      <h5>{title}</h5>
      <ul>
        <li>
          <Link href="#">{text1}</Link>
        </li>
        <li>
          <Link href="#">{text2}</Link>
        </li>
        <li>
          <Link href="#">{text3}</Link>
        </li>
        <li>
          <Link href="#">{text4}</Link>
        </li>
      </ul>
    </div>
  );
};

export default ListItem;
