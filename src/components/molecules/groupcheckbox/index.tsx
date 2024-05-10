import Link from "next/link";
import React, { FC } from "react";
import "./index.scss";
import Checkbox from "@/components/atoms/checkbox";
interface GroupcheckboxProps {
  idList: string[];
}
const Groupcheckbox: FC<GroupcheckboxProps> = ({ idList }) => {
  function MyFactoryFunction(idList: string[]) {
    const Container = [];
    for (var index in idList) {
      Container.push(<Checkbox href={`${idList[index]}`}></Checkbox>);
    }

    return Container;
  }

  return <div className="groupcheckbox">{MyFactoryFunction(idList)}</div>;
};

export default Groupcheckbox;
