import React, { useEffect, useState } from 'react'

//assests
import words from '../../data/words_dictionary.json'
import cleanWordList from '../../js/cleanWordList'
import findAllPossibleWords from '../../js/findAllPossibleWords'

//helper functions
import fetchCurrentLetters from '../../js/fetchCurrentLetters'

// components
import AllSuggestedWords from '../../components/AllSuggestedWords'
import OneWordSuggestions from '../../components/OneWordSuggestions'
import TwoWordSuggestions from '../../components/TwoWordSuggestions'
import ThreeWordSuggestions from '../../components/ThreeWordSuggestions'

// style
import '../../styles/landing.css'

const Landing = () => {
  const [leftRow, setLeftRow] = useState([])
  const [topRow, setTopRow] = useState([])
  const [rightRow, setRightRow] = useState([])
  const [bottomRow, setBottomRow] = useState([])
  const [autoLeftRow, setAutoLeftRow] = useState('')
  const [autoTopRow, setAutoTopRow] = useState('')
  const [autoRightRow, setAutoRightRow] = useState('')
  const [autoBottomRow, setAutoBottomRow] = useState('')
  const [message, setMessage] = useState('Input letters here')
  const [oneWord, setOneWord] = useState([])
  const [twoWord, setTwoWord] = useState([])
  const [threeWord, setThreeWord] = useState([])
  const [cleanedList, setCleanedList] = useState()
  const [receivedWords, setReceivedWords] = useState(false)
  const [suggestions, setSuggestions] = useState()
  const [lettersArraySet, setLettersArraySet] = useState()
  let potentialWords, lettersSet
  let allSubmittedLetters = []

  const onlyLetters = (str) => {
    return /^[a-zA-Z]{1,3}$/.test(str)
  }

  const resetValue = (e) => {
    if (e.target.name === 'left-side') setLeftRow([])
    if (e.target.name === 'right-side') setRightRow([])
    if (e.target.name === 'top-row') setTopRow([])
    if (e.target.name === 'bottom-row') setBottomRow([])
  }

  const handleChange = (e) => {
    if (onlyLetters(e.target.value)) {
      if (e.target.name === 'top-row') setTopRow(e.target.value.toUpperCase())
      if (e.target.name === 'left-side')
        setLeftRow(e.target.value.toUpperCase())
      if (e.target.name === 'right-side')
        setRightRow(e.target.value.toUpperCase())
      if (e.target.name === 'bottom-row')
        setBottomRow(e.target.value.toUpperCase())
    } else {
      setMessage('Please only enter letters')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    allSubmittedLetters = topRow
      .toLowerCase()
      .split('')
      .concat(
        leftRow.toLowerCase().split(''),
        rightRow.toLowerCase().split(''),
        bottomRow.toLowerCase().split('')
      )
    lettersSet = new Set(allSubmittedLetters)
    setLettersArraySet(lettersSet)
    if (lettersSet.size !== 12) {
      setMessage('No double letters allowed!')
    } else {
      setMessage('searching ...')
      setReceivedWords(false)
      Solver(
        topRow.toLowerCase(),
        leftRow.toLowerCase(),
        rightRow.toLowerCase(),
        bottomRow.toLowerCase()
      )
    }
  }

  const Solver = (topRow, leftrow, rightRow, bottomRow) => {
    let cleaned_list = cleanWordList(words)
    potentialWords = findAllPossibleWords(
      topRow,
      leftrow,
      rightRow,
      bottomRow,
      lettersSet,
      cleaned_list
    )

    setCleanedList(potentialWords)
    setReceivedWords(true)
  }

  // Create a list of all word possible with current letters

  useEffect(() => {
    const suggestedWords = () => {
      if (receivedWords) {
        setMessage('All Possible words found!')
        return <AllSuggestedWords potentialWords={cleanedList} />
      }
    }
    setSuggestions(suggestedWords())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receivedWords])

  useEffect(() => {
    fetchCurrentLetters().then((sides) => {
      if (sides.length === 15) {
        setAutoTopRow([sides.split[0]])
        setAutoLeftRow([sides.split[3]])
        setAutoRightRow([sides.split[1]])
        setAutoBottomRow([sides.split[2]])
      }
    })
  }, [])

  // look for any potential one word solutions (which is rare, but kinda cool)

  useEffect(() => {
    if (receivedWords) {
      setMessage('Looking for 2 word combos!')
      const singleWords = () => {
        return (
          <OneWordSuggestions
            lettersArraySet={lettersArraySet}
            cleanedList={cleanedList}
          />
        )
      }

      setOneWord(singleWords())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suggestions])

  // look for any pair of words that can solve the letter boxed

  useEffect(() => {
    if (receivedWords) {
      setMessage('Looking for 3 word combos!')
      const twoWords = () => {
        return (
          <TwoWordSuggestions
            lettersArraySet={lettersArraySet}
            cleanedList={cleanedList}
          />
        )
      }

      setTwoWord(twoWords())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oneWord])

  // look for any trio of words (however limited to 10 since worldlist ^ 3 is hard work)

  useEffect(() => {
    if (receivedWords) {
      const threeWords = () => {
        return (
          <ThreeWordSuggestions
            lettersArraySet={lettersArraySet}
            cleanedList={cleanedList}
          />
        )
      }
      setThreeWord(threeWords())
      setMessage('Done!')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [twoWord])
console.log('autoTopRow', autoTopRow)

  return (
    <div className="main-page-container">
      <div className="title-container">
        <h1>Letter Boxed Solver</h1>
      </div>
      <form className="letters-input" onSubmit={handleSubmit}>
        <h2>{message}</h2>
        <div className="solver-container">
          <div id="top-row-container">
            <label id="top-row-label">
              {topRow}
              <input
                placeholder="ABC"
                id="top-row"
                type="text"
                name="top-row"
                maxLength={3}
                required
                autoComplete="off"
                value={topRow}
                onFocus={resetValue}
                onChange={handleChange}
                aria-label="input for the letters in the top row"
              />
            </label>
          </div>
          <div className="middle-row">
            <div id="left-side-container">
              <label id="left-side-label">
                {leftRow}
                <input
                  id="left-side"
                  type="text"
                  name="left-side"
                  maxLength={3}
                  required
                  autoComplete="off"
                  value={leftRow}
                  onFocus={resetValue}
                  onChange={handleChange}
                  placeholder="JKL"
                  aria-label="input for the letters on the left side"
                />
              </label>
            </div>
            <div className="white-box">
              <div className="row-of-circles" id="top-row-circles">
                ⚪⚪⚪
              </div>
              <div className="row-of-circles" id="left-row-circles">
                ⚪⚪⚪
              </div>
              <div className="row-of-circles" id="right-row-circles">
                ⚪⚪⚪
              </div>
              <div className="row-of-circles" id="bottom-row-circles">
                ⚪⚪⚪
              </div>
            </div>
            <div id="right-side-container">
              <label id="right-side-label">
                {rightRow}
                <input
                  id="right-side"
                  type="text"
                  name="right-side"
                  maxLength={3}
                  autoComplete="off"
                  value={rightRow}
                  onFocus={resetValue}
                  onChange={handleChange}
                  placeholder="DEF"
                  aria-label="input for the letters on the right side"
                />
              </label>
            </div>
          </div>
          <div id="bottom-row-container">
            <label id="bottom-row-label">
              {bottomRow}
              <input
                placeholder="GHI"
                id="bottom-row"
                type="text"
                name="bottom-row"
                maxLength={3}
                required
                autoComplete="off"
                onFocus={resetValue}
                value={bottomRow}
                onChange={handleChange}
                aria-label="input for the bottom row of letters"
              />
            </label>
          </div>
        </div>
        <div className="button-container">
          {/* <input
            className="button"
            type="button"
            value="Autofill todays letters"
            autoComplete="off"
            aria-label="submit button"
            onClick={() => {
              setTopRow(autoTopRow || '')
              setLeftRow(autoLeftRow || '')
              setRightRow(autoRightRow || '')
              setBottomRow(autoBottomRow || '')
            }}
          /> */}
          <input
            className="button"
            type="submit"
            value="Submit"
            autoComplete="off"
            aria-label="submit button"
          />
          <input
            className="button"
            type="button"
            value="Refresh"
            autoComplete="off"
            onClick={() => window.location.reload(false)}
            aria-label="refresh button"
          />
        </div>
      </form>

      <div className="solution-suggestions">
        <div className="suggested-words-container">{suggestions}</div>
        {oneWord && <div className="one-word-solutions">{oneWord}</div>}
        {twoWord && <div className="two-word-solutions">{twoWord}</div>}
        {threeWord && <div className="three-word-solutions">{threeWord}</div>}
      </div>
    </div>
  )
}

export default Landing
