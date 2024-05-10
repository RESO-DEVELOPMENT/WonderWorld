import Logo from "@/components/atoms/logo";
import Message from "@/components/atoms/message";
import React, { FC } from "react";
import "./index.scss";
import { useTranslation } from "@/components/hooks/useTranslation";
interface indexProps {}

const Contact: FC<indexProps> = ({}) => {
  const t = useTranslation();

  return (
    <div className="contact">
      <div className="contact__left">
        <Logo />
      </div>
      <div className="contact__right">
        <Message content={t!["footerContactButton"]} />
      </div>
    </div>
  );
};

export default Contact;
