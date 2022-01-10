import React, { useState } from "react";
import "./App.css";
import Home from "./compo/Home";
import About from "./compo/About";
import Blog from "./compo/Blog";
import Content from "./compo/Content";

const App = () => {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [blog, setBlog] = useState(false);
  const [content, setContent] = useState(false);

  return (
    <div className="App">
      <div className="side"></div>
      {home ? <Home /> : ""}
      {/* {about ? <About /> : null}
      {blog ? <Blog /> : null}
      {content ? <Content /> : null} */}
    </div>
  );
};

export default App;
