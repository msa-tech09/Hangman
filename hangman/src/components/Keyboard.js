import React from "react";
import "./Keyboard.css"; // import CSS file

const Keyboard = ({ guessedLetters, handleGuess, gameOver, correctWord }) => {
  // Define an array of all the letters in the virtual keyboard
  const virtualKeyboardLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-".split("");

  // Check if the whole word has been guessed correctly
  const isWordGuessed = correctWord
    .toUpperCase()
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  return (
    <div className={`keyboard ${gameOver ? "disabled" : ""}`}>
      {/* Map through each letter in the virtualKeyboardLetters array */}
      {virtualKeyboardLetters.map((letter, index) => (
        // Create a button element for each letter, with a unique key and class name
        <button
          key={letter}
          className={`key ${guessedLetters.includes(letter) ? "disabled" : ""}`}
          style={{ left: `${index * 3}rem`, top: "3rem" }}
          // Disable the button if the letter has already been guessed or if the game is over
          disabled={
            guessedLetters.includes(letter) || gameOver || isWordGuessed
          }
          // Add an onClick event listener to each button
          onClick={() => handleGuess(letter)}
        >
          {letter} {/* Render the letter inside the button */}
        </button>
      ))}
      {/* Show a game over message if the game is over and the word was not guessed */}
      {gameOver && !guessedLetters.includes("_") && (
        <div className="game-over-message">
          Sorry, You lost! The correct word was: <strong>{correctWord}</strong>
        </div>
      )}
    </div>
  );
};

export default Keyboard; // Export the Keyboard component
