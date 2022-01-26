import React, { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";

const Card = (props) => {
  useEffect(() => {
    if (props.icon === "BsGithub") {
      setGitHub(true);
    }
  });

  const [github, setGitHub] = useState(false);

  return (
    <div className="cardIn">
      <div className="blogBtn1">{props.type}</div>

      <div className="blogBtn2">
        <div className="blogAction">
          {github ? <BsGithub /> : ""}
          JuhyoungRyu
        </div>
      </div>
    </div>
  );
};

export default Card;
