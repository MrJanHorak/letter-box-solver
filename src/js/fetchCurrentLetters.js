// fetch current NYT letterboxed letters from a backend server with the endpoint /fetchLetterBoxedSides

export default async function fetchCurrentLetters() {
  const response = await fetch('https://letterboxedsolverbe.web.app/fetchLetterBoxedSides')

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  try {
    const data = await response.json()
    console.log(data.sides)
    return data.sides
  } catch (error) {
    console.error('Failed to parse JSON:', error)
    return null
  }
}
