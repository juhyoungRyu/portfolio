import React, { useState } from "react";
import "./style.css";
import "./about.css";
import ReactCardFlip from "react-card-flip";
import { useTransition, animated } from "react-spring";
const About = () => {
  const [visible1, setVisible1] = useState(false);
  const transition = useTransition(visible1, {
    from: {},
    enter: {},
    leave: {},
  });

  return (
    <div className="About">
      <button
        className="triger"
        onClick={() => {
          setVisible1((visible1) => !visible1);
        }}
      >
        {visible1 ? "mount" : "no-mount"}
      </button>
      <div className="conta">
        {transition((style, itemBox) =>
          itemBox ? <animated.div style={style} className="itemBox" /> : ""
        )}
      </div>
    </div>
  );
};

export default About;
