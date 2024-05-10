import React, { FC, useContext } from "react";
import "./index.scss";
import { PageContext } from "@/components/useContext/setPage";

const Progress: FC = ({}) => {
  const { numberPage, setNumberPage } = useContext(PageContext);

  return (
    <div className="progress">
      <div className="progress__border">
        <div
          className="progress_per"
          style={{ width: `${numberPage ? numberPage / 0.04 : 1}%` }}
        ></div>
      </div>
      <span>0{numberPage ? numberPage : 4}</span>
    </div>
  );
};

export default Progress;
