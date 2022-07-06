import React, { useState, useEffect } from "react";

import "../../styles/landing.css";

const Landing = () => {
  const [leftRow, setLeftRow] = useState([]);
  const [topRow, setTopRow] = useState([]);
  const [rightRow, setRightRow] = useState([]);
  const [bottomRow, setBottomRow] = useState([]);
  const [message, setMessage] = useState("Input letters here");
  let allSubmittedLetters = [];

  useEffect(() => {}, []);
  const onlyLetters = (str) => {
    return /^[a-zA-Z]{1,3}$/.test(str);
  };

  const resetValue = (e) => {
    if (e.target.name === "left-side") setLeftRow([]);
    if (e.target.name === "right-side") setRightRow([]);
    if (e.target.name === "top-row") setTopRow([]);
    if (e.target.name === "bottom-row") setBottomRow([]);
  };

  const handleChange = (e) => {
    if (onlyLetters(e.target.value)) {
      if (e.target.name === "left-side") setLeftRow(e.target.value);
      if (e.target.name === "right-side") setRightRow(e.target.value);
      if (e.target.name === "top-row") setTopRow(e.target.value);
      if (e.target.name === "bottom-row") setBottomRow(e.target.value);
    } else {
      setMessage("Please only enter letters");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    allSubmittedLetters = topRow
      .split("")
      .concat(leftRow.split(""), rightRow.split(""), bottomRow.split(""));
    let letterSet = new Set(allSubmittedLetters);
    if (letterSet.size !== 12) {
      setMessage("No double letters allowed!");
    } else {
      setMessage("searching ...");
    }
  };

  console.log("TOP ROW", topRow);
  console.log("LEFT ROW", leftRow);
  console.log("RIGHT ROW", rightRow);
  console.log("BOTTOM ROW", bottomRow);

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
                value={topRow}
                onFocus={resetValue}
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
                  value={leftRow}
                  onFocus={resetValue}
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
                  value={rightRow}
                  onFocus={resetValue}
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
                onFocus={resetValue}
                value={bottomRow}
                onChange={handleChange}
              />
            </label>
          </div>
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
