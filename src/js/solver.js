import words from '../data/words_dictionary.json'
import cleanWordList from './cleanWordList'

const Solver = (topRow, leftrow, rightRow, bottomRow) =>{
  let allLetters = [[topRow.split('')],[leftrow.split('')],[rightRow.split('')],[bottomRow.split('')]]
  console.log("in Solver.")
  console.log(allLetters)
  console.log(topRow , leftrow , rightRow , bottomRow)
  if(words['key']){
    console.log('true')
  }
  
  cleanWordList(words)

}

export default Solver