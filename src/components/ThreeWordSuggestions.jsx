import React from "react";

// assets
import threeWordSolutions from "../js/threeWordSolutions.js";

// style
import "../styles/threeWordSuggestions.css";

const ThreeWordSuggestions = ({ lettersArraySet, cleanedList }) => {
  let two = threeWordSolutions(lettersArraySet, cleanedList);
  let suggestionsArray = [];

  two.map((wordTrio, index) => suggestionsArray.push(wordTrio));

  return (
    <>
      <div className="trio-of-suggested-words">{suggestionsArray}</div>
    </>
  );
};

export default ThreeWordSuggestions;
