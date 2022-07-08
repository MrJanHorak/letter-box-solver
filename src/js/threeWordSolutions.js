const threeWordSolutions = (lettersArraySet, wordList) => {
  let threeWordSolutions = [];
  let firstWordLast, secondWordFirst, secondWordLast, thirdWordFirst;
  let threeWordSet, compareSet;

  for (let word in wordList) {
    for (let secondWord in wordList) {
      if (secondWord !== word) {
        for (let thirdWord in wordList) {
          if (thirdWord !== secondWord && thirdWord !== word) {
            firstWordLast = word.slice(-1);
            secondWordFirst = secondWord.charAt(0);
            secondWordLast = secondWord.slice(-1);
            thirdWordFirst = thirdWord.slice(-1);

            threeWordSet = new Set((word + secondWord + thirdWord).split(""));

            compareSet = new Set(
              [...lettersArraySet].filter((letter) => !threeWordSet.has(letter))
            );

            if (
              firstWordLast === secondWordFirst &&
              secondWordLast === thirdWordFirst &&
              compareSet.size === 0
            ) {
              threeWordSolutions.push([word, secondWord, thirdWord]);
              if (threeWordSolutions.length === 50) {
                return threeWordSolutions;
              }
            }
          }
        }
      }
    }
  }

  if (threeWordSolutions.length === 0) {
    threeWordSolutions = ["no three word Solutions found"];
  }

  return threeWordSolutions;
};

export default threeWordSolutions;
