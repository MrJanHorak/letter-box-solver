const getAllWords = (
  topRow,
  leftrow,
  rightRow,
  bottomRow,
  lettersArraySet,
  cleaned_list
) => {
  let arrayOfRows = [
    new Set(topRow),
    new Set(leftrow),
    new Set(rightRow),
    new Set(bottomRow),
  ];

  let letters = [];

  // Instead of creating every combination of letters and
  // comparing to see which combination of letters matches
  // a word, I am filtering out the words in the dictionary
  // that do not contain the letters provided.
  // It is MUCH faster this way.

  for (let word in cleaned_list) {
    let wordSet = new Set(word.split(""));
    let compareSet = new Set(
      [...wordSet].filter((letter) => !lettersArraySet.has(letter))
    );

    if (compareSet.size !== 0) {
      delete cleaned_list[word];
    }
  }

  // after filtering out the words that do not match the letters provided
  // we need to check to see which words are not allowed based upon the
  // game restriction of not allowing letters on the same side of the
  // square to be directly next to each other in the word.

  const takeOutWords = (word) => {
    arrayOfRows.forEach((rowSet) => {
      letters = word.split("");
      let num = 1;
      while (num < letters.length) {
        if (rowSet.has(letters[num]) && rowSet.has(letters[num - 1])) {
          delete cleaned_list[word];
          num = letters.length;
        } else {
          num += 1;
        }
      }
    });
  };

  for (let word in cleaned_list) {
    takeOutWords(word);
  }

  return cleaned_list;
};

export default getAllWords;
