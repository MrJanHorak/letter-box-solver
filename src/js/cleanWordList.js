const cleanWordList = (wordList) => {
  const cleanedWordList = {};

  for (const word in wordList) {
    if (word.length < 3) continue;

    let hasDuplicates = false;
    for (let i = 1; i < word.length; i++) {
      if (word[i] === word[i - 1]) {
        hasDuplicates = true;
        break;
      }
    }

    if (!hasDuplicates) {
      cleanedWordList[word] = wordList[word];
    }
  }

  return cleanedWordList;
};

export default cleanWordList;
