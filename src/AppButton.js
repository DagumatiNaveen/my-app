import Button from "./Button";
import React, { useState } from "react";
import "./Button.css";
function AppButton() {
  const[count,setCount]=useState(0);

  function handleClick() {
    setCount(count+1);

  }
  function handleClick1() {
    setCount(0);
  }
  return (
   
    <div>
       <h1>Button Clicked: {count}</h1>

      <Button onClick={handleClick} className="custom-btn-blue">Blue Button</Button>
      <Button onClick={handleClick} className="custom-btn-red">Red Button</Button>
      <Button onClick={handleClick} className="custom-btn-green">Green Button</Button>
      <Button onClick={handleClick1} className="custom-btn-1">Reset</Button>
    </div>
  );
}
export default AppButton;