// Skills Section

import React, { useState } from "react";
import skillsCollection, { ISkill, ITechnology } from "../resources/Skills_section/skillsCollection";

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = () => {
  const [openSkills, setOpenSkills] = useState<number[]>([]);

  const toggleSkill = (index: number) => {
    if (openSkills.includes(index)) {
      setOpenSkills(openSkills.filter((item) => item !== index));
    } else {
      setOpenSkills([...openSkills, index]);
    }
  };

  return (
    <>
      {skillsCollection.map((skill: ISkill, index: number) => {
        const isSkillOpen = openSkills.includes(index);

        return (
          <article className="skill-item" id={`skill-${skill.skillLabel}`} key={`skill-${skill.skillLabel}`}>
            <h3 onClick={() => {
                  toggleSkill(index); 
                }}>
              {skill.skillLabel}{" "}
              <span
                className={`arrow ${isSkillOpen ? "arrow-active" : ""}`}>
                &#10094;
              </span>
            </h3>

            <div
              className="skill-article"
              style={{
                transition: "all 1s",
                maxHeight: `${isSkillOpen ? "2500px" : "0px"}`,
                overflow: "hidden",
              }}
            >
              <ul>
                {skill.technologies.map((technology: ITechnology) => {
                  return (
                    <li key={technology.title}>
                      <h4>{technology.title}</h4>
                      <span>{technology.expirenceTime}</span>
                      {technology.conceptsKnows && (
                        <ul>
                          {technology.conceptsKnows.map((concept: string) => {
                            return (
                              <li key={concept}>
                                <span className="accent check-icon">&#10003;</span>{" "}
                                {concept}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        );
      })}
    </>
  );
};
