# Hangman Game

This is a simple hangman game created using React. The game randomly selects a word from a predefined list of words and the player needs to guess the word letter by letter before making too many incorrect guesses.


## Getting Started

To get started with the Hangman Game, simply clone the repository and install the dependencies using the following commands:

```bash
git clone https://github.com/msa-tech09/hangman.git
cd hangman
npm install
```
To start the development server, run:
```
npm start
```

## Usage

Once the development server is running, open your web browser and navigate to http://localhost:3000/ to play the game. The game will automatically choose a random word from the predefined list and display blank spaces for each letter in the word.

To make a guess, simply click on a letter on the virtual keyboard displayed on the screen. If the letter is present in the word, it will be revealed in the correct position. If the letter is not present in the word, a part of the hangman will be drawn, representing an incorrect guess.

You can continue making guesses until you guess the entire word or make too many incorrect guesses, which will result in the game being over.

To start a new game, simply click the "Restart Game" button that appears at the end of the game.


## Components

The game is composed of the following React components:

- Header - displays the game title
- Hangman - displays the hangman graphics based on the number of incorrect guesses
- Help - displays instructions on how to play the game
- Keyboard - displays the virtual keyboard that the player can use to make guesses
- Result - displays the outcome of the game (win or lose) and a button to start a new game
- Hint - displays a hint for the word that the player is trying to guess
- App - the main component that orchestrates the game logic and renders the other components


## License

This project is licensed under the MIT License. See the LICENSE (https://choosealicense.com/licenses/mit/) file for more information.
