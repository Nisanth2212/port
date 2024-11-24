import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";
export const TopContent = () => {
  return (
    <div className="topContent">
      <div className="topContent__container">
        <h2>
          Mr <span>Nisanth</span> Gunasekaran{" "}
        </h2>
        <p>
          Experienced Frontend Developer with 3+ years of expertise in React,
          Redux, JavaScript, TypeScript, and modern UI frameworks like Tailwind
          CSS. Skilled in building dynamic, user-focused applications with a
          strong focus on performance and scalability.{" "}
        </p>
        <a
          href="https://drive.google.com/file/d/1aIH7ZXWEz5HpPOcPkU9K8Nlgy4VVlHzg/view?usp=drive_link"
          target="_blank" rel="noopener noreferrer"
        >
          <button className="topContent__download">Resume CV</button>
        </a>
        <Link to="project" smooth={true} duration={500}>
          <button className="topContent__work">My Project </button>
        </Link>
      </div>
    </div>
  );
};
