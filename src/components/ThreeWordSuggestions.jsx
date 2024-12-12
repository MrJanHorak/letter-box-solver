import React, { useState, useEffect } from 'react'

// assets
import threeWordSolutions from '../js/threeWordSolutions.js'
import twoWordSolutions from '../js/twoWordSolutions.js'
import revealWord from '../js/revealWord.js'

// style
import '../styles/threeWordSuggestions.css'

const ThreeWordSuggestions = ({ lettersArraySet, cleanedList }) => {
  const [suggestionsArrayThree, setSuggestionsArrayThree] = useState([])

  useEffect(() => {
    const fetchSolutions = async () => {
      // Fetch three-word solutions from the backend
      const result = await threeWordSolutions(lettersArraySet, cleanedList)
      const threeWordList = result.solutions

      // Generate two-word solutions on the frontend
      const twoWordList = twoWordSolutions(lettersArraySet, cleanedList)

      // Create a Set of stringified two-word solutions for efficient lookup
      const twoWordSet = new Set(twoWordList.map((pair) => pair.join(',')))

      // Filter out three-word solutions that contain any existing two-word solution
      const filteredThreeWordSolutions = threeWordList.filter((trio) => {
        // Generate all possible two-word combinations from the trio
        const combinations = [
          [trio[0], trio[1]],
          [trio[1], trio[2]],
          [trio[0], trio[2]]
        ]

        // Check if any combination exists in the two-word solutions
        return !combinations.some((pair) => twoWordSet.has(pair.join(',')))
      })

      setSuggestionsArrayThree(filteredThreeWordSolutions)
    }

    fetchSolutions()
  }, [lettersArraySet, cleanedList])

  const [reveal, setReveal] = useState(false)

  const threeWordComponents = suggestionsArrayThree.map((words, index) => (
    <tr key={index}>
      <td>{revealWord(words[0], reveal)}</td>
      <td>{revealWord(words[1], reveal)}</td>
      <td>{revealWord(words[2], reveal)}</td>
    </tr>
  ))

  return (
    <div className="three-word-solutions">
      <div className="trios-of-suggested-words">
        <h4>
          {threeWordComponents.length || <span id="loading">loading ...</span>}{' '}
          3-word solutions:
        </h4>
        {Boolean(threeWordComponents.length) && (
          <div>
            <button
              className="reveal-button"
              onClick={() => setReveal(!reveal)}
            >
              {reveal ? 'Hide' : 'Reveal'} Words
            </button>
            <table>
              <tbody>{threeWordComponents}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default ThreeWordSuggestions
