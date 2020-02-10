import React from "react";
import me from "../public/me.jpeg";
import {
  FaAws,
  FaNode,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare
} from "react-icons/fa";
import { DiMysql, DiMongodb } from "react-icons/di";
import "./About.scss";

const About = () => {
  return (
    <div className="About">
      <img src={me} alt="Channing" />
      <div className="Bio">
        <br></br><div className="Header">EDUCATION AND ACTIVITIES</div>
        <div className="education">
          Code States(bootcamp) Immersive Course 14 ( 2019.07.22 - 2019.10.19 )
          <br></br>AWS 101 세미나 ( 2019.10.14 )<br></br>AWS 201 세미나 (
          2019.10.28 )<br></br> AWS 웨비나 ( 2019.11.14 )
        </div>
        <div className="Header">SKILLS</div>
        <span className="subtitle">PROGRAMMING LANGUAGES & TOOLS</span>
        <div className="Icon">
          <FaAws size={50} />
          <FaNode size={50} />
          <FaReact size={50} />
          <FaHtml5 size={50} />
          <FaCss3Alt size={50} />
          <FaJsSquare size={50} />
          <DiMysql size={50} />
          <DiMongodb size={50} />
        </div>
        <span className="subtitle">PROJECT MANAGEMENT</span>
      </div>
    </div>
  );
};

export default About;
