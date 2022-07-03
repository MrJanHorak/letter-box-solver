import React from "react";

import '../../styles/landing.css'

const Landing = () => {
  return (
    <div className="main-page-container">
      <div className="title-container">
        <h1>Letter Boxed Solver</h1>
      </div>
      <div className="solver-container">
        <h2>Letter box goes here</h2>
      </div>
      <div className="solution-suggestions">
        <h3> Suggestions</h3>
      </div>
    </div>
  );
};

export default Landing;
