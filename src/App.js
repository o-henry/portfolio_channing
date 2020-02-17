import React from "react";
import Router from "./routes/Router";
import Footer from "./components/Footer";
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
