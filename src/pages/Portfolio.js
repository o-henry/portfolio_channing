import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Portfolio.scss";

const Portfolio = () => {
  const [clicked, setClicked] = useState(false);
  console.log("clicked", clicked);
  return (
    <div className="Portfolio">
      <div className="portfolio-body">
        <div className="body-top">
          <span className="body-top-text">
            <Link
              className="link"
              to="/blinker"
              exact={true}
              onClick={() => setClicked(true)}
            >
              BLINKER
            </Link>
          </span>
          <span className="body-top-text">
            <Link className="link" exact={true} to="/crunch">
              CRUNCH PRICE
            </Link>
          </span>
          <span className="body-top-text">
            <Link className="link" exact={true} to="/local">
              LOCAL
            </Link>
          </span>
        </div>
        {/* <div className="body-bottom">TABLE OF CONTENTS</div> */}
        <div className={clicked ? "Black" : "body-bottom"}>
          TABLE OF CONTENTS
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
