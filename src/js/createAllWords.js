const getAllWords = (lettersArray, cleaned_list) => {
  console.log("in get all words cleaned_list",cleaned_list)
  console.log(lettersArray)
  lettersArray = lettersArray.split('')
  console.log(lettersArray)
  let words = {};
  let possible_words = {};

  for (let wordLength = 3; wordLength <13; wordLength++) {
    if (wordLength !== 0) words = lettersArray;

    for (let i = 1; i < wordLength; i++) {
      let temp = {};
      for(let word in words) {
        lettersArray.forEach((letter) => temp[word + letter]=1);
      };
      console.log("WORDS ARRAY LENGTH",Object.keys(temp).length)
      words = temp;
    }

    for(let word in words){
    if(words[word]!==cleaned_list[word]){
      delete words[word]
    }}
    console.log('Number of potential words: ',Object.keys(words).length)

  }

  // possible_words = words.filter(word => cleaned_list[word]===true);

  console.log(
    "YOUR CURRENT LETTERS CAN CREATE THIS MANY WORDS: ",
    possible_words.length
  );
  return possible_words;
};

export default getAllWords;
