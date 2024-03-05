// inspired by https://www.youtube.com/watch?v=-T9lyyu-Nt4
// code translated from python to javascript
// using ChatGPT 3.5

export default async function fetchLetterBoxedSides() {
  try {
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // const targetUrl = 'https://www.nytimes.com/puzzles/letter-boxed'
    // const response = await fetch(proxyUrl + targetUrl)
    const response = await fetch('https://www.nytimes.com/puzzles/letter-boxed')
    const htmlString = await response.text()
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlString, 'text/html')
    const scripts = doc.querySelectorAll('script')
    let sidesData = ''

    scripts.forEach((script) => {
      if (script.textContent.startsWith('window.gameData')) {
        const gameDataText = script.textContent
        const search = '"sides":'
        const sidesStart = gameDataText.indexOf(search) + search.length + 1
        const length = '"ABC"'.length * 4 + ','.length * 3 // Adjust based on expected length
        sidesData = gameDataText.substring(sidesStart, sidesStart + length) // Extract the sides data
      }
    })

    // Replace and format the string to match the desired output
    return sidesData.replace(/"/g, '').replace(/,/g, ' ').toLowerCase()
  } catch (error) {
    console.error('Failed to fetch Letter Boxed sides:', error)
    return '' // Return an empty string or handle the error as appropriate
  }
}

// Usage example in an async context, like useEffect or an async function
fetchLetterBoxedSides().then((sides) => console.log(sides))


