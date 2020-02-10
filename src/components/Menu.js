import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="Menu">
      <div className="Body">
        <ul>
          <div>
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div>
            <Link className="link" to="/portfolio">
              Portfolio
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
