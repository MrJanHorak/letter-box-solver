const twoWordSolutions = (lettersArraySet, wordList) => {
  const solutions = [];
  const lettersSet = new Set(lettersArraySet);
  const wordSetList = [];
  const wordMap = new Map();

  // Preprocess wordList to filter and prepare word objects
  for (let word in wordList) {
    const wordLetters = word.split('');
    const wordSet = new Set(wordLetters);

    // Skip words that contain letters not in lettersArraySet
    if ([...wordSet].some(letter => !lettersSet.has(letter))) continue;

    const wordObj = { word, set: wordSet };

    wordSetList.push(wordObj);

    const firstLetter = word.charAt(0);
    if (wordMap.has(firstLetter)) {
      wordMap.get(firstLetter).push(wordObj);
    } else {
      wordMap.set(firstLetter, [wordObj]);
    }
  }

  // Function to check if combined words cover all letters
  const isValidSolution = (firstWordSet, secondWordSet) => {
    const combinedSet = new Set([...firstWordSet, ...secondWordSet]);
    return combinedSet.size === lettersSet.size;
  };

  for (const firstWord of wordSetList) {
    const secondWords = wordMap.get(firstWord.word.slice(-1));
    if (!secondWords) continue;

    for (const secondWord of secondWords) {
      if (secondWord === firstWord) continue;
      if (isValidSolution(firstWord.set, secondWord.set)) {
        solutions.push([firstWord.word, secondWord.word]);
      }
    }
  }

  return solutions.length ? solutions : ['no two word solutions found'];
};

export default twoWordSolutions;