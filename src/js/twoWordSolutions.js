const twoWordSolutions = (lettersArraySet, wordList) => {
  let solutions = [];
  let wordMap = new Map();
  let wordSetList = Object.keys(wordList).map(word => ({word, set: new Set(word.split(''))}));

  // Create a map where the keys are the first letter of each word
  // and the values are arrays of words that start with that letter
  for (let wordObj of wordSetList) {
    let firstLetter = wordObj.word.charAt(0);
    if (wordMap.has(firstLetter)) {
      wordMap.get(firstLetter).push(wordObj);
    } else {
      wordMap.set(firstLetter, [wordObj]);
    }
  }

  function findSolutions(firstWord, secondWord) {
    // if (solutions.length >= 100) return;

    if (firstWord.word.slice(-1) === secondWord.word.charAt(0) &&
        [...lettersArraySet].every(letter => firstWord.set.has(letter) || secondWord.set.has(letter))) {
      solutions.push([firstWord.word, secondWord.word]);
    }
  }

  for (let firstWord of wordSetList) {
    let secondWords = wordMap.get(firstWord.word.slice(-1));
    if (!secondWords) continue;
    for (let secondWord of secondWords) {
      if (secondWord === firstWord) continue;
      findSolutions(firstWord, secondWord);
    }
  }

  return solutions.length ? solutions : ["no two word solutions found"];
};

export default twoWordSolutions;