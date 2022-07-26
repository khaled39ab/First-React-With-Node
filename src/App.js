import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const handleAddUser = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email }

    //post data to server
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        const newUsers = [...users, data]
        setUsers(newUsers);
        console.log(data);
      });
  }

  return (
    <div>
      <h1>Load from sever {users.length}</h1>
      <div style={{ margin: '20px', textAlign: 'center' }}>
        <form onSubmit={handleAddUser}>
          <input type="name" name='name' placeholder='Name' />
          <input type="email" name='email' placeholder='Email' />
          <button>Add User</button>
        </form>
      </div>
      {
        users.map(user => <li key={user.id}>ID: {user.id} Name: {user.name} Email: {user.email}</li>)
      }
    </div>
  );
}

export default App;
