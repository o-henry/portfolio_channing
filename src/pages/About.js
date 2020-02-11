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
        <div className="Header">EDUCATION AND ACTIVITIES</div>
        <div className="education">
          <div className="text">
            코드 스테이츠(부트캠프) Immersive Course 14 | 2019
            <br />
            AWS 101, 201 Seminar | 2019
            <br />
            AWS Webinar | 2019
          </div>
        </div>
        <div className="Header">SKILLS</div>
        <span className="subtitle">PROGRAMMING LANGUAGES & TOOLS</span>
        <div className="Icon">
          <div className="InnerPosition">
            <FaAws size={50} />
          </div>
          <div className="InnerPosition">
            <FaNode size={50} />
          </div>
          <div className="InnerPosition">
            <FaJsSquare size={50} />
          </div>
          <div className="InnerPosition">
            <FaReact size={50} />
          </div>
          {/* <div className="InnerPosition">
            <FaHtml5 size={50} />
          </div>
          <div className="InnerPosition">
            <FaCss3Alt size={50} />
          </div> */}
          <div className="InnerPosition">
            <DiMysql size={50} />
          </div>
          <div className="InnerPosition">
            <DiMongodb size={50} />
          </div>
        </div>
        <span className="subtitle">PROJECT MANAGEMENT</span>
        <div className="InnerText"> Agile Development & Scrum</div>
      </div>
    </div>
  );
};

export default About;
