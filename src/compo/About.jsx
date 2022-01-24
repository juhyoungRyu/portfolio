import React, { useState } from "react";
import "./style.css";
import "./about.css";
import ReactCardFlip from "react-card-flip";
import { useTransition, animated } from "react-spring";
import logo2 from "../img/logo2.jpg";
import logo3 from "../img/logo2.png";
import logo4 from "../img/turtle433.png";
import html from "../img/html5.svg";
import css from "../img/css3.svg";
import js from "../img/javascript.svg";
import react from "../img/react.svg";

import Progress from "./Progress";

const About = (props) => {
  const [oneVisible, setOneVisible] = useState(false);
  const [twoVisible, setTwoVisible] = useState(false);

  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");

  const [btnText, setBtnText] = useState("Click Me");

  const transtion1 = useTransition(oneVisible, {
    from: {
      x: -200,
      opacity: 0,
      width: 10,
      height: 10,
      borderRadius: 30,
      objectFit: "none",
    },
    enter: () => async (next) => {
      await next({
        x: 0,
        opacity: 1,
      });
      await next({
        width: 300,
        height: 500,
        borderRadius: 30,
        objectFit: "none",
      });
    },
    leave: () => async (next) => {
      await next({ width: 10, height: 10 });
      await next({ x: 200, opacity: 0 });
    },
  });
  const transtion2 = useTransition(twoVisible, {
    from: {
      x: -200,
      opacity: 0,
      width: 10,
      height: 10,
      borderRadius: 30,
      objectFit: "none",
    },
    enter: () => async (next) => {
      await next({
        x: 0,
        opacity: 1,
      });
      await next({
        width: 300,
        height: 500,
        borderRadius: 30,
        objectFit: "none",
      });
    },
    leave: () => async (next) => {
      await next({ width: 10, height: 10 });
      await next({ x: 140, opacity: 0 });
    },
  });

  const clcikCard1 = () => {
    setText1("개발하는 거북");
    setText2("좋아하는 것은 상상");
    setText3("취미는 구현입니다");
    setText4("올해로 19살이고");
    setText5("Js와 Python을");
    setText6("사용합니다");
    setFlip1((flip1) => !flip1);
  };

  return (
    <div className="About">
      <div className="profileCon">
        {transtion1((style, i) =>
          i ? (
            <ReactCardFlip isFlipped={flip1} flipDirection="horizontal">
              <animated.div
                style={style}
                className="box"
                onClick={() => {
                  clcikCard1();
                }}
              >
                <animated.img style={style} src={logo2} />

                <h1 className="profileAbout">Profile</h1>
              </animated.div>

              <animated.div
                style={style}
                className="box"
                onClick={() => {
                  setText1("");
                  setText2("");
                  setText3("");
                  setText4("");
                  setText5("");
                  setText6("");
                  setFlip1((flip1) => !flip1);
                }}
              >
                <div className="textBoxAbout" style={{ marginTop: "25px" }}>
                  <h3>{text1}</h3>
                </div>
                <div className="textBoxAbout">
                  <p>{text2}</p>
                  <p>{text3}</p>
                </div>
                <div className="textBoxAbout">
                  <p>{text4}</p>
                  <p>{text5}</p>
                  <p>{text6}</p>
                </div>
                <div className="turtleCon">
                  {flip1 ? <img src={logo4} className="turtle11" /> : ""}
                  {flip1 ? <img src={logo4} className="turtle11" /> : ""}
                  {flip1 ? <img src={logo4} className="turtle11" /> : ""}
                  {flip1 ? <img src={logo4} className="turtle11" /> : ""}
                </div>
              </animated.div>
            </ReactCardFlip>
          ) : (
            ""
          )
        )}
      </div>
      {oneVisible ? (
        <button
          className="buttonAboutChange"
          onClick={() => {
            if (flip1 === true) {
              if (twoVisible === false) {
                setText1("");
                setText2("");
                setText3("");
                setText4("");
                setText5("");
                setText6("");
                setFlip1((flip1) => !flip1);
                setOneVisible(false);
                setTwoVisible(true);
              } else if (twoVisible === true) {
                setTwoVisible(false);
              }
            } else {
              clcikCard1();
            }
          }}
        >
          {btnText}
        </button>
      ) : (
        <button
          className="buttonAboutChange"
          onClick={() => {
            setOneVisible((oneVisible) => !oneVisible);

            if (oneVisible === false && twoVisible === true) {
              setOneVisible(false);
              setTwoVisible(false);
              setBtnText("go Blog");
            }

            if (btnText === "go Blog") {
              props.func("blog");
            }
          }}
        >
          {btnText}
        </button>
      )}

      <div className="stackCon">
        {transtion2((style, i) =>
          i ? (
            <ReactCardFlip isFlipped={flip2} flipDirection="horizontal">
              <animated.div
                style={style}
                className="box"
                onClick={() => {
                  setFlip2((flip2) => !flip2);
                }}
              >
                <animated.img style={style} src={logo2} />
                <animated.h1 className="skillAbout">Skills</animated.h1>
              </animated.div>

              <animated.div
                style={style}
                className="box"
                onClick={() => {
                  setFlip2((flip2) => !flip2);
                }}
              >
                {flip2 ? (
                  <div className="graph">
                    <div className="pro">
                      <p className="nameAboutSkill">HTML</p>
                      <Progress pro={60} name={"progress-bar1"} />
                    </div>
                    <div className="pro">
                      <p className="nameAboutSkill">CSS</p>
                      <Progress pro={30} name={"progress-bar2"} />
                    </div>
                    <div className="pro">
                      <p className="nameAboutSkill">JS</p>
                      <Progress pro={70} name={"progress-bar3"} />
                    </div>
                    <div className="pro">
                      <p className="nameAboutSkill">React</p>
                      <Progress pro={55} name={"progress-bar4"} />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </animated.div>
            </ReactCardFlip>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default About;
