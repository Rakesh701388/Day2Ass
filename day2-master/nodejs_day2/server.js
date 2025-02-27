const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse incoming JSON data
app.use(express.json());

// List of users
let users = [
  { id: 1, name: 'Neelima Sandya', email: 'ns@example.com' },
  { id: 2, name: 'Sandya', email: 's@example.com' },
  { id: 3, name: 'Neelima', email: 'n@example.com' }
];

// GET request to fetch users
app.get('/users', (req, res) => {
  console.log('Fetching users...');
  res.json(users);  
});


// POST request to add a new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  
  // Generate a new user object and assign it an id
  const newUser = {
    id: users.length + 1, //id generation
    name,
    email
  };

  // Add the new user to the users array
  users.push(newUser);
  
  // Return the newly added user
  res.status(201).json(newUser);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
