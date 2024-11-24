import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h4>
          Nisanth <span>Dev</span>
        </h4>
      </div>
      <div className="header__right">
        <Link
          activeClass="active"
          to="about"
          smooth={true}
          duration={500}
          spy={true}
        >
          <h4>About</h4>
        </Link>
        <Link
          activeClass="active"
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
        >
          <h4>Skills</h4>
        </Link>
        <Link
          activeClass="active"
          to="project"
          smooth={true}
          duration={500}
          spy={true}
        >
          <h4>Project</h4>
        </Link>
        <Link
          activeClass="active"
          to="timeline"
          smooth={true}
          duration={500}
          spy={true}
        >
          <h4>TimeLine</h4>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
        >
          <h4>Contact</h4>
        </Link>
        <h4 className="header__rightbutton">
          <a href="mailto:nisanth.gunasekar@gmail.com">Mail To me</a>
        </h4>
      </div>
    </div>
  );
};
