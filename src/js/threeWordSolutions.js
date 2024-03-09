export default async function threeWordSolutions(lettersArraySet, wordList) {

  const response = await fetch('https://letterboxedsolverbe.web.app/findSolutions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ lettersArraySet: Array.from(lettersArraySet), wordList })
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  try {
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Failed to parse JSON:', error)
    return null
  }
}
