import React from "react";
import AboutImage from "../../assets/images/dp-kanch.jpg";

const About = () => {
  return (
    <div className="about py-5 " id="about">
      <div className="container-md">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-4 d-flex align-items-center justify-content-center mb-4 ">
            <div className=" border border-2 " id="layer1">
              <div className="border border-2 " id="layer2">
                <div className="border border-2 " id="layer3">
                  <img src={AboutImage} alt="" className="about-image  " />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-between align-items-start">
            <h1 className="mb-4 heading">About me</h1>
            <div className="about-content">
              <p>
                Hii, I am Saam Sheron. One my first achievements was creating a
                Flutter music application where i can navihgate through
                sections. It was not something big, but it was at that moment I
                decided that technology will be a big part of my life. Learning
                how to use different programming languages and how to "think
                programmatically", I stumbled upon HTML and CSS. The concept of
                the internet and how it can connect people from all around the
                world fascinated me.
              </p>
              <p>
                I strongly believe in teamwork and the wonders that can be
                achieved when we work together in trust of each other and proper
                feedback. Being lucky to be part of such teams, I've always had
                the feeling of achievemnt after work. The feeling of having made
                the world a little bit better through technology.{" "}
              </p>
              <p>
                I am currently collaborating with a team I found on Codecademy
                community. We are working on an e-commerce clothing brand and it
                is in design phase. I am also interested in involving myself in
                group projects and Open Source Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
