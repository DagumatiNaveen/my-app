import React, { useState } from "react";

function DeepChild({user}) {
  return <h2>Deep Child Component: {user}</h2>; 
}

// function MiddleChild({user}){
//     console.log("Middle Child Component: ", user);
    
//     return <DeepChild user={user} />;
// }

function Parent() {
    const [user] =useState("John Doe");
    return <DeepChild user={user} />;
}

export default Parent;