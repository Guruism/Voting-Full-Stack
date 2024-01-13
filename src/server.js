// Install necessary packages: npm install express mysql

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
});

connection.connect();

// API endpoint for user registration
app.post('/register', (req, res) => {
  const { name, age, password } = req.body;

  // Perform validation on the data

  // Hash and salt the password

  // Insert user data into the database
  const sql = 'INSERT INTO users (name, age, password) VALUES (?, ?, ?)';
  connection.query(sql, [name, age, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'User registered successfully' });
    }
  });
});

// API endpoint for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Perform validation on the data

  // Query the database to check if the user exists and the password is correct
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  connection.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (result.length > 0) {
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
