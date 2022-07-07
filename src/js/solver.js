import words from "../data/words_dictionary.json";
import cleanWordList from "./cleanWordList";
import getAllWords from "./createAllWords";

const Solver = (topRow, leftrow, rightRow, bottomRow) => {
  

  let cleaned_list = cleanWordList(words);

  let potentialWords = getAllWords(topRow, leftrow, rightRow, bottomRow, cleaned_list)

  console.log("in Solver.");


  if (cleaned_list["test"]) {
    console.log("Data test successful");
  }

  console.log(potentialWords.length)

};


export default Solver;
