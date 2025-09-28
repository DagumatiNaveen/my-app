
import React ,{useState, useCallback}from "react";
import UseCallbackChild from "./useCallbackChild";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  console.log("UseCallback component rendered");

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <h1>UseCallback Example</h1>
      <button onClick={increment}>Increment Count: {count}</button>
      <input type="text" value={text} onChange={handleChange} />
      <p>Current Text: {text}</p>
      <UseCallbackChild Increment={increment} />
    </div>
  );
}
export default UseCallback;