import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByValue, incrementByTypedValue } from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((c) => c.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState('')

  // Function to handle the user input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Function to handle dispatch of incrementByTypedValue with user input
  const handleIncrementByTypedValue = () => {
    const numericValue = parseInt(input, 10); // Convert input to a number
    if (!isNaN(numericValue)) {
      dispatch(incrementByTypedValue(numericValue)); // Dispatch the action with the numeric value
      setInput(""); // Clear the input field after dispatching
    } else {
      alert("Please enter a valid number"); // Show an alert if the input is not a number
    }
  };



  return (
    
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "40%",
          alignItems: "center",
        }}
      >
        <button onClick={() => dispatch(incrementByValue(5))}>Increment by 5</button>
        <br />
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <br />
        
        <input
          type="number"
          value={input}
          onChange={handleInputChange} // Update the input state on change
          placeholder="Enter a number"
        />
        <button onClick={handleIncrementByTypedValue}>Increment by Typed Value</button>
      </div>
    </>
  );
}