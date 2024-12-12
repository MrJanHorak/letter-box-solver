const revealWord = (word, reveal) => {
  if (reveal) {
    return word;
  }
  if (word.length <= 2) {
    return word; // If the word length is 2 or less, return the word as is
  }
  return word[0] + '*'.repeat(word.length - 2) + word[word.length - 1];
};

export default revealWord;