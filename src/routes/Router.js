import React from "react";
import { Route } from "react-router-dom";
import { Home, About, Portfolio } from "../pages";

const Router = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
    </div>
  );
};

export default Router;
