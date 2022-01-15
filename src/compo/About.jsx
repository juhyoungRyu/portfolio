import React, { useState } from "react";
import "./style.css";
import "./about.css";
import ReactCardFlip from "react-card-flip";
import logo1 from "../img/logo2.png";

const About = () => {
  const [fliped1, setFliped1] = useState(false);
  const [fliped2, setFliped2] = useState(false);
  const [fliped3, setFliped3] = useState(false);
  const [fliped4, setFliped4] = useState(false);

  const handleClick = (n) => {
    if (n === "1") {
      setFliped1((fliped1) => !fliped1);
    } else if (n === "2") {
      setFliped2((fliped2) => !fliped2);
    } else if (n === "3") {
      setFliped3((fliped3) => !fliped3);
    } else {
      setFliped4((fliped4) => !fliped4);
    }
  };

  return (
    <div className="About">
      <div className="row">
        <ReactCardFlip isFlipped={fliped1} flipDirection="horizontal">
          <div
            className="card1"
            onClick={() => {
              handleClick("1");
            }}
          ></div>
          <div
            className="card1"
            onClick={() => {
              handleClick("1");
            }}
          >
            <div className="top"></div>
            <div className="bot">
              <p>내가 누구인지</p>
            </div>
          </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={fliped2} flipDirection="horizontal">
          <div
            className="card3"
            onClick={() => {
              handleClick("2");
            }}
          ></div>
          <div
            className="card4"
            onClick={() => {
              handleClick("2");
            }}
          ></div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={fliped3} flipDirection="horizontal">
          <div
            className="card5"
            onClick={() => {
              handleClick("3");
            }}
          >
            <img src={logo1} />
          </div>
          <div
            className="card6"
            onClick={() => {
              handleClick("3");
            }}
          >
            <div className="top3">
              <h1>JavaScript를 공부하는 이유</h1>
            </div>
            <div className="bot3"></div>
          </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={fliped4} flipDirection="horizontal">
          <div
            className="card7"
            onClick={() => {
              handleClick("4");
            }}
          ></div>
          <div
            className="card8"
            onClick={() => {
              handleClick("4");
            }}
          ></div>
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default About;
