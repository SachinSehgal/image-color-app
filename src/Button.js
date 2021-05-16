import React, { useEffect } from "react";

const Button = ({ setUniqueNumbersArray }) => {

  // generate Unique Numbers function
  const generateUniqueNumbers = () => {

    // variables
    const uniqueNumberSet = new Set();
    let counter = 1;

    // generate unique numbers
    while (uniqueNumberSet.size <= 31) {
      uniqueNumberSet.add(Math.floor(Math.random() * (counter * 8)));
      counter++;
    }

    setUniqueNumbersArray([...Array.from(uniqueNumberSet)]);
  };


  useEffect(() => {
    generateUniqueNumbers();
  }, []);

  return (
    <button className="btn" onClick={() => generateUniqueNumbers()}>
      Regenerate Colors
    </button>
  );
};

export default Button;
