import React from "react";
import { Route } from "react-router-dom";
import { Home, About, Portfolio, Blinker, CrunchPrice, Local } from "../pages";

const Router = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/blinker" component={Blinker} />
      <Route path="/crunch" component={CrunchPrice} />
      <Route path="/local" component={Local} />
    </div>
  );
};

export default Router;
