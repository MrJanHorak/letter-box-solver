import React, { useState } from 'react'

// assets
import twoWordSolutions from '../js/twoWordSolutions.js'

// style
import '../styles/twoWordSuggestions.css'

const TwoWordSuggestions = ({ lettersArraySet, cleanedList }) => {
  const [reveal, setReveal] = useState(false)
  let two = twoWordSolutions(lettersArraySet, cleanedList)
  let suggestionsArrayTwo = []

  two.map((wordPair) => suggestionsArrayTwo.push(wordPair))

  const revealWord = (word) => {
    return reveal ? (
      word
    ) : (
      <span>
        {word[0]}
        <span className="hidden-characters">{'*'.repeat(word.length - 2)}</span>
        {word[word.length - 1]}
      </span>
    )
  }

  const twoWord = suggestionsArrayTwo.map((words, index) => {
    return (
      <tr key={2 + index}>
        <td>{revealWord(words[0])}</td>
        <td>{revealWord(words[1])}</td>
      </tr>
    )
  })

  if (two[0] === 'no two word solutions found') {
    return (
      <div className="pairs-of-suggested-words">
        <h4>Two word solutions:</h4>
        <ul>
          <li>{two[0]}</li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className="two-word-solutions">
        <div className="pairs-of-suggested-words">
          <h4>All {twoWord.length} two word solutions:</h4>
          <button className="reveal-button" onClick={() => setReveal(!reveal)}>
            {reveal ? 'Hide' : 'Reveal'} Words
          </button>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th></th>
              </tr>
              {twoWord}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TwoWordSuggestions
