import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { RiCopyrightLine } from "react-icons/ri";
import { BsEmojiDizzy } from "react-icons/bs";
import "./Comp.css";

const Side = (props) => {
  return (
    <div className="side">
      <div className="titleCon">
        <p className="title">Turtle</p>
      </div>
      <div className="iconCon">
        <button className="homeIcon">
          <AiOutlineHome className="icon" />
          <p className="text">Home</p>
        </button>

        <button className="homeIcon">
          <AiOutlineInfoCircle className="icon" />
          <p className="text">About</p>
        </button>

        <button className="homeIcon">
          <CgNotes className="icon" />
          <p className="text">Blog</p>
        </button>

        <button className="homeIcon">
          <BsEmojiDizzy className="icon" />
          <p className="text">Content</p>
        </button>
      </div>
      <div className="last">
        <RiCopyrightLine className="copy" />
        <span className="span"> 2022 </span>
        Turtle Portfoilo
      </div>
    </div>
  );
};

export default Side;
