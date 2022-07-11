const findOneWordSolutions = (lettersArraySet, wordList) => {
  let oneWordSolutions = [];

  for (let word in wordList) {
    if (lettersArraySet === new Set(word.split(""))) {
      oneWordSolutions.push(word);
    }
  }

  if (oneWordSolutions.length === 0) {
    oneWordSolutions = ["no one word solutions found"];
  }
  return oneWordSolutions;
};

export default findOneWordSolutions;
