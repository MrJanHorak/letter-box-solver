import React from "react";

// assets
import twoWordSolutions from "../js/twoWordSolutions.js";

// style
import "../styles/twoWordSuggestions.css";

const TwoWordSuggestions = ({ lettersArraySet, cleanedList }) => {
  let two = twoWordSolutions(lettersArraySet, cleanedList);
  let suggestionsArray = [];

  two.map((wordPair) => suggestionsArray.push(wordPair));

  const twoWord = suggestionsArray.map((words, index) => {
        return (
        <li key={2+index}>{words[0]} &emsp; {words[1]}</li>);
      });
  
      if(two[0]==="no two word solutions found"){
        <>
      <div className="pairs-of-suggested-words">
        <h4>All two word solutions:</h4>
        <ul><li>{two[0]}</li></ul>
      </div>
    </>
      }
      else{
  return (
    <>
      <div className="pairs-of-suggested-words">
        <h4>All two word solutions:</h4>
        <ul>{twoWord}</ul>
      </div>
    </>
  );
}
}

export default TwoWordSuggestions;
