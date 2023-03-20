import React from "react";
import { motion } from "framer-motion";
import { ProjectsHelper } from "../../helpers/ProjectsHelper";
import IndProject from "./IndProject";
function Projects() {
  return (
    <motion.div
      className="full-container"
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center fs-1 fw-bold mb-5">
        Take A Look At My Projects
      </div>
      <div className="row justify-content-center">
        {ProjectsHelper.map((item) => {
          return <IndProject key={item.id} {...item} />;
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
