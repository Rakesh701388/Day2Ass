import React, { useState } from 'react';

function UserForm({ addUser }) {
  const [name, setName] = useState(''); // State to hold the user's name
  const [email, setEmail] = useState(''); // State to hold the user's email

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the user object to send to the backend
    const newUser = {
      name,
      email
    };

    // Send the new user to the backend using POST request
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser), // Convert the object to JSON
    })
      .then((response) => response.json())
      .then((data) => {
        // Call the addUser function passed as prop to update the list
        addUser(data); // Pass the newly added user to the parent component
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });

    // Clear form fields after submission
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New User</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
          required
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
