import React from "react";

// assets
import twoWordSolutions from "../js/twoWordSolutions.js";

// style
import "../styles/twoWordSuggestions.css";

const TwoWordSuggestions = ({ lettersArraySet, cleanedList }) => {
  let two = twoWordSolutions(lettersArraySet, cleanedList);
  let suggestionsArrayTwo = [];

  two.map((wordPair) => suggestionsArrayTwo.push(wordPair));

  const twoWord = suggestionsArrayTwo.map((words, index) => {
    return (
      <tr key={2 + index}>
        <td>{words[0]}</td>
        <td>{words[1]}</td>
      </tr>
    );
  });

  if (two[0] === "no two word solutions found") {
    <>
      <div className="pairs-of-suggested-words">
        <h4>Two word solutions:</h4>
        <ul>
          <li>{two[0]}</li>
        </ul>
      </div>
    </>;
  } else {
    return (
      <>
        <div className="pairs-of-suggested-words">
          <h4>Up to 200 two word solutions:</h4>
          <table>
          <tbody>
            <tr>
              <th></th>
              <th></th>
            </tr>
            {twoWord}
            </tbody>
          </table>
        </div>
      </>
    );
  }
};

export default TwoWordSuggestions;
