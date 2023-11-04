const express = require('express');
const app = express();
const port = 3000;

// Define a route that returns a JSON response
app.get('/', (req, res) => {
  res.json({ message: 'Server is up and running!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});