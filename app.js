const express = require('express');
const randomNumber = require('random-number');
const cors = require('cors'); // Import cors middleware
const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

// Configuration for generating random 10-digit numbers
const options = {
  min: 1000000000, // Minimum value (10-digit number)
  max: 9999999999, // Maximum value (10-digit number)
  integer: true    // Return integer numbers
};

// Function to generate an array of 100 random 10-digit numbers
const generatePhoneNumbers = (count) => {
  const phoneNumbers = [];
  for (let i = 0; i < count; i++) {
    phoneNumbers.push(randomNumber(options).toString());
  }
  return phoneNumbers;
};

// Route to handle GET request
app.get('/get-data', (req, res) => {
  const phoneNumbers = generatePhoneNumbers(100);
  res.json(phoneNumbers);
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
