import React from "react";

 function  useCallbackchild({Increment}) {
    console.log("useCallbackChild component rendered");

    return <button onClick={Increment}>INCREMENT</button>;
    
     
}export default React.memo(useCallbackchild);