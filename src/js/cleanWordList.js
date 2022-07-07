// This is a helper function I wrote to clean up my
// words_dictionary.json file. This function cleans
// the word list of all words not allowed by letter box
// There are no words shorter than 3 characters and no
// words with double letters allowed.

const cleanWordList = (wordList) => {
  let letters = [];

  for (let word in wordList) {
    if (word.length < 3) {
      delete wordList[word];
    }
  }

  for (let word in wordList) {
    letters = word.split("");
    let num = 1;
    while (num < letters.length) {
      if (letters[num] === letters[num - 1]) {
        delete wordList[word];
        num = letters.length;
      } else {
        num += 1;
      }
    }
  }

  return wordList;
};

export default cleanWordList;
