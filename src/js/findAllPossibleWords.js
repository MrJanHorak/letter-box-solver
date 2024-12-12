const getAllWords = (
  topRow,
  leftRow,
  rightRow,
  bottomRow,
  lettersArraySet,
  cleaned_list
) => {
  // Preprocess: Map each letter to the rows it belongs to
  const arrayOfRows = [
    new Set(topRow),
    new Set(leftRow),
    new Set(rightRow),
    new Set(bottomRow)
  ]
  const letterToRows = new Map()

  arrayOfRows.forEach((row, index) => {
    row.forEach((letter) => {
      if (!letterToRows.has(letter)) {
        letterToRows.set(letter, new Set())
      }
      letterToRows.get(letter).add(index)
    })
  })

  const validWords = {}

  for (const word in cleaned_list) {
    const letters = word.split('')

    // Skip words containing letters not in lettersArraySet
    if (letters.some((letter) => !lettersArraySet.has(letter))) {
      continue
    }

    let isValid = true

    for (let i = 1; i < letters.length; i++) {
      const prevLetterRows = letterToRows.get(letters[i - 1])
      const currLetterRows = letterToRows.get(letters[i])

      // Check if the sets of rows have any intersection
      const sharedRows = [...prevLetterRows].some((row) =>
        currLetterRows.has(row)
      )

      if (sharedRows) {
        isValid = false
        break
      }
    }

    if (isValid) {
      validWords[word] = true
    }
  }

  return validWords
}

export default getAllWords
