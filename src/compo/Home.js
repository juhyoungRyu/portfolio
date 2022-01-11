import React, { useState, useEffect } from "react";
import "./style.css";
import "./home.css";
import { MdOutlineMouse } from "react-icons/md";
import { useTransition, animated } from "react-spring";

const Home = () => {
  const [stat, setStat] = useState(true);
  const transition = useTransition(stat, {
    from: { opacity: 0, y: 0 },
    enter: { opacity: 0.8, y: -50 },
    leave: { opacity: 0, y: 0 },
  });

  useEffect(() => {
    setInterval(() => setStat((stat) => !stat), 2000);
  }, []);

  return (
    <div className="Home">
      <section className="photoZone">
        <div className="photo">
          <div className="pho" />
          <div className="text">
            Juhyoung Ryu
            <span className="innerText">
              <span className="hi">상상</span>을{" "}
              <span className="hi">현실</span>로 구현하는 사람
            </span>
          </div>
        </div>
      </section>
      <section className="arrowZone">
        {transition((style, stat) =>
          stat ? (
            <animated.div
              style={style}
              className="item"
              onClick={() => console.log("work")}
            >
              <MdOutlineMouse className="iconArrow" />
              <p className="tt">Click</p>
            </animated.div>
          ) : (
            ""
          )
        )}
      </section>
    </div>
  );
};

export default Home;
