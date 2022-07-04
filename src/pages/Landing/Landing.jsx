import React from "react";

import "../../styles/landing.css";

const Landing = () => {
  return (
    <div className="main-page-container">
      <div className="title-container">
        <h1>Letter Boxed Solver</h1>
      </div>
      <form className="letters-input">
        <div className="solver-container">
          <h3>letter input goes here</h3>
          <input id="top-row" type="text" name="top-row" maxLength={3} />
          <div className="middle-row">
            <input id="left-side" type="text" name="left-side" maxLength={3} />
            <div className="white-box"></div>
            <input
              id="right-side"
              type="text"
              name="right-side"
              maxLength={3}
            />
          </div>
          <input id="bottom-row" type="text" name="bottom-row" maxLength={3} />
          <h3>letter input goes here</h3>
        </div>
        <input className="button" type="submit" value="Submit" />
      </form>
      <div className="solution-suggestions">
        <h3> Suggestions</h3>
      </div>
    </div>
  );
};

export default Landing;
