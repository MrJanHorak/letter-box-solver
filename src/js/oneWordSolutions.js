const findOneWordSolutions = (lettersArraySet, wordList) => {
  let oneWordSolutions = [];
  let lettersSet = new Set(lettersArraySet);

  for (let word in wordList) {
    let wordSet = new Set(word.split(""));
    if (lettersSet.size === wordSet.size && [...lettersSet].every(letter => wordSet.has(letter))) {
      oneWordSolutions.push(word);
    }
  }

  if (oneWordSolutions.length === 0) {
    oneWordSolutions = ["no one word solutions found"];
  }
  return oneWordSolutions;
};

export default findOneWordSolutions;