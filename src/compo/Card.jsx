import React from "react";
import { BsGithub } from "react-icons/bs";

const Card = (props) => {
  const githubStyle = { backgroundColor: "black" };
  const velogStyle = { color: "rgb(18 184 134)", backgroundColor: "white" };

  const goLink = (st) => {
    st
      ? window.open("https://github.com/juhyoungRyu")
      : window.open("https://velog.io/@turtle_dev");
  };

  return (
    <div className="cardIn">
      <div
        className={props.icon ? "blogBtn1" : "blogBtn11"}
        style={props.icon ? githubStyle : velogStyle}
      >
        {props.name}
      </div>

      <div className="blogBtn2">
        <div className="blogAction">
          {props.icon ? (
            <div
              style={{
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px",
              }}
              onClick={() => {
                goLink(true);
              }}
            >
              <BsGithub className="iconCard" />
              JuhyoungRyu
            </div>
          ) : (
            <div
              style={{
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px",
                // color: "rgb(18 184 134)",
              }}
              onClick={() => {
                goLink(false);
              }}
            >
              <BsGithub className="iconCard" />
              turtle_dev.log
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
