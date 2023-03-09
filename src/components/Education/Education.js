import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EducationList } from "../../helpers/EducationList";
import MyVerticalElement from "./MyVerticalElement";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <motion.div
      Style="min-height: 100vh border-bottom border-5 border-secondary border-opacity-50"
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <VerticalTimeline lineColor="#dc3545">
        {EducationList.map((item) => {
          return <MyVerticalElement key={item.id} {...item} />;
        })}
      </VerticalTimeline>
    </motion.div>
  );
};

export default Education;
