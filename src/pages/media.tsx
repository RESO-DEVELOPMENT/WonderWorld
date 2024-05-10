import { FC } from "react";
import "../styles/media.scss";
import PageTemplate from "@/components/templates/page-template";
const Media: FC = () => {
  return (
    <div className="media-area">
      <PageTemplate background="/backgroundTemplate/bg-media-page.jpg">
        <div id="background-wrap">
          <div className="bubble x1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bubble x2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bubble x3">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bubble x4">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bubble x5">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bubble x6">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bubble x7">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bubble x8">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bubble x9">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bubble x10">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bubble x11">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bubble x12">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="media">
          {/* <img data-aos="flip-left"   className="media-background-image" src="/bg-media-page.svg" /> */}
        </div>
      </PageTemplate>
    </div>
  );
};

export default Media;
