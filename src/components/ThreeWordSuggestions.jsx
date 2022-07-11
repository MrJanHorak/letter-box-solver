import React, { useEffect , useState } from "react";

// assets
import threeWordSolutions from "../js/threeWordSolutions.js";

// style
import "../styles/threeWordSuggestions.css";

const ThreeWordSuggestions = ({ lettersArraySet, cleanedList }) => {
  const [checkForThree, setCheckForThree] = useState(false);
  let suggestionsArrayThree = [];
  let three = [];

  if (checkForThree) {
    three = threeWordSolutions(lettersArraySet, cleanedList);
    three.map((wordTrio) => suggestionsArrayThree.push(wordTrio));
  }

  const threeWord = suggestionsArrayThree.map((words, index) => {
    return (
      <tr key={3 + index}>
        <td>{words[0]}</td>
        <td>{words[1]}</td>
        <td>{words[2]}</td>
      </tr>
    );
  });

  useEffect(() => {}, [checkForThree]);

  if (!checkForThree) {
    return (
      <>
        You can search for 3 word solutions here. This search can take longer,
        so please be patient.
        <input
          className="button"
          type="submit"
          value="Search More"
          required
          autoComplete="off"
          onSubmit={setCheckForThree(true)}
        />
      </>
    );
  }

  if (three[0] === "no three word solutions found") {
    <>
      <div className="trios-of-suggested-words">
        <h4>All two word solutions:</h4>
        <ul>
          <li>{three[0]}</li>
        </ul>
      </div>
    </>;
  } else {
    return (
      <>
        <div className="trios-of-suggested-words">
          <h4>Only first 10 three word solutions:</h4>
          <table>
          <tbody>
            <tr>
              <th></th>
              <th></th>
            </tr>
          {threeWord}
          </tbody>
          </table>
        </div>
      </>
    );
  }
};

export default ThreeWordSuggestions;
