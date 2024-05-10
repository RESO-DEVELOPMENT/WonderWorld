import React, { FC } from "react";
import "./index.scss";

interface indexProps {
  content: string;
}

const EventDetail: FC<indexProps> = ({ content }) => {
  return (
    <div>
      <p className="eventProduct">
        {content}
        <br className="eventProduct-break" /> Wooder World
      </p>
    </div>
  );
};

export default EventDetail;
