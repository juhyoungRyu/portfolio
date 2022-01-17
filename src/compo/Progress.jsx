import React, { useState } from "react";
import "./progress.css";

const Progress = (props) => {
  return (
    <div className="proCon">
      <div className={props.name}></div>
      <span>{props.pro}%</span>
    </div>
  );
};

export default Progress;
