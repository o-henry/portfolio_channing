import React from "react";
import { FaGoogle, FaGithub, FaLinkedin, FaBlogger } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="Ani-hover">
      <span className="Contact">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:c.henry.9209@gmail.com"
        >
          <FaGoogle size={20} />
        </a>
      </span>

      <span className="Contact">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/o-henry"
        >
          <FaGithub size={20} />
        </a>
      </span>

      <span className="Contact">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/chan-haeng-l-b12089180/"
        >
          <FaLinkedin size={20} />
        </a>
      </span>
      <span className="Contact">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://o-henry.github.io/"
        >
          <FaBlogger size={20} />
        </a>
      </span>
    </div>
  );
};

export default Contact;
