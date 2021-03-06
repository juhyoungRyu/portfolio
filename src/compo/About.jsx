import React, { useState } from "react";
import "./style.css";
import "./about.css";
import ReactCardFlip from "react-card-flip";
import { useTransition, animated } from "react-spring";
import logo2 from "../img/logo2.jpg";
import logo3 from "../img/logo2.png";
import logo4 from "../img/turtle433.png";

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
    if (twoVisible === false) {
      setText1("???????????? ??????");
      setText2("???????????? ?????? ??????");
      setText3("????????? ???????????????");
      setText4("????????? 19?????????");
      setText5("Js??? Python???");
      setText6("???????????????");
      setFlip1((flip1) => !flip1);
    }
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
                <div
                  className="textBoxAbout"
                  style={{
                    marginTop: "75px",
                    marginBottom: "45px",
                    fontSize: "35px",
                    fontFamily: "Nanum Pen Script",
                  }}
                >
                  <p>{text1}</p>
                </div>
                <div className="textBoxAbout">
                  <p>{text2}</p>
                  <p style={{ marginBottom: "20px" }}>{text3}</p>
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
            setTimeout(() => {
              if (flip2 === false) {
                setFlip2((flip2) => !flip2);
              }
            }, 3000);

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
            if (oneVisible === false && twoVisible === false) {
              setOneVisible((oneVisible) => !oneVisible);
            } else if (
              oneVisible === false &&
              twoVisible === true &&
              flip2 === false
            ) {
              setFlip2((flip2) => !flip2);
            }

            if (oneVisible === false && twoVisible === true && flip2 === true) {
              setOneVisible(false);
              setFlip2(false);
              setTwoVisible(false);
              setBtnText("go Next");
            }

            if (btnText === "go Next") {
              props.func("blog");
            }

            setTimeout(() => {
              if (flip1 === false) {
                clcikCard1();
              }
            }, 3000);
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
                  <div className="AboutSkillBox">
                    <div className="turtleCon1">
                      {flip2 ? <img src={logo4} className="turtle12" /> : ""}
                      {flip2 ? <img src={logo4} className="turtle12" /> : ""}
                      {flip2 ? <img src={logo4} className="turtle12" /> : ""}
                      {flip2 ? <img src={logo4} className="turtle12" /> : ""}
                      {flip2 ? <img src={logo4} className="turtle12" /> : ""}
                    </div>
                    <div className="graph">
                      <div className="pro">
                        <Progress pro={60} name={"progress-bar1"} />
                        <p className="nameAboutSkill">HTML</p>
                      </div>
                      <div className="pro">
                        <Progress pro={30} name={"progress-bar2"} />
                        <p className="nameAboutSkill">CSS</p>
                      </div>
                      <div className="pro">
                        <Progress pro={70} name={"progress-bar3"} />
                        <p className="nameAboutSkill">JS</p>
                      </div>
                      <div className="pro">
                        <Progress pro={45} name={"progress-bar4"} />
                        <p className="nameAboutSkill">React</p>
                      </div>
                      <div className="pro">
                        <Progress pro={55} name={"progress-bar5"} />
                        <p className="nameAboutSkill">Python</p>
                      </div>
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
