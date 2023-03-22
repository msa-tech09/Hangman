import React, { useState } from "react";

// This is a functional component called Help
const Help = () => {
  // Declaring a state variable called showHelp and initializing it with false
  const [showHelp, setShowHelp] = useState(false);

  // Defining a function called handleToggle which toggles the value of showHelp
  const handleToggle = () => {
    setShowHelp(!showHelp);
  };

  // Returning a JSX element which contains a button and a conditional statement
  return (
    <div className="text-center">
      {/* Button element which toggles the value of showHelp when clicked  */}
      <button
        className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 text-white mb-6"
        onClick={handleToggle}
      >
        {/* Conditional rendering based on the value of showHelp */}
        {showHelp ? "Hide Help" : "How to Play"}
      </button>
      {/* Conditional statement which renders a div element based on the value of showHelp */}
      {showHelp ? (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p className="text-xl font-bold mb-2">How to Play:</p>
          <br />
          <p> The computer selects a word.</p>
          <br />
          <p> You have to guess the word by suggesting letters.</p>
          <br />
          <p>
            You can make up to 10 incorrect guesses before you lose. After that
            the game is over and you will no longer be able to save the person.
          </p>
          <br />
          <p>Make sure this does not happen!</p>
          <br />
          <p> You win if you guess all the letters correctly.</p>
          <br />
          <p> Click the "Restart Game" button to start a new game.</p>
          <br />
          <p>Enjoy the game!</p>
        </div>
      ) : null}
    </div>
  );
};

// Exporting the Help component as the default export
export default Help;
