import React from 'react'
import "./Timeline.css";
import { Element } from 'react-scroll';
export const Timeline = () => {
    const experiences = [
        {
          role: "Bold BI",
          date: "Mar 2021 — dec 2021",
          skills:
            "React , HTML & CSS, REST API, Redux , JavaScript, TypeScript",
        },
        {
          role: "EJ2-Syncfusion Control",
          date: "Jan 2022 — present",
          skills:
            "React , HTML & CSS, REST API, Redux , JavaScript, TypeScript",
        },

      ];
    
      return (
        <Element className="timeline__container" id="timeline">
        <div className="timeline-container">
          <h1>Timeline</h1>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h2>{exp.role}</h2>
                  <p className="date">{exp.date}</p>
                  <p className="skills">{exp.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Element>
      );
}
