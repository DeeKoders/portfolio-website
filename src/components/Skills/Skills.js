import React from "react";
import IndSkill from "./IndSkill";
import { SkillsHelper } from "../../helpers/SkillsHelper";
const Skills = () => {
  return (
    <div
      className="border-bottom border-1 pb-5 border-secondary border-opacity-50"
      Style="min-height: 100vh"
    >
      <h1 className="text-uppercase text-center fw-bold mt-5">My Skills</h1>
      <hr className="mb-5" />

      <div className="row justify-content-center">
        {SkillsHelper.map((item) => {
          return <IndSkill key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
