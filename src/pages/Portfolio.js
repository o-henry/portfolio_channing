import React from "react";
import { Content } from "../components";
import { Link } from "react-router-dom";

import "./Portfolio.scss";
import "../components/Menu.scss";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="portfolio-body">
        <div className="body-top">
          <div className="body-top-grid">
            <span className="body-top-text">
              <Link className="link" to="/blinker">
                BLINKER
              </Link>
            </span>
            <span className="body-top-text">CRUNCH PRICE</span>
            <span className="body-top-text">LOCAL</span>
          </div>
        </div>
        <div className="body-bottom">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
