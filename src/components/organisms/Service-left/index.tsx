import { FC } from "react";
import BigCard from "@/components/atoms/bigCard";
import "./index.scss";
import ContentService from "@/components/molecules/contentService-left";
import ContentServiceLeft from "@/components/molecules/contentService-left";
import "aos/dist/aos.css";
interface indexProps {
  id?: string;
}
const ServiceLeft: FC<indexProps> = ({ id }) => {
  return (
    <div className="ResService" id={`${id}`} data-aos="zoom-in">
      <div className="ResService-Left">
        <ContentServiceLeft />
      </div>
      <div className="ResService-Right">
        <BigCard src="/sanho.svg" style={{ marginLeft: "70px" }} />
      </div>
    </div>
  );
};

export default ServiceLeft;
