import React, { useState, useEffect } from "react";
import Canavas from "./Canavas";
import "./App.css";

function App() {
  const [uniqueNumbersArray, setUniqueNumbersArray] = useState([]);
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
    <div className="App">
      {uniqueNumbersArray && <Canavas uniqueNumbers={uniqueNumbersArray} />}
    </div>
  );
}

export default App;
