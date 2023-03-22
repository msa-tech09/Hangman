// Importing the React library
import React from "react";

// Defining a functional component called Word which receives two props: word and guessedLetters
const Word = ({ word, guessedLetters }) => {
  // Returning a JSX element which contains a div element with a class name of "word-container"
  // This div element contains a mapped array of individual letters of the word
  return (
    <div className="word-container">
      {/* Mapping through each letter of the word */}
      {word.split("").map((letter, index) => (
        <div key={index} className="letter-container">
          {/* If the guessedLetters array contains the current letter, show the letter. Otherwise, show an underscore. */}
          {guessedLetters.includes(letter) ? letter : "_"}
        </div>
      ))}
    </div>
  );
};
// Exporting the Word component as the default export
export default Word;
