import React from "react";
import "./style.css";
import "./blog.css";
import GitHubCalendar from "react-github-calendar";
const Blog = () => {
  return (
    <div className="Blog">
      <GitHubCalendar
        username="juhyoungryu"
        hideMonthLabels={true}
        hideColorLegend={true}
        year={new Date().getFullYear()}
      />
    </div>
  );
};

export default Blog;
