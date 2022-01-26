import React from "react";
import "./style.css";
import "./blog.css";
import GitHubCalendar from "react-github-calendar";
import Card from "./Card";
const Blog = () => {
  return (
    <div className="Blog">
      <div className="cardZoneBlog">
        <Card name={"Github"} icon={true} className="blogCard" />
        <Card name={"velog"} icon={false} className="blogCard" />
      </div>
      {/* <GitHubCalendar
        username="juhyoungryu"
        hideMonthLabels={true}
        hideColorLegend={true}
        year={new Date().getFullYear()}
      /> */}
    </div>
  );
};

export default Blog;
