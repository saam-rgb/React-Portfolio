import React from "react";
import {
  projectDatas,
  uiProjects,
  colabProjects,
} from "../../../utils/projectDatas";

const Card = () => {
  return (
    <div className="card-card container-md">
      <h2 className="mb-4">Personal Projects - Frontend & Backend</h2>
      <div className="row mb-4">
        {projectDatas.map((projectData, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 " key={index}>
            <div className="card">
              <img
                src={projectData.image}
                className="card-img-top object-fit-cover"
                alt={projectData.name + " image"}
              />
              <div className="card-body">
                <h5 className="card-title">{projectData.name}</h5>
                <p className="card-text">{projectData.language + " "}</p>

                <div>
                  <a href={projectData.site} className="btn me-2 mb-2">
                    View Site
                  </a>
                  <a href={projectData.github} className="btn mb-2">
                    View Source Code
                  </a>
                </div>
                <small>
                  <strong>{projectData.onGoing}</strong>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mb-4">Personal Projects - UI</h2>
      <div className="row mb-4">
        {uiProjects.map((uiProject, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 " key={index}>
            <div className="card">
              <img
                src={uiProject.image}
                className="card-img-top object-fit-cover"
                alt={uiProject.name + " image"}
              />
              <div className="card-body">
                <h5 className="card-title">{uiProject.name}</h5>
                <p className="card-text">{uiProject.language + " "}</p>

                <div>
                  <a href={uiProject.prototype} className="btn me-2 mb-2">
                    View Prototype
                  </a>
                  <a href={uiProject.figma} className="btn mb-2">
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
      <h2 className="mb-4">Colab Projects</h2>
      <div className="row mb-4">
        {colabProjects.map((colabProject, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 " key={index}>
            <div className="card">
              <img
                src={colabProject.image}
                className="card-img-top object-fit-cover"
                alt={colabProject.name + " image"}
              />
              <div className="card-body">
                <h5 className="card-title">{colabProject.name}</h5>
                <p className="card-text">{colabProject.language + " "}</p>

                <div>
                  <a href={colabProject.site} className="btn me-2 mb-2">
                    View Site
                  </a>
                  <a href={colabProject.github} className="btn mb-2">
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
    </div>
  );
};

export default Card;
