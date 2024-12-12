const findOneWordSolutions = (lettersArray, wordList) => {
  const oneWordSolutions = [];
  const lettersCount = getLetterCounts(lettersArray);

  for (const word in wordList) {
    if (word.length !== lettersArray.length) continue;

    const wordCount = getLetterCounts(word);
    if (areCountsEqual(lettersCount, wordCount)) {
      oneWordSolutions.push(word);
    }
  }

  return oneWordSolutions.length > 0 ? oneWordSolutions : ['no one word solutions found'];
};

const getLetterCounts = (letters) => {
  const counts = {};
  for (const letter of letters) {
    counts[letter] = (counts[letter] || 0) + 1;
  }
  return counts;
};

const areCountsEqual = (countA, countB) => {
  if (Object.keys(countA).length !== Object.keys(countB).length) return false;
  for (const letter in countA) {
    if (countA[letter] !== countB[letter]) return false;
  }
  return true;
};

export default findOneWordSolutions;