import React, { useState, useEffect } from "react";
import "./style.css";
import "./home.css";
import { MdOutlineMouse } from "react-icons/md";
import { useTransition, animated } from "react-spring";
import { btnHandle } from "../App";

const Home = (props) => {
  const [stat, setStat] = useState(false);

  useEffect(() => {
    setStat((stat) => !stat);
  }, []);

  // const transition = useTransition(stat, {
  //   from: { y: 0, opacity: 0, delay: 0 },
  //   enter: { y: -50, opacity: 1, delay: 300 },
  //   leave: { opacity: 0 },
  // });

  return (
    <div className="Home">
      <section className="photoZone">
        <div className="photo">
          <div className="pho" />
          <div className="text">
            Juhyoung Ryu
            <span className="innerText">
              <span className="hi">상상</span>을
              <span className="hi"> 현실</span>로 구현하는 사람
            </span>
          </div>
        </div>
      </section>
      <section className="arrowZone">
        {/* {transition((style, stat) =>
          stat ? (
            <animated.div
              style={style}
              className="item"
              onClick={() => {
                props.func("about");
              }}
            >
              <MdOutlineMouse className="iconArrow" />
              <p className="tt">Click</p>
            </animated.div>
          ) : (
            ""
          )
        )} */}
        <div
          className="item"
          onClick={() => {
            props.func("about");
          }}
        >
          <MdOutlineMouse className="iconArrow" />
          <p className="tt">Click</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
