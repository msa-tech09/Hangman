// Import React library
import React from "react";
// Define the Result component and destructure props
const Result = ({
  selectedWord,
  guessedLetters,
  wrongGuesses,
  handleNewGame,
}) => {
  // Check if player has won
  const hasWon = selectedWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  // Check if player has lost
  const hasLost = wrongGuesses >= 10;
  // Set result text based on win or loss
  const resultText = hasWon
    ? "Congratulations, You won!"
    : hasLost
    ? `Sorry, You lost! The correct word was ${selectedWord}.`
    : "";
  // Return JSX with conditional rendering of result text and restart button
  return (
    <div className="text-center mb-6">
      {resultText && (
        <>
          <p className="text-2xl font-bold mb-2">{resultText}</p>
          <button
            className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 text-white"
            onClick={handleNewGame}
          >
            Restart Game
          </button>
        </>
      )}
    </div>
  );
};
// Export the Result component
export default Result;
