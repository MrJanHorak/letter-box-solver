const threeWordSolutions = (lettersArraySet, wordList) => {
  let threeWordSolutions = [];
  let firstWordLast, secondWordFirst, secondWordLast, thirdWordFirst;
  let compareSet;

  for (let word in wordList) {
    for (let secondWord in wordList) {
      if (secondWord !== word) {
        for (let thirdWord in wordList) {
          if (thirdWord !== secondWord && thirdWord !== word) {
            firstWordLast = word.slice(-1);
            secondWordFirst = secondWord.charAt(0);
            secondWordLast = secondWord.slice(-1);
            thirdWordFirst = thirdWord.slice(-1);

            compareSet = new Set(
              [...lettersArraySet].filter((letter) => !new Set((word + secondWord + thirdWord).split("")).has(letter))
            );

            if (
              firstWordLast === secondWordFirst &&
              secondWordLast === thirdWordFirst &&
              compareSet.size === 0
            ) {
              threeWordSolutions.push([word, secondWord, thirdWord]);
              if (threeWordSolutions.length === 10) {
                return threeWordSolutions;
              }
            }
          }
        }
      }
    }
  }

  if (threeWordSolutions.length === 0) {
    threeWordSolutions = ["no three word solutions found"];
  }

  return threeWordSolutions;
};

export default threeWordSolutions;
