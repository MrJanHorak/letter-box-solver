const twoWordSolutions = (lettersArraySet, wordList) => {
  let twoWordSolutions = [];

  for (let word in wordList) {
    let lastLetter = word.slice(-1);
    for (let nextWord in wordList) {
      if (nextWord !== word) {
        let firstLetter = nextWord.charAt(0);
        let twoWordSet = new Set((word + nextWord).split(""));

        let compareSet = new Set(
          [...lettersArraySet].filter((letter) => !twoWordSet.has(letter))
        );

        if (firstLetter === lastLetter && compareSet.size === 0) {
          twoWordSolutions.push([word, nextWord]);
        }
      }
    }
    if (new Set(word) === lettersArraySet) {
      twoWordSolutions.push(word);
    }
  }

  if (twoWordSolutions.length === 0) {
    twoWordSolutions = ["no two word Solutions found"];
  }

  return twoWordSolutions;
};

export default twoWordSolutions;
