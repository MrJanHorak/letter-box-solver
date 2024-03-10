// import React, {useState, useEffect} from "react";

// // assets
// import threeWordSolutions from "../js/threeWordSolutions.js";

// // style
// import "../styles/threeWordSuggestions.css";

// const ThreeWordSuggestions = ({ lettersArraySet, cleanedList }) => {
//   const [suggestionsArrayThree, setSuggestionsArrayThree] = useState([]);
//   const [three, setThree] = useState([]);

//   useEffect(() => {
//     const fetchThreeWordSolutions = async () => {
//       const result = await threeWordSolutions(lettersArraySet, cleanedList);
//       setThree(result.solutions);
//       setSuggestionsArrayThree(result.solutions.map(wordTrio => wordTrio));
//     };

//     fetchThreeWordSolutions();
//   }, [lettersArraySet, cleanedList]);

//   const threeWord = suggestionsArrayThree.map((words, index) => {
//     return (
//       <tr key={3 + index}>
//         <td>{words[0]}</td>
//         <td>{words[1]}</td>
//         <td>{words[2]}</td>
//       </tr>
//     );
//   });

//   if (three[0] === "no three word solutions found") {
//     <>
//       <div className="trios-of-suggested-words">
//         <h4>All two word solutions:</h4>
//         <ul>
//           <li>{three[0]}</li>
//         </ul>
//       </div>
//     </>;
//   } else {
//     return (
//       <>
//         <div className="trios-of-suggested-words">
//           <h4>{threeWord.length|| <span id='loading'>loading ...</span>} 3-word solutions:</h4>
//           <table>
//             <tbody>
//               <tr>
//                 <th></th>
//                 <th></th>
//               </tr>
//               {threeWord}
//             </tbody>
//           </table>
//         </div>
//       </>
//     );
//   }
// };

// export default ThreeWordSuggestions;

import React, { useState, useEffect } from 'react'

// assets
import threeWordSolutions from '../js/threeWordSolutions.js'

// style
import '../styles/threeWordSuggestions.css'

const ThreeWordSuggestions = ({ lettersArraySet, cleanedList }) => {
  const [suggestionsArrayThree, setSuggestionsArrayThree] = useState([])
  const [three, setThree] = useState([])
  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    const fetchThreeWordSolutions = async () => {
      const result = await threeWordSolutions(lettersArraySet, cleanedList)
      setThree(result.solutions)
      setSuggestionsArrayThree(result.solutions.map((wordTrio) => wordTrio))
    }

    fetchThreeWordSolutions()
  }, [lettersArraySet, cleanedList])

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

  const threeWord = suggestionsArrayThree.map((words, index) => {
    return (
      <tr key={3 + index}>
        <td>{revealWord(words[0])}</td>
        <td>{revealWord(words[1])}</td>
        <td>{revealWord(words[2])}</td>
      </tr>
    )
  })

  if (three[0] === 'no three word solutions found') {
    return (
      <div className="trios-of-suggested-words">
        <h4>Three word solutions:</h4>
        <ul>
          <li>{three[0]}</li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className="three-word-solutions">
        <div className="trios-of-suggested-words">
          <h4>
            {threeWord.length || <span id="loading">loading ...</span>} 3-word
            solutions:
          </h4>
          {Boolean(threeWord.length) && (
            <div>
              <button
                className="reveal-button"
                onClick={() => setReveal(!reveal)}
              >
                {reveal ? 'Hide' : 'Reveal'} Words
              </button>

              <table>
                <tbody>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                  {threeWord}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ThreeWordSuggestions
