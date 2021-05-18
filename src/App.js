import React, { useState, useEffect } from "react";
import { generateUniqueNumbers } from "./Common";
import Canavas from "./Canavas";
import "./App.css";

function App() {
  const [uniqueNumbersArray, setUniqueNumbersArray] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const uniqueSet = await generateUniqueNumbers();
        setUniqueNumbersArray([...Array.from(uniqueSet)]);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="App">
      {uniqueNumbersArray && <Canavas uniqueNumbers={uniqueNumbersArray} />}
    </div>
  );
}

export default App;
