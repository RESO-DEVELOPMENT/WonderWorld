import React, { FC } from "react";
import "./index.scss";
import { useTranslation } from "@/components/hooks/useTranslation";
interface indexProps {}

const CoppyRight: FC<indexProps> = ({}) => {
  const t = useTranslation();
  return (
    <div className="coppyRight">
      <h3>{t!["footerCopyright"]}</h3>
    </div>
  );
};

export default CoppyRight;
