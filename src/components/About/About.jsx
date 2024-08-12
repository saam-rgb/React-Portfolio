import React from "react";
import AboutImage from "../../assets/images/dp-kanch.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-4">
          <img src={AboutImage} alt="" width="80%" />
        </div>
        <div className="col-md-8">
          <h1>About me</h1>
          <p>
            My name is Eleftherios Psitopoulos. I started learning how to
            program with C around the age of 12. One my first achievements was
            creating a RPG game that was played on the terminal. It was not
            something big, but it was at that moment I decided that technology
            will be a big part of my life. Learning how to use different
            programming languages and how to "think programmatically", I
            stumbled upon HTML and CSS. The concept of the internet and how it
            can connect people from all around the world fascinated me. Since
            then, I had the oportunity to work on various projects with a
            plethora of clients as a freelancer, as well as be part of highly
            motivated teams in international companies where my range of
            knowledge grew exponentially. Nowadays, I'm part of an
            entrepreneurial team within trivago. My role is senior front end
            developer and my responsibilities include ensuring high quality in
            the codebase, brainstorming for fresh ideas and a passion to
            constantly learn and grow. I strongly believe in teamwork and the
            wonders that can be achieved when we work together in trust of each
            other and proper feedback. Being lucky to be part of such teams,
            I've always had the feeling of achievemnt after work. The feeling of
            having made the world a little bit better through technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
