import React from "react";

// assets
import oneWordSolutions from "../js/oneWordSolutions.js";

// style
import "../styles/oneWordSuggestions.css";

const OneWordSuggestions = ({ lettersArraySet, cleanedList }) => {
  let one = oneWordSolutions(lettersArraySet, cleanedList);
  let suggestionsArray = [];

  one.map((word, index) => suggestionsArray.push(word));

  return (
    <>
      <div className="single-suggested-words">{suggestionsArray}</div>
    </>
  );
};

export default OneWordSuggestions;
