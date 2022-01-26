import React from "react";
import { BsGithub } from "react-icons/bs";

const Card = (props) => {
  return (
    <div className="cardIn">
      <div className="blogBtn1">{props.name}</div>

      <div className="blogBtn2">
        <div className="blogAction">
          {props.icon ? <BsGithub /> : <BsGithub />}
          JuhyoungRyu
        </div>
      </div>
    </div>
  );
};

export default Card;
