import React from "react";
import { Element } from "react-scroll";
import { IconButton } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import "./Contact.css";
export const Contact = () => {
  return (
    <Element id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact__container">
        <p>
          Email:{" "}
          <a
            href="mailto:nisanth.gunasekar@gmail.com"
            rel="noopener noreferrer"
          >
            Nisanth Email
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Nisanth2212"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub Profile
          </a>
        </p>
        <div className="contact__icons">
          <a
            href="www.linkedin.com/in/nisanth-gunasekaran-ba5757149"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton> 
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href="https://github.com/Nisanth2212"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHub />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};
