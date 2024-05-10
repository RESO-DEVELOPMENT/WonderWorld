import React, { FC } from "react";
import "./index.scss";
import EventTitle from "@/components/atoms/eventTitle";
import EventDetail from "@/components/atoms/enentDetail";
import OrderCard from "@/components/atoms/orderCard";
import Link from "next/link";
import { useTranslation } from "@/components/hooks/useTranslation";
import Image from "next/image";

interface indexProps {}

const ContentServiceRight: FC<indexProps> = () => {
  const t = useTranslation();
  return (
    <div className="contentService">
      <div className="contentService-wrap">
        <EventTitle content={t!["projectItemRightTitle"]}>
          <OrderCard content="02" position="left" />
        </EventTitle>
        <div className="contentService-top">
          <EventDetail content={t!["projectItemRightDetail01"]} />
        </div>

        <div className="contentService-bottom">
          <EventDetail content={t!["projectItemRightDetail02"]} />
          <div className="icon">
            <Link href="#">{t!["projectItemUpdating"]}</Link>
            <Image
              data-aos="flip-left"
              src="/arrow_downward_24px.svg"
              alt=""
              width="0"
              height="0"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentServiceRight;
