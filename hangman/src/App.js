// Importing necessary components and styles
import React, { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import Hangman from "./components/Hangman";
import Help from "./components/Help";
import Keyboard from "./components/Keyboard";
import Result from "./components/Result";
import Hint from "./components/Hint";
import "./App.css";

// Define functional component App
const App = () => {
  // Define word list and hints using useMemo to prevent unnecessary re-rendering
  const wordList = useMemo(() => [
    "London",
    "Manchester",
    "Paris",
    "Milan",
    "Madrid",
    "New-York",
    "Berlin",
    "Amsterdam",
    "Cape-Town",
    "Johannesburg",
    "Riyadh",
    "Abu-Dhabi",
    "Dubai",
  ]);

  const hints = useMemo(() => [
    "Capital of England",
    "City in the north of England",
    "Capital of France",
    "City in Italy known for fashion",
    "Capital of Spain",
    "City in the United States known for its skyline",
    "Capital of Germany",
    "City in the Netherlands known for its canals",
    "City in South Africa",
    "City in South Africa",
    "Capital of Saudi Arabia",
    "Capital of the United Arab Emirates",
    "City in the United Arab Emirates known for its skyscrapers",
  ]);

  // Define state variables using useState hook
  const [selectedWord, setSelectedWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [hint, setHint] = useState(null);

  // useEffect hook used to choose a random word and hint from the list at the start of the game and whenever the list of words or hints change
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const newSelectedWord = wordList[randomIndex].toUpperCase();
    setSelectedWord(newSelectedWord);
    setHint(hints[randomIndex]);
  }, [hints, wordList]);

  // Function to start a new game
  const handleNewGame = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const newSelectedWord = wordList[randomIndex].toUpperCase();
    setSelectedWord(newSelectedWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameOver(false);
    setHint(hints[randomIndex]);
  };

  // Function to handle guesses
  const handleGuess = (letter) => {
    if (!gameOver && !guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!selectedWord.includes(letter)) {
        setWrongGuesses(wrongGuesses + 1);
        if (wrongGuesses + 1 >= 10) {
          setGameOver(true);
        }
      }
    }
  };

  // Map the selected word to display blank spaces for unguessed letters and the actual letter for guessed letters
  const word = selectedWord
    .split("")
    .map((letter) =>
      letter === " " ? " " : guessedLetters.includes(letter) ? letter : "_"
    )
    .join(" ");

  // Return the JSX elements for the App component
  return (
    <div className="container mx-auto">
      <Header />
      <br />
      <Hangman incorrectGuesses={wrongGuesses} />
      <br />
      <p className="text-3xl font-bold text-center">{word}</p>
      <br />
      <Keyboard
        guessedLetters={guessedLetters}
        handleGuess={handleGuess}
        correctWord={selectedWord}
      />
      <br />
      <Result
        selectedWord={selectedWord}
        guessedLetters={guessedLetters}
        handleNewGame={handleNewGame}
        wrongGuesses={wrongGuesses}
        gameOver={gameOver}
      />
      <br />
      <Help />
      <Hint hint={hint} />
    </div>
  );
};

export default App;
