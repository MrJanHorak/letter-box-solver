const getAllWords = (topRow, leftrow, rightRow, bottomRow, cleaned_list) => {
  let lettersArray = topRow + leftrow + rightRow + bottomRow;
  let arrayOfRows = [
    new Set(topRow),
    new Set(leftrow),
    new Set(rightRow),
    new Set(bottomRow),
  ];
  let letters = [];
  console.log("in get all words cleaned_list", cleaned_list);
  console.log(topRow, leftrow, rightRow, bottomRow);
  console.log(lettersArray);

  lettersArray = new Set(lettersArray.split(""));

  console.log(lettersArray);

  // Instead of creating every combination of letters and
  // comparing to see which combination of letters matches
  // a word, I am filtering out the words in the dictionary
  // that do not contain the letters provided.
  // It is MUCH faster this way.

  for (let word in cleaned_list) {
    let wordSet = new Set(word.split(""));
    let compareSet = new Set(
      [...wordSet].filter((letter) => !lettersArray.has(letter))
    );

    if (compareSet.size !== 0) {
      delete cleaned_list[word];
    }
  }

  console.log(
    "Number of potential words after filtering sets: ",
    Object.keys(cleaned_list).length
  );

  // after filtering out the words that do not match the letters provided
  // we need to check to see which words are not allowed based upon the
  // game restriction of not allowing letters on the same side of the
  // square to be directly next to each other in the word.

  const takeOutWords = (word) => {
    letters = word.split("");
    let num = 1;
    arrayOfRows.forEach((row) => {
      while (num < letters.length) {
        if (row.has(letters[num]) && row.has(letters[num - 1])) {
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

  // after making sure all the words in the list are possible
  // the only thing left is to match up suggestions
  // where the last letter of one word is the beginning of the next
  // and only until all letters are used at least once

  

  console.log("Number of potential words: ", Object.keys(cleaned_list).length);
  console.log("Get all words cleaned_list", cleaned_list);

  return cleaned_list;
};

export default getAllWords;
