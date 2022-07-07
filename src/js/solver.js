import words from "../data/words_dictionary.json";
import cleanWordList from "./cleanWordList";
import getAllWords from "./createAllWords";

const Solver = (topRow, leftrow, rightRow, bottomRow) => {
  let allLetters = topRow+leftrow+rightRow+bottomRow;

  let cleaned_list = cleanWordList(words);

  let potentialWords = getAllWords(allLetters, cleaned_list)

  console.log("in Solver.");
  console.log(allLetters);
  console.log(topRow, leftrow, rightRow, bottomRow);

  if (cleaned_list["test"]) {
    console.log("Data test successful");
  }

  console.log(potentialWords.length)

};


export default Solver;
