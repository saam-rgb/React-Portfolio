import React from "react";
import Card from "./Card/Card";

const Projects = () => {
  return (
    <div className="projects py-5 " id="projects">
      <div className="container-md">
        <h1 className="heading mb-4">Projects</h1>
        <center>
          <div className="project-desc mb-4">
            <center>
              <p>
                I take pride on all projects I have worked on. Each one has been
                a unique experience that enabled me to learn and grow while
                providing solutions and value to each client and end-user. Below
                is some of my latest work.
              </p>
            </center>
          </div>
        </center>
      </div>
      <Card />
    </div>
  );
};

export default Projects;
