import React from "react";

import "../styles/allSuggestedWords.css";

const AllSuggestedWords = ({ potentialWords }) => {
  let suggestionsArray = [];
  Object.keys(potentialWords).map((word) => suggestionsArray.push(word));

  const listItems = suggestionsArray.map((word, index) => {
    return(<li key={index}>{word}</li>)
  })

  return (
    <>
      <h3>Possible solutions:</h3>
      <div className="all-suggested-words">
        <ul>{listItems}</ul>
      </div>
    </>
  );
};

export default AllSuggestedWords;
