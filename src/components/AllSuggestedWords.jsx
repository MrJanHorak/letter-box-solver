import React from "react";

import "../styles/allSuggestedWords.css";

const AllSuggestedWords = ({ potentialWords }) => {
  let suggestionsArray = [];
  Object.keys(potentialWords).map((word, index) => suggestionsArray.push(word));

  return <div className="all-suggested-words">{suggestionsArray}</div>;
};

export default AllSuggestedWords;
