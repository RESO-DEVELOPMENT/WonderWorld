import React, { FC, useState } from "react";
import "./index.scss";
import ActivitiesItem from "@/components/molecules/activitiesItem";
import ActivitiesDetail from "@/components/molecules/activitiesDetail";
import Buttonactive from "@/components/molecules/Button_active";
import { useTranslation } from "@/components/hooks/useTranslation";
interface ActivitiesAreaProps {}

const ActivitiesArea: FC<ActivitiesAreaProps> = ({}) => {
  const t = useTranslation();
  const activitiesInformation = [
    {
      imageSrc: "/active/activities1.jpg",

      title: t!["activitiesItem01Title"],
      content: t!["activitiesItem01Content"],
    },
    {
      imageSrc: "/active/activities2.jpg",
      title: t!["activitiesItem02Title"],
      content: t!["activitiesItem02Content"],
    },
    {
      imageSrc: "/active/activities3.jpg",
      title: t!["activitiesItem03Title"],
      content: t!["activitiesItem03Content"],
    },
    {
      imageSrc: t!["activitiesItem04Title"],
      title: `San hô mềm là gì?`,
      content: t!["activitiesItem04Content"],
    },
  ];
  const activitiesDetail1 = {
    imageSrc: `/active/active1.jpg`,
    title: t!["activitiesDetail01Title"],
    content: [
      t!["activitiesDetail01Content01"],
      t!["activitiesDetail01Content02"],
    ],
  };
  const activitiesDetail2 = {
    imageSrc: `/active/active2.jpg`,
    title: t!["activitiesDetail02Title"],
    content: [
      t!["activitiesDetail02Content01"],
      t!["activitiesDetail02Content02"],
    ],
  };
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Buttonactive
        OnClickpage1={() => setCurrentPage(2)}
        OnClickpage2={() => setCurrentPage(3)}
      >
        {t!["activitiesButtonActiveTitle"]}
      </Buttonactive>

      {currentPage === 1 ? (
        <div className="activities-area">
          {activitiesInformation.map(({ imageSrc, title, content }, index) => {
            return (
              <div className="activities-area-item" key={index}>
                <ActivitiesItem
                  imageSrc={imageSrc}
                  title={title}
                  content={content}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
      {currentPage === 2 ? (
        <ActivitiesDetail
          imageSrc={activitiesDetail1.imageSrc}
          title={activitiesDetail1.title}
          content={activitiesDetail1.content}
          buttonPosition="insite"
        />
      ) : (
        <></>
      )}
      {currentPage === 3 ? (
        <ActivitiesDetail
          imageSrc={activitiesDetail2.imageSrc}
          title={activitiesDetail2.title}
          content={activitiesDetail2.content}
          buttonPosition="insite"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ActivitiesArea;
