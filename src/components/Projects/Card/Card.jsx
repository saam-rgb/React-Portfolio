import React from "react";
import { projectDatas } from "../../../utils/projectDatas";

const Card = () => {
  return (
    <div className="card-card ">
      <div className="row">
        {projectDatas.map((projectData, index) => (
          <div className="col-md-3" key={index}>
            <div className="card" style={{ width: 18 + "rem" }}>
              <img
                src={projectData.image}
                className="card-img-top"
                alt={projectData.name + " image"}
              />
              <div className="card-body">
                <h5 className="card-title">{projectData.name}</h5>
                <p className="card-text">{projectData.language + " "}</p>

                <div>
                  <a href={projectData.site} className="btn btn-primary me-2">
                    View Site
                  </a>
                  <a href={projectData.github} className="btn btn-primary">
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
    </div>
  );
};

export default Card;
