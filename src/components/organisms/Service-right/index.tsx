import { FC } from "react";
import BigCard from "@/components/atoms/bigCard";
import "./index.scss";
import ContentServiceRight from "@/components/molecules/contentService-right";
import "aos/dist/aos.css";

interface indexProps {
  id?: string;
}

const ServiceRight: FC<indexProps> = ({ id }) => {
  return (
    <div className="ResService-RightSide" id={`${id}`} data-aos="zoom-in">
      <div className="ResService-RightSide__Left">
        <BigCard src="/sanho2.svg" style={{ marginLeft: "70px" }} />
      </div>
      <div className="ResService-RightSide__Right">
        <ContentServiceRight />
      </div>
    </div>
  );
};

export default ServiceRight;
