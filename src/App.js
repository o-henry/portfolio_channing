import React from "react";
import Router from "./routes/Router";
import { Footer } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router />
      <Footer />
    </div>
  );
}

export default App;
