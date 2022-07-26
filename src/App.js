import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h1>Load from server {users.length}</h1>
      {
        users.map(user => <li key={user.id}>ID: {user.id} Name: {user.name} Email: {user.email}</li>)
      }
    </div>
  );
}

export default App;
