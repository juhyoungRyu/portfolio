import React, { useState } from "react";
import "./App.css";
import Home from "./compo/Home";
import About from "./compo/About";
import Blog from "./compo/Blog";
import Content from "./compo/Content";
import { RiHomeSmileLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { CgSmileMouthOpen } from "react-icons/cg";
import { FaRegCopyright } from "react-icons/fa";

const App = () => {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [blog, setBlog] = useState(false);
  const [content, setContent] = useState(false);

  const btnHandle = (where) => {
    if (where === "home") {
      setHome(true);
      setAbout(false);
      setBlog(false);
      setContent(false);
    } else if (where === "about") {
      setHome(false);
      setAbout(true);
      setBlog(false);
      setContent(false);
    } else if (where === "blog") {
      setHome(false);
      setAbout(false);
      setBlog(true);
      setContent(false);
    } else {
      setHome(false);
      setAbout(false);
      setBlog(false);
      setContent(true);
    }
  };

  return (
    <div className="App">
      {/* <div className={about ? "side2" : "side"}> */}
      <div className="side">
        <div className="titleCon">
          <p className="title">Turtle</p>
        </div>
        <div className="btnCon">
          <button className="btn" onClick={() => btnHandle("home")}>
            <RiHomeSmileLine className="icon" />
            {home ? <p className="sub1">Home</p> : <p className="sub">Home</p>}
          </button>
          <button className="btn" onClick={() => btnHandle("about")}>
            <AiOutlineInfoCircle className="icon" />
            {about ? (
              <p className="sub1">About</p>
            ) : (
              <p className="sub">About</p>
            )}
          </button>
          <button className="btn" onClick={() => btnHandle("blog")}>
            <CgNotes className="icon" />
            {blog ? <p className="sub1">Blog</p> : <p className="sub">Blog</p>}
          </button>
          <button className="btn" onClick={() => btnHandle("content")}>
            <CgSmileMouthOpen className="icon" />
            {content ? (
              <p className="sub1">Content</p>
            ) : (
              <p className="sub">Content</p>
            )}
          </button>
        </div>
        <div className="cpCon">
          <FaRegCopyright color="white" opacity={0.5} />
          <p className="copyright">2022 turtle portfolio</p>
        </div>
      </div>

      <div className="line" />

      {home ? <Home func={btnHandle} /> : ""}
      {about ? <About func={btnHandle} /> : ""}
      {blog ? <Blog func={btnHandle} /> : ""}
      {content ? <Content /> : ""}
    </div>
  );
};

export default App;
