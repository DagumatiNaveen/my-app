import { useState, useEffect } from "react";
import React from "react";
function App1(){
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const url = "https://jsonplaceholder.typicode.com/users";

useEffect(() => {
   
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
    return(
        <div>
            <h1>user data</h1>

        {users.map((user) => (
            <div key={user.id}>
                <p>{user.id}</p>
                <p>{user.email}</p>
        </div>
    ))}
        {loading && <p>Loading...</p>}
        </div>
    )
}export default App1;