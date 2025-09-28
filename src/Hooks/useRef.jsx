import React, { useState, useRef, useEffect } from "react";

function PreviousValueExample() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

console.log("Component rendered");

  useEffect(() => {
    prevCountRef.current = count; // update ref after every render
  }, [count]);

  return (
    <div>
      <h2>Current: {count}</h2>
      <h3>Previous: {prevCountRef.current}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousValueExample;
// filepath: d:\Realtimepratice\my-app\src\Hooks\useRef.jsx