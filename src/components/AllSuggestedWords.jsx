import React from "react";

import "../styles/allSuggestedWords.css";

const AllSuggestedWords = ({ potentialWords }) => {
  let suggestionsArray = [];
  Object.keys(potentialWords).map((word) => suggestionsArray.push(word));

  const listItems = suggestionsArray.map((word, index) => {
    return(<li key={index}>{word}</li>)
  })

  return (
    <div className="solutions-container">
      <h3>Possible solutions:</h3>
      <div className="all-suggested-words">
        <h4>All possible words: </h4>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};

export default AllSuggestedWords;
