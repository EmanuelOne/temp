import React, { useRef, useState } from "react";

const App = () => {
  const ref = useRef();
  const inputRef = useRef();
  const [state, setState] = useState("");
  return (
    <div className="jumbotron primary">
      <h1>currency calculator</h1>
      <div className="input">
        <select name="" id="" ref={ref}>
          <option value="0">Naira to Dollar</option>
          <option value="1">Dollar to Naira</option>
        </select>
        <input type="text" ref={inputRef} />
      </div>
      {state && (
        <div className="result">
          {ref.current.value === "0" && (
            <p>
              {inputRef.current.value} Naira to {state} Dollar
            </p>
          )}
          {ref.current.value === "1" && (
            <p>
              {inputRef.current.value} Dollar to {state} Naira
            </p>
          )}
        </div>
      )}
      <button
        className="btn btn-dark"
        onClick={() => {
          const rate = ref.current.value;
          const value = inputRef.current.value;
          let conversion = "";
          if (rate === "0" && value && !isNaN(Number(value))) {
            conversion = (Number(value) / 400).toFixed(2);
          } else if (value && !isNaN(Number(value))) {
            conversion = (Number(value) * 400).toFixed(2);
          }
          setState(conversion);
        }}>
        Calculate
      </button>
    </div>
  );
};

export default App;
