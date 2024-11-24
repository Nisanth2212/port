import React from "react";
import "./SkillContainer.css";
import { Element } from "react-scroll";
import skillImge from "../../assets/skll-hd.png";
import { LinearProgress } from "@material-ui/core";
export const SkillContainer = () => {
  return (
    <Element className="skillscontaner" id="skills">
      <div className="skillscontaner__image">
        <img src={skillImge} alt="skill " />
      </div>
      <div className="skillscontaner__text">
        <h2>SKILLSET </h2>
        <div className="skillscontaner__skillset">
          <h4>React JS </h4>
          <div className="skillset__slider skillscontaner_slider1">
            <LinearProgress variant="determinate" value={78} />
          </div>
        </div>
        <div className="skillscontaner__skillset">
          <h4>JavaScript & TypeScript</h4>
          <div className="skillset__slider skillscontaner_slider2">
            <LinearProgress variant="determinate" value={69} />
          </div>
        </div>
        <div className="skillscontaner__skillset">
          <h4>Redux  </h4>
          <div className="skillset__slider skillscontaner_slider3">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
        <div className="skillscontaner__skillset">
          <h4>HTML5 </h4>
          <div className="skillset__slider skillscontaner_slider4">
            <LinearProgress variant="determinate" value={77} />
          </div>
        </div>
        <div className="skillscontaner__skillset">
          <h4>CSS3 & Tailwind CSS </h4>
          <div className="skillset__slider skillscontaner_slider5">
            <LinearProgress variant="determinate" value={65} />
          </div>
        </div>
        <div className="skillscontaner__skillset">
          <h4>Hooks & Axios </h4>
          <div className="skillset__slider skillscontaner_slider6">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillscontaner__skillset">
          <h4>WordPress </h4>
          <div className="skillset__slider skillscontaner_slider7">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        
      </div>
    </Element>
  );
};
