import React from "react";
import { Route } from "react-router-dom";
import { Home, About } from "../pages";

const Router = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default Router;
