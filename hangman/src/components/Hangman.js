// Importing the React library
import React from "react";

// Importing the images for the different hangman states
import img0 from "../images/0.jpg";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";

// Importing the CSS file for the Hangman component
import "./Hangman.css";

// Defining a functional component called Hangman which receives a prop called incorrectGuesses
const Hangman = ({ incorrectGuesses }) => {
  // Creating an array of all the different hangman images
  const hangmanImages = [
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  // Determining the index of the current hangman image to be shown
  const hangmanImageIndex = incorrectGuesses > 10 ? 10 : incorrectGuesses;
  const hangmanImage = hangmanImages[hangmanImageIndex];

  // Returning a JSX element which contains a div element with a class name of "flex justify-center items-center"
  // This div element contains an img element with a class name of "max-w-full h-auto"
  // The src attribute of the img element is set to the current hangman image
  // The alt attribute of the img element is set to "Hangman"
  return (
    <div className="flex justify-center items-center">
      <img className="max-w-full h-auto" src={hangmanImage} alt="Hangman" />
    </div>
  );
};

// Exporting the Hangman component as the default export
export default Hangman;
