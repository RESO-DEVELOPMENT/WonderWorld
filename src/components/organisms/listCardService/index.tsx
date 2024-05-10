import ServiceCard from "@/components/atoms/serviceCard";
import React, { FC } from "react";
import "./index.scss";
import Message from "@/components/atoms/message";
import Mess from "@/components/atoms/message";
import "aos/dist/aos.css";
import { useTranslation } from "@/components/hooks/useTranslation";
import Button from "@/components/atoms/button";

interface indexProps {}

const ListCardService: FC<indexProps> = ({}) => {
  const t = useTranslation();
  return (
    <div>
      <div className="btn-price">
        <Button href="./" style="staff">
          {t!["servicePageTitle"]}
        </Button>
      </div>
      <div
        className="wrap-listcard"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1300"
      >
        <ServiceCard
          imgFav="red"
          imgHref="/tholan1.jpg"
          title={t!["serviceItem01Title"]}
          ct1={`1. ${t!["serviceItem01Text01"]}`}
          ct2={`2. ${t!["serviceItem01Text02"]}`}
          ct3={`3. ${t!["serviceItem01Text03"]}`}
          ct4={`4. ${t!["serviceItem01Text04"]}`}
          ct5={`5. ${t!["serviceItem01Text05"]}`}
          ct6={`6. ${t!["serviceItem01Text06"]}`}
          ct7={`7. ${t!["serviceItem01Text07"]}`}
        />

        <ServiceCard
          imgFav="white"
          imgHref="/tholan2.jpg"
          title={t!["serviceItem02Title"]}
          ct1={`1. ${t!["serviceItem02Text01"]}`}
          ct2={`2. ${t!["serviceItem02Text02"]}`}
          ct3={`3. ${t!["serviceItem02Text03"]}`}
          ct4={`4. ${t!["serviceItem02Text04"]}`}
          ct5={`5. ${t!["serviceItem02Text05"]}`}
          ct6={`6. ${t!["serviceItem02Text06"]}`}
        />
        <ServiceCard
          imgFav="white"
          imgHref="/tholan2.jpg"
          title={t!["serviceItem03Title"]}
          ct1={`${t!["serviceItem03Text01"]}`}
        />
      </div>
    </div>
  );
};

export default ListCardService;
