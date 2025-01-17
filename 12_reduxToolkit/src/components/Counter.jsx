import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByValue, incrementByTypedValue } from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((c) => c.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState('')
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
        
        <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
    </>
  );
}