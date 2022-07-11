const twoWordSolutions = (lettersArraySet, wordList) => {
  let twoWordSolutions = [];
  let lastLetter, firstLetter;
  let compareSet;

  for (let word in wordList) {
    lastLetter = word.slice(-1);
    for (let nextWord in wordList) {
      if (nextWord !== word) {
        firstLetter = nextWord.charAt(0);

        compareSet = new Set(
          [...lettersArraySet].filter((letter) => !new Set((word + nextWord).split("")).has(letter))
        );

        if (firstLetter === lastLetter && compareSet.size === 0) {
          twoWordSolutions.push([word, nextWord]);
        }
        if (twoWordSolutions.length === 200) {
          return twoWordSolutions;
        }
      }
    }
  }

  if (twoWordSolutions.length === 0) {
    twoWordSolutions = ["no two word solutions found"];
  }

  return twoWordSolutions;
};

export default twoWordSolutions;
