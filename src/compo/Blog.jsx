import React, { useState } from "react";
import "./style.css";
import "./blog.css";
import Card from "./Card";
import Wave from "react-wavify";
import { GiTurtleShell } from "react-icons/gi";
import { GiTurtle } from "react-icons/gi";

const Blog = (props) => {
  const [turtleS, setTurtleS] = useState(false);

  const goContent = () => {
    props.func("Content");
  };

  return (
    <div className="Blog">
      <div className="iconConBlog">
        {turtleS ? (
          <GiTurtle className="iconBlogTur" color="white" size={30} />
        ) : (
          <GiTurtleShell
            className="iconBlogShell"
            color="white"
            size={30}
            onClick={() => {
              setTurtleS((turtleS) => !turtleS);
              setTimeout(goContent, 5010);
            }}
          />
        )}
      </div>
      <div className="cardZoneBlog">
        <Card name={"Github"} icon={true} className="blogCard" />
        <Card name={"velog"} icon={false} className="blogCard" />
      </div>

      <Wave
        fill="#64f293"
        paused={false}
        options={{
          height: 10,
          amplitude: 20,
          speed: 0.25,
          points: 3,
        }}
        className="wave"
      />
    </div>
  );
};

export default Blog;
