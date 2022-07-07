const getAllWords = (lettersArray, cleaned_list) => {

  console.log("in get all words cleaned_list", cleaned_list);
  console.log(lettersArray);

  lettersArray = new Set(lettersArray.split(""));

  console.log(lettersArray);

  let words = {};
  let possible_words = {};

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
    if (compareSet.size === 0) {
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

  for (let word in words) {
    if (words[word] !== cleaned_list[word]) {
      delete words[word];
    }
  }

  console.log("Number of potential words: ", Object.keys(words).length);

  // }

  // possible_words = words.filter(word => cleaned_list[word]===true);

  console.log(
    "YOUR CURRENT LETTERS CAN CREATE THIS MANY WORDS: ",
    possible_words.length
  );
  
  return possible_words;
};

export default getAllWords;
