import React, { useState } from "react";
import Canavas from "./Canavas";
import Button from "./Button";
import "./App.css";

function App() {
  const [uniqueNumbersArray, setUniqueNumbersArray] = useState([]);

  return (
    <div className="App">
      <Button setUniqueNumbersArray={setUniqueNumbersArray} />
      {uniqueNumbersArray && <Canavas uniqueNumbers={uniqueNumbersArray} />}
    </div>
  );
}

export default App;
