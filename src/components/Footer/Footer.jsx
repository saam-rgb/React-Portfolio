import React from "react";
import "./Footer.css";
import logo from "../../assets/images/port-logo.png";

const Footer = () => {
  return (
    <footer className="pb-4">
      <div className="socials ">
        <ul className="d-flex ">
          <li>
            <a href="https://www.linkedin.com/in/saam-sheron/">Linkedin</a>
          </li>
          <li>
            <a href="https://www.instagram.com/saam_sheron/">Instagram</a>
          </li>
          <li>
            <a href="https://github.com/saam-rgb">Github</a>
          </li>
          <li>
            <a href="https://dev.to/saamsheron">Dev.to</a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/16257797/saam-sheron">
              Stack Overflow
            </a>
          </li>
        </ul>
      </div>
      <p>Made with care and 💛 by Saam Sheron</p>
    </footer>
  );
};

export default Footer;
