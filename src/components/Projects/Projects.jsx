import React from "react";
import Card from "./Card/Card";

const Projects = () => {
  return (
    <div className="projects p-5" id="projects">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h1>Projects</h1>
          <p>
            I take pride on all projects I have worked on. Each one has been a
            unique experience that enabled me to learn and grow while providing
            solutions and value to each client and end-user. Below is some of my
            latest work.
          </p>
        </div>
        <div className="col-md-8"></div>
      </div>
      <Card />
    </div>
  );
};

export default Projects;
