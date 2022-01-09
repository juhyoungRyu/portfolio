import "./App.css";
import React from "react";
import Side from "./components/Side";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="App">
      <Side className="side" />
      <div className="main">
        <Home />
        <About />
        <Blog />
        <Content />
      </div>
    </div>
  );
};

export default App;
