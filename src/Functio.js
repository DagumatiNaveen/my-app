import App from "./App";
import React from "react";
import { useState } from "react";
import App1 from "./Appl";
function Functio() {
 const [showApp, setShowApp] = useState(false);
    function Axiosfunct() {
     setShowApp(true);
    }
    function Axiosfunct1() {
     setShowApp(true);
    }
  return (
  <>
    <h1 className="text-2xl font-bold mb-4">Axios Function Example...</h1>
    <button onClick={(Axiosfunct)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
      Axios Button
    </button>
    {showApp && <App />}
    <button onClick={(Axiosfunct1)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
      fetching Button
    </button>
    {showApp && <App1 />}
  </>
     
  );
}export default Functio;