const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, error: 'Invalid input format' });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
  const highestAlphabet = alphabets.length ? [alphabets.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))[alphabets.length - 1]] : [];

  res.json({
    is_success: true,
    user_id: 'sobin_johnson_28092003',  // Replace with actual user_id
    email: 'sk9903@srmist.edu.in',         // Replace with actual email
    roll_number: 'RA2111003010137',        // Replace with actual roll number
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highestAlphabet
  });
});

app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
