import Link from "next/link";
import React, { FC } from "react";
import "./index.scss";
import Image from "next/image";

interface StaffnameProps {
  fullname: string;
  rule: string;
  level: 2 | 4;
}

const Staffname: FC<StaffnameProps> = ({ rule, level, fullname }) => {
  if (level == 2)
    return (
      <div className="staffname">
        <h3 className="nameStaff"> {fullname}</h3>
        <p className="ruleStaff">{rule}</p>
        <div className="levelStaff">
          <Image src="/level.svg" alt="" width="0" height="0" priority />
          <Image src="/level.svg" alt="" width="0" height="0" priority />
        </div>
      </div>
    );
  return (
    <div className="staffname">
      <h3 className="nameStaff"> {fullname}</h3>
      <p className="ruleStaff">{rule}</p>
      <div className="levelStaff">
        <Image src="/level.svg" alt="" width="0" height="0" priority />
        <Image src="/level.svg" alt="" width="0" height="0" priority />
        <Image src="/level.svg" alt="" width="0" height="0" priority />
        <Image src="/level.svg" alt="" width="0" height="0" priority />
      </div>
    </div>
  );
};

export default Staffname;
