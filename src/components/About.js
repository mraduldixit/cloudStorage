import React from "react";
import "./About.css";
import DP from "./OwnDP.jpeg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const About = () => {
  return (
    <div className="aboutMain">
      <div className="child">
        <div className="childleft">
          <img src={DP} width="320px" alt="Profile" />
        </div>
        <div className="childright">
          <div className="content">
            <h1>Mradul Dixit</h1>
            <p>
              I am currently pursuing my Bachelors in Information Technology
              Engineering from Institute of Engineering and Technology.I am an
              enthusiast Sports Programmer and Web developer with knowledge of
              technology like HTML, CSS, JavaScript, React.js, Node.js,
              firebase, MongoDB, Express.js etc.
            </p>
            <p>
              I like to develop amazing webApps.Currently I am focussing on
              increasing my skills and looking for Good Internship opprtunities.
            </p>
            <h3>Fullstack Developer and Sport Programmer</h3>
            <div className="socialAbout">
              <a
                href="https://github.com/mraduldixit"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare /> Github
              </a>
              <a
                href="https://www.linkedin.com/in/mradul-dixit-144b621b2/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;