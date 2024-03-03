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

  let validWords = {};

  for (let word in cleaned_list) {
    let letters = word.split("");
    let wordSet = new Set(letters);
    let compareSet = new Set(
      [...wordSet].filter((letter) => !lettersArraySet.has(letter))
    );

    if (compareSet.size !== 0) {
      continue;
    }

    let isValid = true;
    for (let rowSet of arrayOfRows) {
      for (let i = 1; i < letters.length; i++) {
        if (rowSet.has(letters[i]) && rowSet.has(letters[i - 1])) {
          isValid = false;
          break;
        }
      }
      if (!isValid) break;
    }

    if (isValid) {
      validWords[word] = cleaned_list[word];
    }
  }

  return validWords;
};

export default getAllWords;