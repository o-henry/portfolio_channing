import React from "react";
import Router from "./routes/Router";
import { Footer } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router />
      <Footer />
    </div>
  );
}

export default App;
