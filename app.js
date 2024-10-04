const express = require('express');
const randomNumber = require('random-number');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

const options = {
  min: 1000000000, 
  max: 9999999999, 
  integer: true    
};

const generatePhoneNumbers = (count) => {
  const phoneNumbers = [];
  for (let i = 0; i < count; i++) {
    phoneNumbers.push(randomNumber(options).toString());
  }
  return phoneNumbers;
};

app.get('/get-data', (req, res) => {
  const phoneNumbers = generatePhoneNumbers(100);
  res.json(phoneNumbers);
});
app.post('/get-data', (req, res) => {
  console.log(req.body);
  res.json("ashif",req.body);
})

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
