const twoWordSolutions = (lettersArraySet, wordList) => {
  let twoWordSolutions = [];
  let lastLetter, firstLetter;
  // let compareSet;

  console.time('test2');

  for (let word in wordList) {
    for (let nextWord in wordList) {
      if (nextWord !== word) {
        lastLetter = word.slice(-1);
        firstLetter = nextWord.charAt(0);

        // compareSet = new Set(
        //   [...lettersArraySet].filter(
        //     (letter) => !new Set((word + nextWord).split("")).has(letter)
        //   )
        // );

        let forLoopCompare = []
        for (let element of lettersArraySet){
          if(!new Set((word + nextWord).split("")).has(element)){
            forLoopCompare.push(element)
          }
        }

        if (firstLetter === lastLetter && forLoopCompare.length === 0) {
          twoWordSolutions.push([word, nextWord]);
        }
        if (twoWordSolutions.length === 50) {
          return twoWordSolutions;
        }
      }
    }
  }

  console.timeEnd('test2');
  
  if (twoWordSolutions.length === 0) {
    twoWordSolutions = ["no two word solutions found"];
  }
  
  return twoWordSolutions;
};

export default twoWordSolutions;
