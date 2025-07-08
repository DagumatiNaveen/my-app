import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {

    const [users, setusers] = useState([]);

  const [loading, setloading] = useState(true);

  const url = "https://jsonplaceholder.typicode.com/users";

  console.log(users);
  

  useEffect(() => {
    axios.get(url).then((res) => {
      setusers(res.data);
      setloading(false);
    });
  }, []);
  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
</div>
  )
}

export default App;
