import React from "react";
import "./style.css";
import GitHubCalendar from "react-github-calendar";
const Blog = () => {
  return (
    <div className="Blog">
      <GitHubCalendar
        username="juhyoungryu"
        hideMonthLabels={true}
        hideColorLegend={true}
        year={new Date().getFullYear()}
        color={"#98fb98"}
      />
    </div>
  );
};

export default Blog;
