import React from "react";

// assets
import twoWordSolutions from "../js/twoWordSolutions.js";

// style
import "../styles/twoWordSuggestions.css";

const TwoWordSuggestions = ({ lettersArraySet, cleanedList }) => {
  let two = twoWordSolutions(lettersArraySet, cleanedList);
  let suggestionsArray = [];

  two.map((wordPair, index) => suggestionsArray.push(wordPair));

  return (
    <>
      <div className="pairs-of-suggested-words">{suggestionsArray}</div>
    </>
  );
};

export default TwoWordSuggestions;
