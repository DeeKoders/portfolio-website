import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EducationList } from "../../helpers/EducationList";
import MyVerticalElement from "./MyVerticalElement";

const Education = () => {
  return (
    <div Style="min-height: 100vh border-bottom border-5 border-secondary border-opacity-50">
      <VerticalTimeline lineColor="#dc3545">
        {EducationList.map((item) => {
          return <MyVerticalElement key={item.id} {...item} />;
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
