import React, { useState } from "react";

import "../../styles/landing.css";

const Landing = () => {
  const [leftRow, setLeftRow] = useState("");
  const [topRow, setTopRow] = useState("");
  const [rightRow, setRightRow] = useState("");
  const [bottomRow, setBottomRow] = useState("");
  const [message, setMessage] = useState("Input letters here");
  let top,
    left,
    right,
    bottom,
    allSubmittedLetters = [];

  const handleChange = (e) => {
    if (e.target.name === "left-side") setLeftRow(e.target.value);
    if (e.target.name === "right-side") setRightRow(e.target.value);
    if (e.target.name === "top-row") setTopRow(e.target.value);
    if (e.target.name === "bottom-row") setBottomRow(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Handeling Submit!");
    top = topRow.split("");
    left = leftRow.split("");
    right = rightRow.split("");
    bottom = bottomRow.split("");
    allSubmittedLetters = top.concat(left, right, bottom);
    let letterSet = new Set(allSubmittedLetters);
    console.log("SET length", letterSet.size);
    if (letterSet.size !== 12) {
      console.log("*** WARNING! SET TOO SHORT ***");
      setMessage("No double letters allowed!");
    }
    console.log("ALL LETTERS:", allSubmittedLetters);
    console.log("SET OF LETTERS:", letterSet);
  };

  return (
    <div className="main-page-container">
      <div className="title-container">
        <h1>Letter Boxed Solver</h1>
      </div>
      <form className="letters-input" onSubmit={handleSubmit}>
        <h3>{message}</h3>
        <div className="solver-container">
          <div id="top-row-container">
            <label id="top-row-label">
              {topRow}
              <input
                placeholder="abc"
                id="top-row"
                type="text"
                name="top-row"
                maxLength={3}
                required
                autoComplete="off"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="middle-row">
            <div id="left-side-container">
              <label id="left-side-label">
                {leftRow}
                <input
                  id="left-side"
                  type="text"
                  name="left-side"
                  maxLength={3}
                  required
                  autoComplete="off"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="white-box"></div>
            <div id="right-side-container">
              <label id="right-side-label">
                {rightRow}
                <input
                  id="right-side"
                  type="text"
                  name="right-side"
                  maxLength={3}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div id="bottom-row-container">
            <label id="bottom-row-label">
              {bottomRow}
              <input
                placeholder="ghi"
                id="bottom-row"
                type="text"
                name="bottom-row"
                maxLength={3}
                required
                autoComplete="off"
                onChange={handleChange}
              />
            </label>
          </div>
          <h3>letter input goes here</h3>
        </div>
        <input
          className="button"
          type="submit"
          value="Submit"
          required
          autoComplete="off"
        />
      </form>
      <div className="solution-suggestions">
        <h3> Suggestions</h3>
      </div>
    </div>
  );
};

export default Landing;
