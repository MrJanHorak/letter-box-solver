import words from "../data/words_dictionary.json";
import cleanWordList from "./cleanWordList";
import findAllPossibleWords from "./findAllPossibleWords";
import oneWordSolutions from "./oneWordSolutions"
import twoWordSolutions from "./twoWordSolutions"

const Solver = (topRow, leftrow, rightRow, bottomRow) => {

  let lettersArray = topRow + leftrow + rightRow + bottomRow;
  let lettersArraySet = new Set(lettersArray.split(""));
  
  console.log("in Solver.");
  
  let cleaned_list = cleanWordList(words);
  let potentialWords = findAllPossibleWords(topRow, leftrow, rightRow, bottomRow, lettersArraySet, cleaned_list)

  console.log("Number of potential words to use: ",Object.keys(potentialWords).length)
  console.log("One Word solutions",oneWordSolutions(lettersArraySet, potentialWords))
  console.log("Two Word solutions",twoWordSolutions(lettersArraySet, potentialWords))



};


export default Solver;
