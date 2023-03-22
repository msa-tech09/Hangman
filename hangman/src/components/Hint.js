import React, { useState } from "react";

const Hint = ({ hint }) => {
  const [showHint, setShowHint] = useState(false);

  // Function to toggle the visibility of the hint
  const handleToggle = () => {
    setShowHint(!showHint);
  };

  return (
    <div className="text-center">
      {/* Button to show/hide the hint */}
      <button
        className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-700 text-white mb-6"
        onClick={handleToggle}
      >
        Hint
      </button>
      {/* Conditional rendering of the hint */}
      {showHint ? (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p className="text-xl font-bold mb-2">Hint:</p>
          <p>{hint}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Hint;
