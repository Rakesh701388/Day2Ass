import React, { useState, useEffect } from 'react';
import UserList from './UserList'; // Import UserList component
import UserForm from './UserForm';// Import UserFormcomponent

function App() {
  const [users, setUsers] = useState([]);

  // Fetch users from the backend
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  // Function to add a new user to the list
  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]); // Add the new user to the state
  };

  return (
    <div>
      <h1>Welcome to the User Management</h1>
      <UserForm addUser={addUser} /> {}
      <UserList users={users} /> {}
    </div>
  );
}

export default App;
