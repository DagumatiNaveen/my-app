
import React from "react";
import "./Button";

function Button({ onClick, children, className = "" }) {
  return (
    <button onClick={onClick} className={`bg-blue-500 text-white py-2 px-4 rounded ${className}`}>
      {children}
    </button>
  );
}
export default Button;