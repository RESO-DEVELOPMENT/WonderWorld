import EventDetail from "@/components/atoms/enentDetail";
import EventTitle from "@/components/atoms/eventTitle";
import React, { FC } from "react";
import "./index.scss";

import { useTranslation } from "@/components/hooks/useTranslation";
import Link from "next/link";

interface indexProps {}

const About: FC<indexProps> = ({}) => {
  const t = useTranslation();
  return (
    <div>
      <div className="about">
        <div className="about__top">
          <EventDetail content={t!["footerAboutTitle"]} />
          <h5>{t!["footerAboutContent"]}</h5>
        </div>
        <div className="about__bottom">
          <div className="icons">
            <Link href="#">
              <img src="/Twister.svg" alt="Twister" />
            </Link>
            <Link href="#">
              <img src="/fb.svg" alt="Facebook" />
            </Link>

            <Link href="#">
              <img src="/instagram.svg" alt="Instagram" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
