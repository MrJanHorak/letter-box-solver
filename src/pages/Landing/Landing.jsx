import React, { useEffect, useState } from "react";

//assests
import words from "../../data/words_dictionary.json";
import cleanWordList from "../../js/cleanWordList";
import findAllPossibleWords from "../../js/findAllPossibleWords";
import oneWordSolutions from "../../js/oneWordSolutions";
import twoWordSolutions from "../../js/twoWordSolutions";
import threeWordSolutions from "../../js/threeWordSolutions";

// components
import AllSuggestedWords from "../../components/AllSuggestedWords";

// style
import "../../styles/landing.css";

const Landing = () => {
  const [leftRow, setLeftRow] = useState([]);
  const [topRow, setTopRow] = useState([]);
  const [rightRow, setRightRow] = useState([]);
  const [bottomRow, setBottomRow] = useState([]);
  const [message, setMessage] = useState("Input letters here");
  const [oneWord, setOneWord] = useState([]);
  const [twoWord, setTwoWord] = useState([]);
  const [threeWord, setThreeWord] = useState([]);
  const [cleanedList, setCleanedList] = useState();
  const [recievedWords, setRecievedWords] = useState(false);
  const [suggestions, setSuggestions] = useState();
  const [lettersArraySet, setLettersArraySet] = useState();
  let potentialWords, lettersSet;
  let allSubmittedLetters = [];

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
    lettersSet = new Set(allSubmittedLetters);
    setLettersArraySet(lettersSet);
    if (lettersSet.size !== 12) {
      setMessage("No double letters allowed!");
    } else {
      setMessage("searching ...");
      Solver(topRow, leftRow, rightRow, bottomRow);
    }
  };

  useEffect(() => {
    const suggestedWords = () => {
      if (recievedWords) {
        return <AllSuggestedWords potentialWords={cleanedList} />;
      }
    };
    setSuggestions(suggestedWords());
  }, [recievedWords]);

  useEffect(() => {
    if (recievedWords) {
      let one;
      one = oneWordSolutions(lettersArraySet, cleanedList);
      setOneWord(one);
      console.log("One Word solutions", one);
    }
  }, [suggestions]);

  useEffect(() => {
    if (recievedWords) {
      let two;
      two = twoWordSolutions(lettersArraySet, cleanedList);
      setTwoWord(two);
      console.log("Two Word solutions", two);
    }
  }, [oneWord]);

  useEffect(() => {
    if (recievedWords) {
      let three;
      three = threeWordSolutions(lettersArraySet, cleanedList);
      setThreeWord(three);
      console.log("Three Word solutions", three);
    }
  }, [twoWord]);

  const Solver = (topRow, leftrow, rightRow, bottomRow) => {
    let cleaned_list = cleanWordList(words);
    potentialWords = findAllPossibleWords(
      topRow,
      leftrow,
      rightRow,
      bottomRow,
      lettersSet,
      cleaned_list
    );

    setCleanedList(potentialWords);
    setRecievedWords(true);
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
                  placeholder="jkl"
                />
              </label>
            </div>
            <div className="white-box">
              <div className="row-of-circles" id="top-row-circles">
                ⚪⚪⚪
              </div>
              <div className="row-of-circles" id="left-row-circles">
                ⚪⚪⚪
              </div>
              <div className="row-of-circles" id="right-row-circles">
                ⚪⚪⚪
              </div>
              <div className="row-of-circles" id="bottom-row-circles">
                ⚪⚪⚪
              </div>
            </div>
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
                  placeholder="def"
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
        <div className="suggested-words-container">{suggestions}</div>
        <div className="one-word-solutions">{oneWord}</div>
        <div className="two-word-solutions">{twoWord}</div>
        <div className="three-word-solutions">{threeWord}</div>
      </div>
    </div>
  );
};

export default Landing;
