import React from "react";
import { FaGoogle, FaGithub, FaLinkedin, FaBlogger } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <div>
      <span className="Contact">
        <FaGithub size={26} />
      </span>
      <span className="Contact">
        <FaGoogle size={26} />
      </span>
      <span className="Contact">
        <FaLinkedin size={28} />
      </span>
      <span className="Contact">
        <FaBlogger size={28} />
      </span>
    </div>
  );
};

export default Contact;
