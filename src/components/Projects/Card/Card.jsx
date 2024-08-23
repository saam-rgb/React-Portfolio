import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
  projectDatas,
  uiProjects,
  colabProjects,
} from "../../../utils/projectDatas";

const Card = () => {
  return (
    <div className="card-card container-md">
      <Tabs
        defaultActiveKey="code"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="code" title="Frontend & Backend">
          <div className="row mb-4">
            {projectDatas.map((projectData, index) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 "
                key={index}>
                <div className="card">
                  <img
                    src={projectData.image}
                    className="card-img-top object-fit-cover"
                    alt={projectData.name + " image"}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {projectData.name.length > 25
                        ? `${projectData.name.slice(0, 25)} ...`
                        : projectData.name}
                    </h5>
                    <p className="card-text">{projectData.language + " "}</p>

                    <div className="card-btn">
                      <a href={projectData.site} className="btn me-2 mb-2">
                        View Site
                      </a>
                      <a href={projectData.github} className="btn mb-2 s-btn">
                        View Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey="ui" title="UI">
          <div className="row mb-4">
            {uiProjects.map((uiProject, index) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 "
                key={index}>
                <div className="card">
                  <img
                    src={uiProject.image}
                    className="card-img-top object-fit-cover"
                    alt={uiProject.name + " image"}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {uiProject.name.length > 25
                        ? `${uiProject.name.slice(0, 25)} ...`
                        : uiProject.name}
                    </h5>
                    <p className="card-text">{uiProject.language + " "}</p>

                    <div className="card-btn">
                      <a href={uiProject.prototype} className="btn me-2 mb-2">
                        View Prototype
                      </a>
                      <a href={uiProject.figma} className="btn mb-2 s-btn">
                        View Figma
                      </a>
                    </div>
                    <small>
                      <strong>{uiProject.onGoing}</strong>
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey="open-source" title="Open Source">
          <div className="row mb-4">
            {colabProjects.map((colabProject, index) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 "
                key={index}>
                <div className="card">
                  <img
                    src={colabProject.image}
                    className="card-img-top object-fit-cover"
                    alt={colabProject.name + " image"}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {colabProject.name.length > 25
                        ? `${colabProject.name.slice(0, 25)} ...`
                        : colabProject.name}
                    </h5>
                    <p className="card-text">{colabProject.language + " "}</p>

                    <div className="card-btn">
                      <a href={colabProject.site} className="btn me-2 mb-2">
                        View Site
                      </a>
                      <a href={colabProject.github} className="btn mb-2 s-btn">
                        View Source Code
                      </a>
                    </div>
                    <small>
                      <strong>{colabProject.onGoing}</strong>
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tab>
      </Tabs>

      <p>* - Ongoing project</p>
    </div>
  );
};

export default Card;
