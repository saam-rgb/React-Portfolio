import React from "react";
import Navbar from "../Navbar/Navbar";
import HomeImage from "../../assets/images/dp-bg-reg.png";

const Home = () => {
  return (
    <div className="home ">
      <Navbar />
      <div className="container-md ">
        <div className="row d-flex align-items-center">
          <div className="col-md-5">
            <h1>Saam Sheron</h1>
            <p>
              <strong>Aspiring Software Developer. UI Designer</strong>
            </p>
            <p>
              I believe great things can be achieved through the use of
              technology and research. But those are merely the tools. Behind
              the tools are the people. Teamwork and passion, those are what
              matter the most.
            </p>
            <button className="btn ">Resume</button>
          </div>
          <div className=" col-md-7  ">
            <img className="w-100" src={HomeImage} alt="saam" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
