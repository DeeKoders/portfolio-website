import React from "react";
import IndSkill from "./IndSkill";
import { SkillsHelper } from "../../helpers/SkillsHelper";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <motion.div
      className="border-bottom border-1 pb-5 border-secondary border-opacity-50"
      Style="min-height: 100vh"
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row justify-content-center">
        {SkillsHelper.map((item) => {
          return <IndSkill key={item.id} {...item} />;
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
