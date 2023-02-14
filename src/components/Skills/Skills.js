import React from "react";
import IndSkill from "./IndSkill";
import { SkillsHelper } from "../../helpers/SkillsHelper";
const Skills = () => {
  return (
    <div
      className="border-bottom border-1 pb-5 border-secondary border-opacity-50"
      Style="min-height: 100vh"
    >
      <div className="row justify-content-center">
        {SkillsHelper.map((item) => {
          return <IndSkill key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
