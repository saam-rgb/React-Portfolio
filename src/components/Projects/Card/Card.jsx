import React from "react";
import { projectDatas } from "../../../utils/projectDatas";

const Card = () => {
  return (
    <div className="card-card ">
      <div className="row">
        {projectDatas.map((projectData, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 " key={index}>
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
    </div>
  );
};

export default Card;
