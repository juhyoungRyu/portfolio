import React from "react";
import "./style.css";
import "./home.css";

const Home = () => {
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
      <section className="arrowZone"></section>
    </div>
  );
};

export default Home;
